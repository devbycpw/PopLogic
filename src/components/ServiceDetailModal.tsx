import { motion, AnimatePresence } from "motion/react";
import { X, Check, Award, ArrowRight, HelpCircle, Activity } from "lucide-react";
import { ServiceItem } from "../types";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export default function ServiceDetailModal({ service, onClose, onInquire }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop overlay background screen with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-text-dark/85 backdrop-blur-sm"
        />

        {/* Core Detail Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 35 }}
          className="relative bg-cream w-full max-w-xl rounded-[32px] p-8 sm:p-10 shadow-2xl z-10 overflow-hidden border border-deep-blue/15"
          id="service-detail-modal"
        >
          {/* Top corner design asset */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric-cyan/10 rounded-full blur-2xl pointer-events-none" />

          {/* Close trigger button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-deep-blue/10 text-text-dark transition-all duration-200"
            aria-label="Close details"
          >
            <X className="w-5 h-5 pointer-events-none" />
          </button>

          <div className="space-y-6">
            {/* Header info badge section */}
            <div className="flex items-center justify-between">
              <span className="font-heading font-black text-4xl text-marine-blue/20">
                /{service.number}
              </span>
              
              <span className="inline-flex items-center space-x-1 font-mono text-[10px] text-marine-blue bg-marine-blue/10 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                <Activity className="w-3 h-3 text-marine-blue" />
                <span>Scope Overview</span>
              </span>
            </div>

            {/* Title details */}
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-text-dark">
                {service.title}
              </h3>
              
              <p className="font-sans text-sm text-text-dark/80 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Strategic Checklist Milestones (PRD structural values) */}
            <div className="space-y-4 pt-6 border-t border-text-dark/10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-text-dark font-black">
                Primary Checkpoints &amp; Deliverables
              </h4>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" aria-label="Service Checklist Milestones">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-text-dark/85">
                    <span className="flex items-center justify-center p-0.5 rounded-full bg-electric-cyan text-text-dark shrink-0">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </span>
                    <span className="font-sans font-medium text-xs sm:text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Deliverables Disclaimer */}
            <div className="bg-deep-blue/5 border border-deep-blue/10 rounded-2xl p-4 flex gap-3 text-xs leading-relaxed text-text-dark/75">
              <HelpCircle className="w-5 h-5 text-marine-blue shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Did you know?</span> PopLogic couples high-aesthetic visual art with real lead conversion metrics. Every checkpoint item is tested, modified, and scaled based on monthly diagnostic checks.
              </div>
            </div>

            {/* Bottom Form Trigger Actions */}
            <div className="pt-6 border-t border-text-dark/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="font-sans font-bold text-xs text-text-dark/60 hover:text-text-dark capitalize py-2 px-3"
              >
                Go Back
              </button>

              <button
                onClick={() => onInquire(service.title)}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-deep-blue text-cream hover:bg-electric-cyan hover:text-text-dark font-sans font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-300"
              >
                <span>Inquire {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
