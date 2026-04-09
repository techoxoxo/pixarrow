"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Clock, Video, Calendar, ArrowRight, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function BookForm() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    otherSource: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const now = new Date();
  const currentDay = 9; 
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
    if (modifier === 'pm' && hours < 12) hours += 12;
    if (modifier === 'am' && hours === 12) hours = 0;
    if (hours < currentHour) return true;
    if (hours === currentHour && minutes <= currentMinute) return true;
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const message = `*🚀 New Discovery Call Booking*%0A%0A` +
      `*👤 Client Details:*%0A` +
      `• Name: ${formData.name}%0A` +
      `• Email: ${formData.email}%0A%0A` +
      `*📅 Scheduled Slot:*%0A` +
      `• Date: April ${selectedDate}, 2026%0A` +
      `• Time: ${selectedTime}%0A%0A` +
      `_Sent via Pixarrow Booking System_`;

    const whatsappUrl = `https://wa.me/917973060924?text=${message}`;

    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, date: `April ${selectedDate}, 2026`, time: selectedTime, type: "Discovery Call" }),
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full mx-auto px-6 relative z-10 text-center"
      >
        <div className="bg-white border border-black/5 rounded-[3rem] p-12 shadow-premium">
          <div className="w-20 h-20 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-brand-purple" />
          </div>
          <h2 className="text-3xl font-black mb-4 text-brand-bg">Booking Confirmed!</h2>
          <p className="text-brand-bg/50 mb-8">We've shared your details with our team. Expect a confirmation shortly!</p>
          <button onClick={() => window.location.href = '/'} className="w-full py-4 bg-brand-purple text-white rounded-full font-bold shadow-glow-purple transition-transform hover:scale-105">Back to Home</button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 bg-white border border-black/5 rounded-[3rem] overflow-hidden shadow-premium">
        {/* Left Info Column */}
        <div className="lg:col-span-2 p-12 bg-brand-bg/5 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col justify-between">
            <div>
              {step === 2 && (
                <button onClick={() => setStep(1)} className="p-3 rounded-full bg-white border border-black/5 text-brand-bg/50 hover:text-brand-purple transition-all mb-8 shadow-sm">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className="flex items-center gap-4 mb-10">
                <img src="/6g38mfg1psrmy0cwpptrqn6c0m.png" alt="Anuj Sharma" className="w-16 h-16 rounded-full border-2 border-brand-purple/20 object-cover" />
                <div>
                  <div className="text-xl font-black text-brand-bg">Anuj Sharma</div>
                  <div className="text-xs font-bold tracking-widest text-brand-bg/40 uppercase">Pixarrow Studio</div>
                </div>
              </div>
              <h1 className="text-4xl font-black tracking-tighter mb-6 leading-tight text-brand-bg">Discovery Call</h1>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-brand-bg/60">
                  <Clock className="w-5 h-5 text-brand-purple" />
                  <span className="text-lg font-medium">30 min</span>
                </div>
                <div className="flex items-center gap-3 text-brand-bg/60">
                  <Video className="w-5 h-5 text-brand-purple" />
                  <span className="text-lg font-medium">Google Meet / Zoom</span>
                </div>
              </div>
            </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-3 p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black mb-8 text-brand-bg">Select a Date & Time</h2>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <div className="grid grid-cols-7 gap-1">
                         {days.map(d => (
                           <div key={d} onClick={() => d >= currentDay && setSelectedDate(d)} className={`aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all cursor-pointer ${selectedDate === d ? "bg-brand-purple text-white shadow-glow-purple" : d < currentDay ? "text-brand-bg/10 cursor-not-allowed" : "hover:bg-brand-soft text-brand-bg"}`}>{d}</div>
                         ))}
                      </div>
                    </div>
                    <div className="w-full md:w-48 flex flex-col gap-2">
                        {times.map(t => (
                           <button key={t} disabled={isTimeInPast(t)} onClick={() => setSelectedTime(t)} className={`w-full py-4 rounded-xl border font-bold text-center transition-all ${selectedTime === t ? "border-brand-purple bg-brand-purple text-white shadow-sm" : isTimeInPast(t) ? "border-black/5 bg-brand-bg/5 text-brand-bg/10 cursor-not-allowed" : "border-black/5 bg-brand-soft/50 text-brand-bg/50 hover:border-brand-purple/30 hover:text-brand-purple"}`}>{t}</button>
                        ))}
                    </div>
                  </div>
                  <div className="mt-12 flex justify-end">
                     <button disabled={!selectedDate || !selectedTime} onClick={() => setStep(2)} className="flex items-center gap-3 px-10 py-5 bg-brand-purple text-white rounded-full font-bold shadow-premium transition-transform hover:scale-105 disabled:opacity-30">Confirm Booking <ArrowRight className="w-6 h-6" /></button>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-2xl font-black mb-8 text-brand-bg">Enter Details</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input required type="text" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-6 py-4 bg-brand-soft/50 border border-black/5 rounded-2xl outline-none" />
                    <input required type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-6 py-4 bg-brand-soft/50 border border-black/5 rounded-2xl outline-none" />
                    <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-brand-purple text-white rounded-full font-black text-xl shadow-glow-purple transition-all flex items-center justify-center gap-3">{isSubmitting ? "Processing..." : "Schedule Discovery Call"}</button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
    </div>
  );
}
