import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/calculator");
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = generatePageJsonLd({
    title: "Interactive Project Scope & Budget Calculator | Pixarrow",
    description: "Calculate your technical scope, target timeline, and budget estimate in 2 minutes. Receive a customized architectural blueprint and sprint breakdown.",
    url: "https://pixarrow.com/calculator",
    type: "WebApplication",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "Project Scope & Budget Calculator", url: "https://pixarrow.com/calculator" }
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

