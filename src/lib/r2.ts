import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const bucketName = process.env.R2_BUCKET_NAME || "pixarrow";
const publicUrl = process.env.R2_PUBLIC_URL;

export const isR2Configured = Boolean(
  accountId && accessKeyId && secretAccessKey && bucketName
);

export const r2Client = new S3Client({
  region: "auto",
  endpoint: accountId ? `https://${accountId}.r2.cloudflarestorage.com` : undefined,
  credentials: {
    accessKeyId: accessKeyId || "",
    secretAccessKey: secretAccessKey || "",
  },
});

export async function uploadFile({
  buffer,
  fileName,
  contentType,
}: {
  buffer: Buffer;
  fileName: string;
  contentType: string;
}): Promise<{ url: string; storage: 'r2' | 'local'; key: string }> {
  // Sanitize filename and create unique timestamped key
  const cleanName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
  const timestamp = Date.now();
  const key = `uploads/${timestamp}-${cleanName}`;

  if (isR2Configured) {
    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: buffer,
        ContentType: contentType,
      });

      await r2Client.send(command);

      // Construct public URL
      let fileUrl = "";
      if (publicUrl) {
        const cleanPublicUrl = publicUrl.replace(/\/$/, "");
        fileUrl = `${cleanPublicUrl}/${key}`;
      } else {
        fileUrl = `https://${bucketName}.r2.cloudflarestorage.com/${key}`;
      }

      return {
        url: fileUrl,
        storage: 'r2',
        key,
      };
    } catch (error: any) {
      console.warn("Cloudflare R2 upload failed, falling back to local storage:", error.message);
    }
  }

  // Fallback to local public/uploads directory for seamless local development
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const localFileName = `${timestamp}-${cleanName}`;
  const localFilePath = path.join(uploadsDir, localFileName);
  fs.writeFileSync(localFilePath, buffer);

  return {
    url: `/uploads/${localFileName}`,
    storage: 'local',
    key: `uploads/${localFileName}`,
  };
}
