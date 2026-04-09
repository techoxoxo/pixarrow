export default function TermsPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">Terms of <span className="text-gradient">Service</span></h1>
        
        <div className="prose prose-invert max-w-none text-white/60 space-y-8 font-sans">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Pixarrow's website for personal, non-commercial transitory viewing only.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
            <p>The materials on Pixarrow's website are provided on an 'as is' basis. Pixarrow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
