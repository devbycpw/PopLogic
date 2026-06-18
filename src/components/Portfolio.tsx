import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Calendar, Bookmark, Folder, X, ExternalLink } from "lucide-react";
import { PROJECTS } from "../data";
import { ProjectItem } from "../types";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Double the array for flawless, continuous infinite looping
  const scrollProjects = [...PROJECTS, ...PROJECTS];

  return (
    <section
      id="portfolio"
      className="relative bg-cream pt-20 pb-28 px-4 sm:px-6 md:px-8 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-deep-blue/5 px-4 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-deep-blue">
              <span>Agency Showcases</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-text-dark">
              Selected Creations
            </h2>
          </div>
          
          <p className="font-sans text-sm text-text-dark/70 max-w-md leading-relaxed">
            A dynamic showcase of our corporate solutions, branding programs, and rich viral media configurations. Hover over any tile to freeze the scroll track.
          </p>
        </div>

        {/* Horizontal Infinite Slider track */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Subtle vignette borders */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

          {/* Scrolling Marquee Wrapper */}
          <div className="animate-infinite-scroll flex gap-6 hover:[animation-play-state:paused]">
            {scrollProjects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                onClick={() => setActiveProject(project)}
                className="group relative flex-none w-[280px] sm:w-[360px] h-[240px] sm:h-[300px] overflow-hidden rounded-[24px] bg-text-dark cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
                id={`portfolio-tile-${project.id}-${idx}`}
              >
                {/* Product Thumbnail image - referrer policy as per guidelines */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gradient-black via-text-dark/40 to-transparent opacity-80 transition-all duration-300 group-hover:from-text-dark/90" />

                {/* Floating tags */}
                <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur px-3 py-1 rounded-full border border-deep-blue/5 shadow">
                  <span className="font-mono text-[9px] font-bold text-text-dark uppercase tracking-wider">
                    {project.category.split(" ")[0]}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-deep-blue text-electric-cyan p-1.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Info Overlay Panel */}
                <div className="absolute bottom-6 left-6 right-6 text-cream translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2 text-electric-cyan font-mono text-[10px] tracking-wide uppercase mb-1">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl uppercase tracking-tight text-cream">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal Block */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-text-dark/80 backdrop-blur-sm"
            />

            {/* Modal Content container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-cream w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl z-10 border border-deep-blue/10"
              id="portfolio-project-modal"
            >
              {/* Image banner */}
              <div className="h-64 sm:h-80 relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/20 to-transparent" />
                
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-text-dark/70 text-cream hover:bg-text-dark transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text detail */}
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center space-x-1 font-mono text-xs text-marine-blue bg-marine-blue/10 px-3 py-1 rounded-full">
                    <Folder className="w-3.5 h-3.5" />
                    <span>{activeProject.category}</span>
                  </span>
                  
                  <span className="flex items-center space-x-1 font-mono text-xs text-text-dark bg-text-dark/5 px-3 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Year {activeProject.year}</span>
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-text-dark">
                    {activeProject.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-text-dark/80 leading-relaxed">
                    This selection represents PopLogic&apos;s commitment to rigorous visual execution. 
                    Integrating high-fidelity styling components to address precise user conversions and corporate branding goals.
                  </p>
                </div>

                <div className="pt-4 border-t border-text-dark/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="font-mono text-xs text-text-dark/60">
                    Status: <span className="text-[#00C853] font-bold">● ACTIVE ON PRODUCTION</span>
                  </div>
                  
                  <button
                    onClick={() => {
                      setActiveProject(null);
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="flex items-center space-x-2 bg-deep-blue text-cream hover:bg-electric-cyan hover:text-text-dark font-sans font-bold text-sm px-5 py-3 rounded-full transition-all duration-300"
                  >
                    <span>Inquire About Similar Works</span>
                    <ExternalLink className="w-4 h-4" />
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
