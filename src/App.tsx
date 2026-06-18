import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ServiceDetailModal from "./components/ServiceDetailModal";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ServiceItem } from "./types";

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Global smooth scrolling routing system
  const handleNavigate = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset slightly to account for the floating navigation header height
      const yOffset = -72; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Pre-fill capabilities context directly into contact form message brief
  const handleServiceInquire = (serviceName: string) => {
    setSelectedService(null);
    
    // Smooth scroll down to contact section
    handleNavigate("contact");

    // Seamlessly update input fields in real-time
    setTimeout(() => {
      const messageInput = document.getElementById("form-message-input") as HTMLTextAreaElement | null;
      const nameInput = document.getElementById("form-name-input") as HTMLInputElement | null;
      
      if (messageInput) {
        messageInput.value = `Hi PopLogic, I want to inquire about your specialized "${serviceName}" creative solutions for our organization. Please share your diagnostic checklist!`;
        // Trigger generic raw event bubble so React local state binds properly on custom edits
        const event = new Event("input", { bubbles: true });
        messageInput.dispatchEvent(event);
      }

      if (nameInput) {
        nameInput.focus();
      }
    }, 450);
  };

  return (
    <div className="relative min-h-screen bg-cream text-text-dark font-sans" id="poplogic-root-container">
      {/* 
        SECTION 1: Floating Navigation Bar (Backdrop blurs + "Get Started" hover shifts)
      */}
      <Navbar onNavigate={handleNavigate} />

      <main id="poplogic-primary-main-viewport">
        {/* 
          SECTION 2: bold typography, social proof badges & exit zoom-blurs
        */}
        <Hero onNavigate={handleNavigate} />

        {/* 
          SECTION 4: Deep Sea Blue background & custom tablet/mobile responsive 5-column grids
        */}
        <Services onSelectService={setSelectedService} />

        {/* 
          SECTION 5: Infinite auto-scroll showcase track (pauses on hover)
        */}
        <Portfolio />

        {/* 
          SECTION 6: Two-column corporate story & detailed Vision/Mission checklists
        */}
        <About />

        {/* 
          SECTION 7: Deep Sea Blue direct-to-WhatsApp template lead compiler 
        */}
        <Contact />
      </main>

      {/* 
        Footer module with dynamic year counters and social index pointers
      */}
      <Footer onNavigate={handleNavigate} />

      {/* 
        Granular popup details showing precise service checkpoints & quick inquire bindings
      */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleServiceInquire}
      />
    </div>
  );
}
