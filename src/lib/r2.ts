import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

export function getR2Config() {
  const accountId = (process.env.R2_ACCOUNT_ID || "").trim();
  const accessKeyId = (process.env.R2_ACCESS_KEY_ID || "").trim();
  const secretAccessKey = (process.env.R2_SECRET_ACCESS_KEY || "").trim();
  const bucketName = (process.env.R2_BUCKET_NAME || "pixarrow").trim();
  const publicUrl = (process.env.R2_PUBLIC_URL || "").trim();
  const endpoint = (process.env.R2_ENDPOINT || (accountId ? `https://${accountId}.r2.cloudflarestorage.com` : "")).trim();

  const isConfigured = Boolean(
    accountId && accessKeyId && secretAccessKey && bucketName
  );

  return {
    accountId,
    accessKeyId,
    secretAccessKey,
    bucketName,
    publicUrl,
    endpoint,
    isConfigured,
  };
}

export function getR2Client() {
  const config = getR2Config();
  if (!config.isConfigured) return null;

  return new S3Client({
    region: "auto",
    endpoint: config.endpoint || `https://${config.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey,
    },
  });
}

export const isR2Configured = Boolean(
  (process.env.R2_ACCOUNT_ID || "").trim() &&
  (process.env.R2_ACCESS_KEY_ID || "").trim() &&
  (process.env.R2_SECRET_ACCESS_KEY || "").trim() &&
  (process.env.R2_BUCKET_NAME || "pixarrow").trim()
);

export async function uploadFile({
  buffer,
  fileName,
  contentType,
}: {
  buffer: Buffer;
  fileName: string;
  contentType: string;
}): Promise<{ url: string; storage: 'r2' | 'local'; key: string; error?: string }> {
  const config = getR2Config();
  const cleanName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_").toLowerCase();
  const timestamp = Date.now();
  const key = `uploads/${timestamp}-${cleanName}`;

  if (config.isConfigured) {
    try {
      const client = getR2Client();
      if (!client) {
        throw new Error("Could not initialize S3/R2 client");
      }

      const command = new PutObjectCommand({
        Bucket: config.bucketName,
        Key: key,
        Body: buffer,
        ContentType: contentType,
      });

      await client.send(command);

      // Construct public URL from custom domain or default R2 endpoint
      let fileUrl = "";
      if (config.publicUrl) {
        const cleanPublicUrl = config.publicUrl.replace(/\/$/, "");
        fileUrl = `${cleanPublicUrl}/${key}`;
      } else {
        fileUrl = `https://${config.bucketName}.r2.cloudflarestorage.com/${key}`;
      }

      return {
        url: fileUrl,
        storage: 'r2',
        key,
      };
    } catch (error: any) {
      console.error("Cloudflare R2 upload error:", error);
      const isAuthError = error.Code === "Unauthorized" || error.message?.includes("Unauthorized") || error.$metadata?.httpStatusCode === 401;
      
      const r2ErrorMessage = isAuthError 
        ? "Cloudflare R2 returned 401 Unauthorized. Please verify your R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY in .env."
        : `Cloudflare R2 upload failed: ${error.message}`;

      // Fallback to local storage if directory creation succeeds
      try {
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
          error: r2ErrorMessage,
        };
      } catch (localErr: any) {
        throw new Error(`${r2ErrorMessage} (Local storage fallback also failed: ${localErr.message})`);
      }
    }
  }

  // Fallback to local public/uploads directory when R2 is not configured
  try {
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
  } catch (err: any) {
    throw new Error(`Failed to save uploaded file to local storage: ${err.message}`);
  }
}

