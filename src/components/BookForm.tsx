"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, Video, Calendar, ArrowRight, ArrowLeft, CheckCircle2, ShieldCheck, Lock, Sparkles } from "lucide-react";
import { useState } from "react";

const inputCls =
  "w-full px-4 sm:px-5 py-3 sm:py-3.5 bg-white/[0.04] border border-white/10 rounded-2xl outline-none text-white placeholder:text-white/30 focus:border-[#7C3AED] focus:bg-white/[0.07] focus:ring-1 focus:ring-[#7C3AED]/40 transition-all text-base sm:text-sm";

export default function BookForm() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    otherSource: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const now = new Date();
  const currentDay = now.getDate();
  const currentMonthName = now.toLocaleString("default", { month: "long" });
  const currentYear = now.getFullYear();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const times = ["9:00am", "10:00am", "11:30am", "1:00pm", "2:30pm", "4:00pm", "5:30pm"];
  const sources = ["Google Search", "LinkedIn", "Referral", "Twitter / X", "GitHub / Portfolio", "Other"];

  const isTimeInPast = (timeStr: string) => {
    if (selectedDate && selectedDate > currentDay) return false;
    if (selectedDate !== currentDay) return false;
    const match = timeStr.match(/^(\d+):(\d+)(am|pm)$/);
    if (!match) return false;
    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const modifier = match[3];
    if (modifier === "pm" && hours < 12) hours += 12;
    if (modifier === "am" && hours === 12) hours = 0;
    if (hours < currentHour) return true;
    if (hours === currentHour && minutes <= currentMinute) return true;
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const source = formData.source === "Other" ? formData.otherSource : formData.source || "Not specified";
    const dateFormatted = `${currentMonthName} ${selectedDate}, ${currentYear}`;
    
    const message =
      `*🚀 New Discovery Call Booking*%0A%0A` +
      `*👤 Client Details:*%0A` +
      `• Name: ${formData.name}%0A` +
      `• Email: ${formData.email}%0A` +
      `• Phone: ${formData.phone || "Not provided"}%0A%0A` +
      `*📅 Scheduled Slot:*%0A` +
      `• Date: ${dateFormatted}%0A` +
      `• Time: ${selectedTime}%0A%0A` +
      `*📣 Source:* ${source}%0A%0A` +
      `*📝 Notes:*%0A${formData.notes || "None"}%0A%0A` +
      `_Sent via Pixarrow Booking System_`;

    const whatsappUrl = `https://wa.me/917973060924?text=${message}`;

    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: dateFormatted,
          time: selectedTime,
          type: "Discovery Call",
        }),
      });
    } catch (_) {}
    setIsSubmitting(false);
    setIsSuccess(true);
    window.open(whatsappUrl, "_blank");
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full mx-auto px-6 relative z-10 text-center"
      >
        <div className="bg-[#0c051a]/95 border border-[#7C3AED]/40 rounded-[3rem] p-10 sm:p-12 shadow-[0_20px_60px_rgba(124,58,237,0.3)] backdrop-blur-2xl">
          <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-black mb-3 text-white">Discovery Call Confirmed!</h2>
          <p className="text-white/60 text-sm mb-8 leading-relaxed">
            We have dispatched calendar invites and conference details to <span className="text-emerald-400 font-bold">{formData.email}</span>.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white rounded-full font-bold shadow-glow-purple transition-transform hover:scale-105"
          >
            Return to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-[#0c051a]/90 border border-white/10 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)] min-h-[600px] backdrop-blur-2xl">
      {/* Left Info Column */}
      <div className="lg:col-span-2 p-5 sm:p-8 lg:p-10 bg-[#080214]/80 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
        <div>
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="p-2.5 sm:p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all mb-4 sm:mb-6 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <img
              src="/6g38mfg1psrmy0cwpptrqn6c0m.png"
              alt="Anuj Sharma"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 border-[#7C3AED]/40 object-cover shadow-lg"
            />
            <div>
              <div className="text-base sm:text-lg font-black text-white">Anuj Sharma</div>
              <div className="text-[10px] sm:text-xs font-bold tracking-widest text-[#00DFD8] uppercase">CTO &amp; Lead Architect</div>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-3 sm:mb-4 leading-tight text-white">
            Architecture <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF007A] via-[#7C3AED] to-[#00DFD8]">
              Strategy Call.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">
            Deconstruct your product vision with our Lead Architect. We discuss technical feasibility, sprint timelines, and fixed deliverables.
          </p>

          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5 sm:gap-3 text-white/80 text-xs sm:text-sm">
              <Clock className="w-4 h-4 text-[#A855F7] shrink-0" />
              <span className="font-semibold">30 Minutes · High-Yield Focus</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 text-white/80 text-xs sm:text-sm">
              <Video className="w-4 h-4 text-[#00DFD8] shrink-0" />
              <span className="font-semibold">Google Meet / Zoom HD</span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 text-white/80 text-xs sm:text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">Strict 24h Mutual NDA</span>
            </div>
          </div>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-3 pt-4 sm:pt-6 border-t border-white/10">
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step === 1 ? "bg-gradient-to-r from-[#7C3AED] to-[#FF007A] shadow-glow-purple" : "bg-white/10"}`} />
          <div className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step === 2 ? "bg-gradient-to-r from-[#7C3AED] to-[#00DFD8] shadow-glow-purple" : "bg-white/10"}`} />
        </div>
      </div>

      {/* Right Content Column */}
      <div className="lg:col-span-3 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-black mb-1.5 sm:mb-2 text-white">Select Date &amp; Time Slot</h2>
                <p className="text-xs text-white/50 mb-5 sm:mb-6">Choose an open slot on our architect&apos;s schedule.</p>

                <div className="flex flex-col md:flex-row gap-5 sm:gap-6">
                  {/* Calendar Days */}
                  <div className="flex-1">
                    <p className="text-xs font-bold text-[#00DFD8] uppercase tracking-widest mb-3">
                      {currentMonthName} {currentYear}
                    </p>
                    <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
                      {days.map((d) => (
                        <div
                          key={d}
                          onClick={() => d >= currentDay && setSelectedDate(d)}
                          className={`aspect-square flex items-center justify-center rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                            selectedDate === d
                              ? "bg-[#7C3AED] text-white shadow-glow-purple scale-105"
                              : d < currentDay
                              ? "text-white/10 cursor-not-allowed"
                              : "hover:bg-white/10 text-white/80 border border-transparent hover:border-white/10"
                          }`}
                        >
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots: Responsive multi-column on mobile, vertical stack on md+ */}
                  <div className="w-full md:w-44 flex flex-col gap-2">
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Time (Local)</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:flex md:flex-col gap-1.5 sm:gap-2">
                      {times.map((t) => (
                        <button
                          key={t}
                          disabled={isTimeInPast(t)}
                          onClick={() => setSelectedTime(t)}
                          className={`w-full py-2 sm:py-2.5 px-2 rounded-xl border font-bold text-[11px] sm:text-xs text-center transition-all cursor-pointer truncate ${
                            selectedTime === t
                              ? "border-[#7C3AED] bg-[#7C3AED] text-white shadow-glow-purple"
                              : isTimeInPast(t)
                              ? "border-white/5 bg-white/[0.01] text-white/10 cursor-not-allowed"
                              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-[#7C3AED]/50 hover:text-white hover:bg-white/[0.06]"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex justify-end">
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#7C3AED] to-[#FF007A] hover:opacity-95 text-white rounded-full font-bold text-sm shadow-glow-purple transition-all hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 cursor-pointer"
                >
                  <span>Confirm Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-black mb-2 text-white">Your Project Details</h2>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7C3AED]/15 border border-[#7C3AED]/30 rounded-full mb-6">
                  <Calendar className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span className="text-xs font-bold text-[#A855F7]">
                    {currentMonthName} {selectedDate}, {currentYear} · {selectedTime}
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      required
                      type="text"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputCls}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Work Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputCls}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp (Optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputCls}
                    />
                    <select
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      className={`${inputCls} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="bg-[#0e0524] text-white">How did you hear about us?</option>
                      {sources.map((s) => (
                        <option key={s} value={s} className="bg-[#0e0524] text-white">{s}</option>
                      ))}
                    </select>
                  </div>

                  {formData.source === "Other" && (
                    <input
                      type="text"
                      placeholder="Please specify how you found us..."
                      value={formData.otherSource}
                      onChange={(e) => setFormData({ ...formData, otherSource: e.target.value })}
                      className={inputCls}
                    />
                  )}

                  <textarea
                    rows={3}
                    placeholder="Briefly describe your project, technical goals, or budget timeline (optional)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#FF007A] text-white rounded-2xl font-black text-sm shadow-glow-purple transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-95 disabled:opacity-50 mt-4"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Confirm Discovery Call &amp; Get Invite</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

