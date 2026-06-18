import { useState, useMemo, ChangeEvent, FormEvent } from "react";
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Mail, User, Info, Phone, ArrowUpRight } from "lucide-react";
import { ContactFormData } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });
  
  // Custom Indonesian support target phone number (WhatsApp format: no + or local zeroes)
  const [phoneNumber, setPhoneNumber] = useState("6281290009777");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [customPhoneActive, setCustomPhoneActive] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Dynamically generate and encode the premium WhatsApp text template (PRD required format)
  const whatsAppUrl = useMemo(() => {
    const textTemplate = `Nama: ${formData.name || "Default User"}\nEmail: ${formData.email || "user@domain.com"}\nMessage: ${formData.message || "Hi, I am interested in PopLogic's solutions."}`;
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, ""); // Keep numeric only
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textTemplate)}`;
  }, [formData, phoneNumber]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    setIsSubmitted(true);
    // Let the standard click on the <a> anchor trigger the redirection naturally
    // This avoids popup blockers on window.open() inside sandboxed environments.
  };

  return (
    <section
      id="contact"
      className="relative bg-deep-blue text-cream py-24 px-4 sm:px-6 md:px-8 overflow-hidden rounded-[32px] mx-2 sm:mx-4 my-8 shadow-2xl"
    >
      {/* Visual Ambient Rings */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-marine-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-electric-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Strategic lead value proposition copy */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-cream/10 px-4 py-1.5 rounded-full border border-cream/15 text-xs font-mono uppercase tracking-widest text-electric-cyan">
              <span>Instant Lead pipeline</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-tight text-cream">
              Let&apos;s Build <br/>Something <span className="text-electric-cyan">Epic</span> Together.
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
            Ready to integrate bold, high-fidelity media campaigns into your sales funnel? 
            Fill out the form to generate your formatted blueprint message and proceed instantly to our WhatsApp support line.
          </p>

          {/* Core Trust Indicators */}
          <div className="space-y-4 pt-6 border-t border-cream/10">
            <div className="flex items-center space-x-3 text-sm">
              <div className="p-2 bg-cream/10 text-electric-cyan rounded-lg shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-cream/90 font-medium">WhatsApp End-to-End Chat Routing</p>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <div className="p-2 bg-cream/10 text-electric-cyan rounded-lg shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <p className="font-sans text-xs sm:text-sm text-cream/90 font-medium">Average Agency response rate: Under 2 hours</p>
            </div>
          </div>

          {/* Test Custom Target Phone Number Drawer */}
          <div className="p-5 rounded-2xl bg-[#0a3f8c] border border-cream/5 space-y-3">
            <button
              onClick={() => setCustomPhoneActive(!customPhoneActive)}
              className="flex items-center justify-between w-full font-mono text-[10px] text-electric-cyan/75 uppercase tracking-wider text-left cursor-pointer hover:text-electric-cyan"
            >
              <span>[ Config Testing Target ]</span>
              <span>{customPhoneActive ? "Hide" : "Customize Phone"}</span>
            </button>
            
            {customPhoneActive && (
              <div className="space-y-2">
                <p className="font-sans text-[11px] text-text-muted">
                  Input your WhatsApp phone number to test local submissions directly to your device (with country code, e.g. 62812...):
                </p>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 font-mono text-xs text-text-muted">+</span>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-deep-blue text-cream placeholder-cream/40 font-mono text-xs pl-6 pr-3 py-2.5 rounded-full border border-cream/15 focus:border-electric-cyan focus:outline-none"
                    placeholder="6281290009777"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Lead Form Card */}
        <div className="lg:col-span-7 bg-[#0a3f8c] border border-cream/10 p-8 sm:p-10 rounded-[32px] shadow-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6" id="lead-generation-form">
              <div className="space-y-2">
                <label className="font-sans font-bold text-xs uppercase tracking-wider text-cream/90 flex items-center space-x-2">
                  <User className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>Full Name (Nama)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-deep-blue text-cream border border-cream/10 focus:border-electric-cyan focus:outline-none rounded-2xl px-4 py-3 text-sm font-sans placeholder-cream/30 transition-all duration-300"
                  id="form-name-input"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans font-bold text-xs uppercase tracking-wider text-cream/90 flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>Email Address (Email)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. name@company.com"
                  className="w-full bg-deep-blue text-cream border border-cream/10 focus:border-electric-cyan focus:outline-none rounded-2xl px-4 py-3 text-sm font-sans placeholder-cream/30 transition-all duration-300"
                  id="form-email-input"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans font-bold text-xs uppercase tracking-wider text-cream/90 flex items-center space-x-2">
                  <MessageSquare className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>Message Brief (Message)</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write a brief overview of what solution you would like to audit..."
                  className="w-full bg-deep-blue text-cream border border-cream/10 focus:border-electric-cyan focus:outline-none rounded-2xl px-4 py-3 text-sm font-sans placeholder-cream/30 transition-all duration-300 resize-none"
                  id="form-message-input"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-cream hover:bg-electric-cyan text-text-dark font-sans font-bold py-4 rounded-full transition-all duration-300 cursor-pointer shadow-lg active:scale-[0.98]"
                  id="form-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate WhatsApp Message</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-10 space-y-6" id="form-success-card">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-cyan/10 text-electric-cyan mb-2">
                <CheckCircle2 className="w-10 h-10 animate-bounce" />
              </div>

              <div className="space-y-3">
                <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-cream">
                  Message Structured!
                </h3>
                <p className="font-sans text-sm text-text-muted max-w-md mx-auto leading-relaxed">
                  Your inquiry content is safely formatted and ready to deliver to our direct WhatsApp agent. Click the button below to complete the dispatch.
                </p>
              </div>

              {/* Formatted Text Preview */}
              <div className="bg-deep-blue border border-cream/10 text-left p-4 rounded-2xl max-w-md mx-auto font-mono text-xs text-text-muted space-y-1">
                <div><span className="text-electric-cyan">Nama:</span> {formData.name}</div>
                <div><span className="text-electric-cyan">Email:</span> {formData.email}</div>
                <div><span className="text-electric-cyan">Message:</span> {formData.message}</div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
                {/* Real Anchor Link redirects popups blocker naturally */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#00E0FF] text-text-dark hover:bg-cream font-sans font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
                  id="action-whatsapp-link"
                >
                  <span>Dispatch WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full sm:w-auto font-sans font-bold text-xs text-cream/70 hover:text-cream cursor-pointer border border-cream/15 hover:border-cream/40 px-6 py-4 rounded-full transition-all duration-200"
                  id="reform-edit-btn"
                >
                  Edit Message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
