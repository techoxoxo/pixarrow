/**
 * IndexNow Protocol Helper for Pixarrow
 * Automatically submits new and updated URLs to Bing, Yahoo, Yandex, Seznam, and IndexNow network
 * for instant sub-second search engine indexing.
 */

const INDEXNOW_KEY = "pixarrow-indexnow-7b4c9e82";
const HOST = "pixarrow.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

export async function pingIndexNow(urls: string[]): Promise<{ success: boolean; results: any }> {
  if (!urls || urls.length === 0) {
    return { success: false, results: "No URLs provided" };
  }

  // Format URLs to ensure absolute path
  const formattedUrls = urls.map(u => u.startsWith("http") ? u : `https://${HOST}${u.startsWith("/") ? "" : "/"}${u}`);

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: formattedUrls,
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  const results: Record<string, any> = {};

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      results[endpoint] = {
        status: response.status,
        ok: response.ok,
      };
    } catch (error: any) {
      results[endpoint] = {
        error: error.message,
      };
    }
  }

  return {
    success: true,
    results,
  };
}
