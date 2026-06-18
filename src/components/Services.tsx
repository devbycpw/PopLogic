import { motion } from "motion/react";
import { 
  Tv, 
  Palette, 
  Video, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

// Map service id to icon
const handleGetIcon = (id: string) => {
  switch (id) {
    case "media-management":
      return <Tv className="w-8 h-8 text-electric-cyan" />;
    case "graphic-design":
      return <Palette className="w-8 h-8 text-electric-cyan" />;
    case "video-editing":
      return <Video className="w-8 h-8 text-electric-cyan" />;
    case "digital-marketing":
      return <TrendingUp className="w-8 h-8 text-electric-cyan" />;
    case "branding":
      return <Award className="w-8 h-8 text-electric-cyan" />;
    default:
      return <Sparkles className="w-8 h-8 text-electric-cyan" />;
  }
};

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section
      id="services"
      className="relative bg-deep-blue text-cream py-24 px-4 sm:px-6 md:px-8 overflow-hidden rounded-[32px] mx-2 sm:mx-4 my-8 shadow-2xl"
    >
      {/* Dynamic Background Particle Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-marine-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Header Title Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-cream/10 px-4 py-1.5 rounded-full border border-cream/15 text-xs font-mono uppercase tracking-widest text-[#00F0FF]">
            <span>Capabilities Portfolio</span>
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight">
            Creative Solutions Built With <span className="text-electric-cyan underline decoration-wavy decoration-2 underline-offset-4">POP</span> &amp; <span className="text-electric-cyan bg-cream/5 px-3 py-1 rounded-xl">LOGIC</span>
          </h2>
          
          <p className="font-sans text-sm sm:text-base text-text-muted text-center max-w-2xl mx-auto leading-relaxed">
            We reject boring, cookie-cutter frameworks. Every campaign is standard-engineered to attract, convert, and retain high-tier customer interactions.
          </p>
        </div>

        {/* 
          Service Cards Layout: 
          Desktop: 5-column grid (lg:grid-cols-5)
          Tablet: 2-column grid (md:grid-cols-2)
          Mobile: 1-column layout (grid-cols-1)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -4,
                boxShadow: "0 0 25px rgba(0, 240, 255, 0.35)",
              }}
              onClick={() => onSelectService(service)}
              className="group relative bg-[#0a3f8c] border border-cream/10 hover:border-electric-cyan p-6 sm:p-8 rounded-[24px] cursor-pointer flex flex-col justify-between transition-all duration-300 shadow-md h-full select-none"
              id={`service-card-${service.id}`}
            >
              <div className="space-y-6">
                {/* Index prefix and Icon row */}
                <div className="flex items-center justify-between">
                  {handleGetIcon(service.id)}
                  <span className="font-heading font-black text-2xl text-cream/20 group-hover:text-electric-cyan/40 transition-colors duration-300">
                    /{service.number}
                  </span>
                </div>

                {/* Service title details */}
                <div className="space-y-3">
                  <h3 className="font-heading font-extrabold text-xl sm:text-lg uppercase text-cream tracking-tight group-hover:text-electric-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="pt-6 mt-6 border-t border-cream/5 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-electric-cyan/80 group-hover:text-electric-cyan transition-colors duration-300">
                <span>View Scope</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Environmental bottom visual divider */}
        <div className="pt-6 text-center">
          <p className="font-mono text-xs text-text-muted/60 uppercase">
            Click on any card above to explore detailed campaign checkpoints
          </p>
        </div>
      </div>
    </section>
  );
}
