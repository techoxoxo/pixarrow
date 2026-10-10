import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/hire-developers");
}

export default function HireDevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generatePageJsonLd({
    title: "Hire Dedicated Next.js & Full-Stack Engineering Pods | Pixarrow",
    description: "Hire pre-vetted senior Next.js, React Native, Python, and AI engineers with flexible monthly engagement models, 15-day risk-free trial, and daily standups.",
    url: "https://pixarrow.com/hire-developers",
    type: "Service",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "Hire Dedicated Developers", url: "https://pixarrow.com/hire-developers" }
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

