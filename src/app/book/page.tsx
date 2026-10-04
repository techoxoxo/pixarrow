import BookForm from "@/components/BookForm";
import { generateDynamicMetadata } from "@/lib/seo";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await generateDynamicMetadata("/book");
}

export default function BookPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen bg-brand-bg relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-purple/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-brand-magenta/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] left-10 w-[40vw] h-[40vw] bg-[#00DFD8]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <BookForm />
      </div>
    </div>
  );
}
