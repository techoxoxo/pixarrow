import dbConnect from "@/lib/mongodb";
import SEO from "@/models/SEO";
import { Metadata } from "next";

export async function generateDynamicMetadata(pagePath: string): Promise<Metadata> {
  try {
    await dbConnect();
    const seo = await SEO.findOne({ pagePath });

    if (!seo) return {};

    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords ? seo.keywords.split(',').map((k: string) => k.trim()) : undefined,
      openGraph: {
        title: seo.title,
        description: seo.description,
      }
    };
  } catch (error) {
    return {};
  }
}
