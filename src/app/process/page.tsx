import Process from "@/components/Process";
import Timeline from "@/components/Timeline";
import Methodology from "@/components/Methodology";
import Comparison from "@/components/Comparison";
import ReadyToLaunch from "@/components/ReadyToLaunch";

export default function ProcessPage() {
  return (
    <div className="pt-40 pb-20 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-20">
        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-8 leading-none">
           How we <span className="text-gradient">Work.</span>
        </h1>
        <p className="text-2xl text-white/50 max-w-2xl font-sans italic">
           A lean, transparent approach ensuring we go live in weeks, not months.
        </p>
      </div>

      <Methodology />
      
      <div className="my-40 border-t border-white/5" />
      
      <Process />
      
      <div className="my-40 border-t border-white/5" />
      
      <Timeline />
      
      <div className="my-40 border-t border-white/5" />
      
      <Comparison />
      
      <ReadyToLaunch />
    </div>
  );
}
