import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Star, Sparkles, Send, CheckCircle2, X, Activity } from "lucide-react";
import { CLIENTS } from "../data";
import MorphingExperience from "./MorphingExperience";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate exit animations parameters based on scroll coordinates
  const maxScroll = 600;
  const progress = Math.min(scrollY / maxScroll, 1);
  
  const scale = 1 - progress * 0.15; // Scales down slightly
  const opacity = 1 - progress * 1.3; // Fades out
  const blur = progress * 16;       // Increases blur up to 16px

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      {/* Decorative Warm Accent Light Nodes */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-marine-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Hero Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 order-2 lg:order-1">
          
          {/* PRD requirement: PopLogic text & exit animation */}
          <motion.div
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
              filter: `blur(${blur}px)`,
            }}
            transition={{ type: "spring", stiffness: 100 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-deep-blue/5 px-4 py-2 rounded-full border border-deep-blue/10">
              <Sparkles className="w-4 h-4 text-marine-blue animate-spin" />
              <span className="font-mono text-xs text-text-dark/95 font-semibold uppercase tracking-widest">
                Creative Strategic Force
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7vw] leading-[0.9] tracking-[-0.05em] uppercase text-text-dark">
              POPLOGIC<span className="text-marine-blue">.</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-text-dark/80 max-w-xl leading-relaxed">
              We fuse bold, custom-tailored media creativity with uncompromising execution metrics. 
              Translating digital noise into authentic corporate growth.
            </p>
          </motion.div>

          {/* Social Proof Avatars Section */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4 border-t border-text-dark/10">
            <div className="flex -space-x-3 overflow-hidden">
              {CLIENTS.map((client) => (
                <img
                  key={client.id}
                  className="inline-block h-11 w-11 rounded-full ring-4 ring-cream object-cover hover:scale-105 transition-transform duration-300"
                  src={client.avatar}
                  alt={client.name}
                  referrerPolicy="no-referrer"
                  title={`${client.name} - ${client.role}`}
                />
              ))}
              <div className="flex items-center justify-center h-11 w-11 rounded-full bg-deep-blue text-electric-cyan ring-4 ring-cream font-mono text-xs font-semibold select-none">
                +50
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-[#ffd700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-text-dark/70">
                <span className="font-bold text-text-dark">50+ Global Brands Managed</span> and trust PopLogic
              </p>
            </div>
          </div>

          {/* Call to Actions (CTA) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 rounded-full bg-deep-blue text-cream hover:bg-electric-cyan hover:text-text-dark font-sans font-bold text-base shadow-lg hover:shadow-cyan-400/20 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              id="hero-cta-btn"
            >
              Get Started
            </button>

            <button
              onClick={() => setIsPlayModalOpen(true)}
              className="flex items-center space-x-3 px-6 py-4 rounded-full bg-transparent hover:bg-deep-blue/5 text-text-dark hover:text-marine-blue font-sans font-bold text-base transition-all duration-300 cursor-pointer border border-transparent hover:border-deep-blue/10"
              id="hero-how-we-work-btn"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-marine-blue text-cream group-hover:bg-deep-blue shadow-md transform group-hover:rotate-12 transition-all duration-300">
                <Play className="w-4 h-4 fill-current ml-0.5 text-cream" />
              </span>
              <span>How We Work</span>
            </button>
          </div>
        </div>

        {/* Right Column: Central 3D Experience (X & Y rotate, vertex noise shape) */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            style={{
              transform: `scale(${scale})`,
              opacity: opacity,
              filter: `blur(${blur}px)`,
            }}
            className="w-full relative"
          >
            {/* Morphing Canvas */}
            <MorphingExperience />
          </motion.div>
        </div>
      </div>

      {/* Standard indicator down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="font-mono text-[9px] text-text-dark/40 tracking-[0.25em] uppercase mb-1">
          Scroll Down
        </span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-deep-blue/60 to-transparent animate-pulse" />
      </div>

      {/* "How We Work" Interactive Modal */}
      <AnimatePresence>
        {isPlayModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPlayModalOpen(false)}
              className="absolute inset-0 bg-text-dark/80 backdrop-blur-sm"
            />

            {/* Modal Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-cream w-full max-w-2xl rounded-3xl p-8 sm:p-10 shadow-2xl z-10 overflow-hidden border border-deep-blue/10"
              id="how-we-work-modal"
            >
              <button
                onClick={() => setIsPlayModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-deep-blue/10 text-text-dark transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-marine-blue text-sm font-mono uppercase tracking-widest font-bold">
                  <Activity className="w-5 h-5" />
                  <span>The PopLogic Engine</span>
                </div>
                
                <h3 className="font-heading font-extrabold text-3xl text-text-dark uppercase tracking-tight">
                  Our Strategic Agency Blueprint
                </h3>

                <p className="font-sans text-sm sm:text-base text-text-dark/85 leading-relaxed">
                  We don&apos;t hope for client growth; we engineer it. Our blueprint couples 
                  extravagant creativity with bulletproof execution metrics.
                </p>

                {/* Phased Approach Steps */}
                <div className="space-y-4 pt-4 border-t border-text-dark/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-deep-blue text-electric-cyan font-mono text-xs font-bold shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-text-dark">Logic Audit Phase</h4>
                      <p className="font-sans text-xs text-text-dark/70">
                        Analyzing existing performance metrics, target audients, and digital leaks to form strategic campaign targets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-marine-blue text-cream font-mono text-xs font-bold shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-text-dark">Pop Creativity Burst</h4>
                      <p className="font-sans text-xs text-text-dark/70">
                        Designing visual identity structures, graphic layers, and video media templates that generate sustained user focus.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-electric-cyan text-text-dark font-mono text-xs font-bold shrink-0">
                      03
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-text-dark">Conversion Engine Launch</h4>
                      <p className="font-sans text-xs text-text-dark/70">
                        Deploying campaigns to WhatsApp chat paths, tracking engagement feedback, and adjusting visual formulas to secure client lead flows in 60fps.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => {
                      setIsPlayModalOpen(false);
                      onNavigate("contact");
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-deep-blue text-cream hover:bg-electric-cyan hover:text-text-dark font-semibold transition-all duration-300"
                  >
                    Initiate Audit Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
