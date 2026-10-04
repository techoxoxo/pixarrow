"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, Video, Calendar, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const inputCls =
  "w-full px-5 py-3.5 bg-white/[0.04] border border-white/10 rounded-2xl outline-none text-white placeholder:text-white/30 focus:border-brand-purple/70 focus:bg-white/[0.07] focus:ring-1 focus:ring-brand-purple/40 transition-all text-sm";

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
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const times = ["9:00am", "10:00am", "11:30am", "1:00pm", "2:30pm", "4:00pm", "5:30pm"];
  const sources = ["Google", "LinkedIn", "Referral", "Webflow Gallery", "Other"];

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
    const message =
      `*🚀 New Discovery Call Booking*%0A%0A` +
      `*👤 Client Details:*%0A` +
      `• Name: ${formData.name}%0A` +
      `• Email: ${formData.email}%0A` +
      `• Phone: ${formData.phone || "Not provided"}%0A%0A` +
      `*📅 Scheduled Slot:*%0A` +
      `• Date: April ${selectedDate}, 2026%0A` +
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
          date: `April ${selectedDate}, 2026`,
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
        <div className="bg-[#0c051a]/90 border border-white/10 rounded-[3rem] p-12 shadow-3xl backdrop-blur-2xl">
          <div className="w-20 h-20 bg-brand-purple/20 border border-brand-purple/40 rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-purple">
            <CheckCircle2 className="w-10 h-10 text-[#A855F7]" />
          </div>
          <h2 className="text-3xl font-black mb-4 text-white">Booking Confirmed!</h2>
          <p className="text-white/50 mb-8">
            We&apos;ve shared your details with our team. Expect a confirmation shortly!
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full font-bold shadow-glow-purple transition-transform hover:scale-105"
          >
            Back to Home
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-[#0c051a]/80 border border-white/10 rounded-[3rem] overflow-hidden shadow-3xl min-h-[680px] backdrop-blur-2xl">
      {/* Left Info Column */}
      <div className="lg:col-span-2 p-10 bg-[#080214]/60 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col">
        <div className="flex-1">
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all mb-8 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/6g38mfg1psrmy0cwpptrqn6c0m.png"
              alt="Anuj Sharma"
              className="w-14 h-14 rounded-full border-2 border-brand-purple/40 object-cover"
            />
            <div>
              <div className="text-lg font-black text-white">Anuj Sharma</div>
              <div className="text-xs font-bold tracking-widest text-[#A855F7] uppercase">Pixarrow Studio</div>
            </div>
          </div>
          <h1 className="text-3xl font-black tracking-tighter mb-5 leading-tight text-white">
            Discovery <span className="text-gradient">Call</span>
          </h1>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/70">
              <Clock className="w-5 h-5 text-[#A855F7] shrink-0" />
              <span className="font-medium">30 min</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Video className="w-5 h-5 text-[#A855F7] shrink-0" />
              <span className="font-medium">Google Meet / Zoom</span>
            </div>
          </div>
        </div>
        {/* Step indicator */}
        <div className="flex gap-2 pt-8">
          <div className={`h-1 w-8 rounded-full transition-all duration-500 ${step === 1 ? "bg-brand-purple shadow-glow-purple" : "bg-white/10"}`} />
          <div className={`h-1 w-8 rounded-full transition-all duration-500 ${step === 2 ? "bg-brand-purple shadow-glow-purple" : "bg-white/10"}`} />
        </div>
      </div>

      {/* Right Content Column */}
      <div className="lg:col-span-3 p-8 md:p-10 flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl font-black mb-5 text-white">Select a Date &amp; Time</h2>
              <div className="flex flex-col md:flex-row gap-6 flex-1">
                <div className="flex-1">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">April 2026</p>
                  <div className="grid grid-cols-7 gap-1.5">
                    {days.map((d) => (
                      <div
                        key={d}
                        onClick={() => d >= currentDay && setSelectedDate(d)}
                        className={`aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all cursor-pointer ${
                          selectedDate === d
                            ? "bg-brand-purple text-white shadow-glow-purple scale-105"
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
                <div className="w-full md:w-40 flex flex-col gap-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Time Slot</p>
                  {times.map((t) => (
                    <button
                      key={t}
                      disabled={isTimeInPast(t)}
                      onClick={() => setSelectedTime(t)}
                      className={`w-full py-3 rounded-xl border font-bold text-sm text-center transition-all cursor-pointer ${
                        selectedTime === t
                          ? "border-brand-purple bg-brand-purple text-white shadow-glow-purple"
                          : isTimeInPast(t)
                          ? "border-white/5 bg-white/[0.01] text-white/10 cursor-not-allowed"
                          : "border-white/10 bg-white/[0.03] text-white/70 hover:border-brand-purple/50 hover:text-white hover:bg-white/[0.06]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(2)}
                  className="flex items-center gap-3 px-8 py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full font-bold shadow-glow-purple transition-transform hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 cursor-pointer"
                >
                  Confirm Booking <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex flex-col"
            >
              <h2 className="text-2xl font-black mb-2 text-white">Enter Details</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-purple/15 border border-brand-purple/30 rounded-full mb-5 w-fit">
                <Calendar className="w-4 h-4 text-[#A855F7]" />
                <span className="text-sm font-bold text-[#A855F7]">
                  April {selectedDate} · {selectedTime}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-1">
                {/* Row 1: Name + Email */}
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
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputCls}
                  />
                </div>

                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputCls}
                />

                {/* Source */}
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
                {formData.source === "Other" && (
                  <input
                    type="text"
                    placeholder="Please specify..."
                    value={formData.otherSource}
                    onChange={(e) => setFormData({ ...formData, otherSource: e.target.value })}
                    className={inputCls}
                  />
                )}

                {/* Project notes */}
                <textarea
                  rows={3}
                  placeholder="Tell us about your project (optional)"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={`${inputCls} resize-none`}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full font-black text-lg shadow-glow-purple transition-all flex items-center justify-center gap-3 mt-auto cursor-pointer hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Schedule Discovery Call"}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
