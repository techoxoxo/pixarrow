export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">Privacy <span className="text-gradient">Policy</span></h1>
        
        <div className="prose prose-invert max-w-none text-white/60 space-y-8 font-sans">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Collection of Information</h2>
            <p>We collect information you provide directly to us when you request a consultation, sign up for our newsletter, or communicate with us.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you about your projects.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
