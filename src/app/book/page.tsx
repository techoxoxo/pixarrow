import BookForm from "@/components/BookForm";
import { generateDynamicMetadata, generatePageJsonLd } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/book");
}

export default function BookPage() {
  const jsonLd = generatePageJsonLd({
    title: "Book a 30-Minute Architecture & Growth Strategy Call | Pixarrow",
    description: "Schedule a direct strategy call with our Lead Architect and Partners. Get a comprehensive technical review, ERD blueprint, and project roadmap.",
    url: "https://pixarrow.com/book",
    type: "ContactPage",
    breadcrumbs: [
      { name: "Home", url: "https://pixarrow.com" },
      { name: "Book Strategy Call & Contact", url: "https://pixarrow.com/book" }
    ]
  });

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen bg-[#070114] text-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF007A]/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[50%] left-[20%] w-[40vw] h-[40vw] bg-[#00DFD8]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-grid-pattern z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <BookForm />
      </div>
    </div>
  );
}
