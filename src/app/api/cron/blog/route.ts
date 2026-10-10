import { NextResponse } from "next/server";
import { runAutoBlog, runAutoBlogIfDue } from "@/lib/autoBlog";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Called by the scheduler (Vercel Cron sends `Authorization: Bearer $CRON_SECRET`).
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  try {
    const force = new URL(request.url).searchParams.get("force") === "1";
    return NextResponse.json({ success: true, ...(await (force ? runAutoBlog() : runAutoBlogIfDue())) });
  } catch (error: any) {
    console.error("Auto blog cron failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
