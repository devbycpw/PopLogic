import { motion } from "motion/react";
import { Check, Compass, Star, Target, ShieldCheck, HeartHandshake } from "lucide-react";
import { COMPANY_ABOUT } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-cream py-24 px-4 sm:px-6 md:px-8 overflow-hidden select-none"
    >
      {/* Structural visual guidelines */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-electric-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-[200px] h-[200px] bg-marine-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* About Title heading */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 bg-deep-blue/5 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#0b469c]">
            <span>Corporate DNA</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-text-dark">
            Who Is PopLogic?
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate Story & Duality cards */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-text-dark leading-tight">
                An agency sitting at the intersection of <span className="text-marine-blue">pop art</span> and <span className="text-deep-blue">cold mathematics</span>.
              </h3>
              
              <p className="font-sans text-sm sm:text-base text-text-dark/85 leading-relaxed">
                {COMPANY_ABOUT.description}
              </p>
            </div>

            {/* Duality breakdown: POP & LOGIC branding cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Popularity / Creativity Card */}
              <div className="bg-[#1175f0]/5 hover:bg-[#1175f0]/10 border border-marine-blue/20 p-6 rounded-[20px] transition-all duration-300">
                <div className="flex items-center space-x-2 text-marine-blue mb-3">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-heading font-extrabold tracking-tight text-sm uppercase">THE POP</span>
                </div>
                <h4 className="font-sans font-bold text-xs text-text-dark mb-1">Extravagant Aesthetics</h4>
                <p className="font-sans text-[11px] text-text-dark/70 leading-relaxed">
                  Tailored styling, gorgeous high-contrast colors, kinetic loops, and high-retention video compositions that halt scrolls on impact.
                </p>
              </div>

              {/* Logic / Strategy Card */}
              <div className="bg-deep-blue/5 hover:bg-deep-blue/10 border border-deep-blue/20 p-6 rounded-[20px] transition-all duration-300">
                <div className="flex items-center space-x-2 text-deep-blue mb-3">
                  <Target className="w-5 h-5" />
                  <span className="font-heading font-extrabold tracking-tight text-sm uppercase">THE LOGIC</span>
                </div>
                <h4 className="font-sans font-bold text-xs text-text-dark mb-1">Cold Strategy Metrics</h4>
                <p className="font-sans text-[11px] text-text-dark/70 leading-relaxed">
                  Data funnels, rigid audience analytics, strategic SEO pathways, and smooth automated lead routing direct to WhatsApp chats.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Vision & Mission (PRD layout spec) */}
          <div className="lg:col-span-6 space-y-8 bg-[#f5f2eb] p-8 sm:p-10 rounded-[32px] border border-deep-blue/5 shadow-inner">
            
            {/* Vision Container */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-deep-blue text-electric-cyan">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-text-dark">
                  Our Strategic Vision
                </h3>
              </div>
              
              <p className="font-sans text-sm text-text-dark/85 leading-relaxed pl-1">
                {COMPANY_ABOUT.vision}
              </p>
            </div>

            {/* Mission Container */}
            <div className="space-y-6 pt-6 border-t border-text-dark/10">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-marine-blue text-cream">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-text-dark">
                  Corporate Mission
                </h3>
              </div>

              {/* Mission bullet point nodes */}
              <ul className="space-y-4" aria-label="Corporate Mission Points">
                {COMPANY_ABOUT.mission.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="flex items-center justify-center p-1 rounded-full bg-[#1175f0] text-cream mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-text-dark/80 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
