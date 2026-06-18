import { ArrowUp, Activity, Mail, Phone, Globe, Linkedin, Facebook } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-cream text-text-dark/80 pt-16 pb-8 border-t border-text-dark/5 px-4 sm:px-6 md:px-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Core logo and brand description tagline */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate("hero")}
              className="flex items-center space-x-2 font-heading font-extrabold text-xl tracking-tight text-text-dark cursor-pointer group"
              id="footer-logo"
            >
              <span className="relative flex items-center justify-center p-1.5 rounded-lg bg-deep-blue text-electric-cyan">
                <Activity className="w-5 h-5 animate-pulse" />
              </span>
              <span>POPLOGIC<span className="text-marine-blue">.</span></span>
            </button>
            
            <p className="font-sans text-sm text-text-dark/70 max-w-sm leading-relaxed">
              Where media creativity meets bulletproof strategic logic. Accelerating corporate profile resonance across the modern digital landscape.
            </p>
          </div>

          {/* Column 2: Quick Navigation Index links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-dark font-black">
              Company Index
            </h4>
            
            <ul className="space-y-2 text-sm font-sans" aria-label="Footer Company Index">
              {["services", "portfolio", "about", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => onNavigate(section)}
                    className="hover:text-marine-blue text-text-dark/80 capitalize font-medium transition-colors duration-200 cursor-pointer"
                    id={`footer-link-${section}`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional contact coordinates details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-text-dark font-black">
              Agency Contact
            </h4>
            
            <ul className="space-y-2 text-sm font-sans text-text-dark/70" aria-label="Agency Contact Information">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-marine-blue shrink-0" />
                <span>hello@poplogic.agency</span>
              </li>
              
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-marine-blue shrink-0" />
                <span>+62 812-9000-9777</span>
              </li>
              
              <li className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-marine-blue shrink-0" />
                <span>Jakarta &amp; Surabaya, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row: SEO meta credit alignments and Scroll to Top indicator */}
        <div className="pt-8 border-t border-text-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-dark/50">
          <div>
            &copy; {new Date().getFullYear()} PopLogic Agency. All Rights Reserved.
          </div>
          
          {/* Social Icons row */}
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-marine-blue transition-colors duration-200" aria-label="PopLogic LinkedIn Profile">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-marine-blue transition-colors duration-200" aria-label="PopLogic Facebook Profile">
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-2 hover:text-marine-blue transition-colors duration-200 cursor-pointer p-1"
            id="back-to-top-btn"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
