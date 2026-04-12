import dbConnect from "./mongodb";
import SEO from "@/models/SEO";
import { Metadata } from "next";

export async function generateDynamicMetadata(path: string): Promise<Metadata> {
  try {
    await dbConnect();
    const seo = await SEO.findOne({ pagePath: path });
    
    if (seo) {
      return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
          title: seo.title,
          description: seo.description,
          type: 'website',
        }
      };
    }
  } catch (error) {
    console.error(`SEO fetch failed for ${path}:`, error);
  }
  
  // Fallback to defaults (defined in layout or here)
  return {};
}
