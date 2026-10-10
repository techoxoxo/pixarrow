// Next.js calls register() once when the server starts. We use it to start the in-process
// digest scheduler. This needs a long-running Node server (`next start`, VPS, Docker);
// on serverless hosts the vercel.json cron hitting /api/cron/blog does the same job.
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.AUTO_BLOG_SCHEDULER === "false" || !process.env.GEMINI_API_KEY) return;

  const g = globalThis as unknown as { __autoBlogScheduler?: boolean };
  if (g.__autoBlogScheduler) return; // avoid duplicate timers (dev hot reload)
  g.__autoBlogScheduler = true;

  const { runAutoBlogIfDue } = await import("./lib/autoBlog");
  const hourUtc = Number(process.env.AUTO_BLOG_HOUR_UTC ?? 4);
  let running = false;

  const tick = async () => {
    if (running || new Date().getUTCHours() !== hourUtc) return;
    running = true;
    try {
      console.log("[auto-blog] scheduled run:", JSON.stringify(await runAutoBlogIfDue()));
    } catch (e) {
      console.error("[auto-blog] scheduled run failed:", e);
    } finally {
      running = false;
    }
  };

  setInterval(tick, 10 * 60 * 1000).unref(); // check every 10 min; the 20h guard prevents repeats
  console.log(`[auto-blog] scheduler started (daily at ${String(hourUtc).padStart(2, "0")}:00 UTC)`);
}
