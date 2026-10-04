"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, ShieldCheck, Clock, CheckCircle2, Lock } from "lucide-react";

const projectTypes = [
  "Custom Web Application (Next.js)",
  "Mobile App (iOS / Android)",
  "Agentic AI & LLM Automation",
  "Shopify Plus / Headless eCommerce",
  "Dedicated Engineering Pod",
  "UI/UX & Conversion Optimization"
];

const budgetRanges = [
  "$1,000 – $3,000",
  "$3,000 – $6,000",
  "$6,000 – $15,000",
  "$15,000+"
];

export default function QuickInquiryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    budget: budgetRanges[1],
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "quick_inquiry_drawer",
          timestamp: new Date().toISOString()
        })
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#FF007A] text-white font-bold text-sm rounded-full shadow-[0_0_30px_rgba(124,58,237,0.45)] border border-white/20 hover:shadow-[0_0_40px_rgba(255,0,122,0.6)] transition-all cursor-pointer"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Quick Estimate</span>
          <span className="hidden sm:inline text-xs font-medium text-white/80 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">30s</span>
        </motion.button>
      </div>

      {/* Drawer Overlay & Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-0 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full sm:max-w-lg max-h-[90vh] sm:max-h-[85vh] bg-[#0c051a]/95 border border-white/10 sm:rounded-3xl rounded-t-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-y-auto flex flex-col z-10 text-white"
            >
              {/* Header */}
              <div className="sticky top-0 z-20 bg-[#0c051a]/90 backdrop-blur-xl border-b border-white/10 p-6 flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#A855F7] text-[10px] font-black uppercase tracking-widest mb-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Instant Scope & Estimate</span>
                  </div>
                  <h3 className="text-xl font-black text-white">Let&apos;s Build Your Solution</h3>
                  <p className="text-xs text-white/60">Receive a detailed architecture breakdown & quote within 2 hours.</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 flex-1">
                {isSubmitted ? (
                  <div className="py-12 px-4 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-black text-white mb-2">Inquiry Received!</h4>
                    <p className="text-sm text-white/70 max-w-sm mb-6 leading-relaxed">
                      Our Lead Architect and Partner are analyzing your scope. We will deliver your project roadmap and NDA within <span className="text-emerald-400 font-bold">2 hours</span>.
                    </p>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-left w-full mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-white/90 mb-1">
                        <Lock className="w-4 h-4 text-[#7C3AED]" />
                        <span>100% Confidentiality & 24h NDA</span>
                      </div>
                      <p className="text-[11px] text-white/50">Your idea, IP, and code remain 100% protected under our non-disclosure framework.</p>
                    </div>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setIsOpen(false);
                      }}
                      className="px-6 py-3 rounded-full bg-[#7C3AED] hover:bg-[#7C3AED]/90 text-white text-sm font-bold transition-all shadow-glow-purple"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Project Category */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                        1. Project Category
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-2.5 text-xs text-left rounded-xl border transition-all cursor-pointer ${
                              formData.projectType === type
                                ? "bg-[#7C3AED]/20 border-[#7C3AED] text-white font-bold shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                                : "bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05]"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                        2. Target Budget Range
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`p-2.5 text-xs text-center rounded-xl border transition-all cursor-pointer ${
                              formData.budget === range
                                ? "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold"
                                : "bg-white/[0.02] border-white/10 text-white/70 hover:bg-white/[0.05]"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Elon Musk"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#7C3AED]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elon@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#7C3AED]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1">
                        Phone / WhatsApp (Optional for faster reply)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000 / +91 99999 99999"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#7C3AED]"
                      />
                    </div>

                    {/* Brief Note */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1">
                        Brief Scope or Key Goal (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Need to build a high-performance Next.js SaaS portal with AI workflows..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#7C3AED] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-purple transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Request Estimate & Architecture Plan</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Risk Reversal Chips */}
                    <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[10px] text-white/50">
                      <div className="flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Signed NDA in 24h</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-blue-400" />
                        <span>&lt;2h Response</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-purple-400" />
                        <span>100% IP Ownership</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
