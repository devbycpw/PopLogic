import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Activity } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Services", target: "services" },
    { label: "Portfolio", target: "portfolio" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" }
  ];

  const handleItemClick = (target: string) => {
    setIsOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
          isScrolled
            ? "bg-cream/85 backdrop-blur-md shadow-[0_8px_32px_rgba(11,37,69,0.06)] border-b border-deep-blue/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleItemClick("hero")}
            className="flex items-center space-x-2 font-heading font-extrabold text-xl tracking-tight text-text-dark cursor-pointer select-none group"
            id="nav-logo"
          >
            <span className="relative flex items-center justify-center p-1.5 rounded-lg bg-deep-blue text-electric-cyan group-hover:bg-marine-blue transition-colors duration-300">
              <Activity className="w-5 h-5 animate-pulse" />
            </span>
            <span className="flex items-center">
              POPLOGIC<span className="text-marine-blue">.</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop Main Navigation">
            {menuItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleItemClick(item.target)}
                className="font-sans font-medium text-sm text-text-dark/80 hover:text-marine-blue hover:translate-y-[-1px] transition-all duration-200 cursor-pointer relative py-1 group"
                id={`nav-link-${item.target}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-marine-blue transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleItemClick("contact")}
              className="group flex items-center space-x-2 bg-deep-blue hover:bg-electric-cyan text-cream hover:text-text-dark font-sans font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              id="desktop-cta-btn"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Hamburger Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-deep-blue/5 text-text-dark transition-all duration-200"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              id="hamburger-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-Down Drawer Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-[64px] left-0 w-full bg-cream z-40 shadow-2xl border-b border-deep-blue/10 md:hidden flex flex-col px-6 py-8 space-y-6"
            id="mobile-menu-drawer"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={item.target}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleItemClick(item.target)}
                  className="font-heading font-bold text-2xl tracking-normal text-left text-text-dark hover:text-marine-blue transition-colors duration-200 cursor-pointer py-1"
                  id={`mobile-nav-link-${item.target}`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="pt-4 border-t border-deep-blue/10"
            >
              <button
                onClick={() => handleItemClick("contact")}
                className="w-full flex items-center justify-center space-x-2 bg-deep-blue hover:bg-electric-cyan text-cream hover:text-text-dark font-sans font-semibold py-4 rounded-full transition-all duration-300"
                id="mobile-cta-btn"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
