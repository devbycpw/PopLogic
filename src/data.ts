import { ServiceItem, ProjectItem, ClientAvatar } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "media-management",
    number: "01",
    title: "Media Management",
    description: "Orchestrating high-impact social media coverage, continuous brand campaigns, and data-backed channel execution to amplify organic resonance.",
    details: ["Social Media Coverage", "Content Planning", "Community Moderation", "Growth Analytics"]
  },
  {
    id: "graphic-design",
    number: "02",
    title: "Graphic Design",
    description: "Crafting bold, minimalist visual languages and typographic layouts that transform intricate concepts into highly communicative corporate assets.",
    details: ["Corporate Identity", "Marketing Collaterals", "Presentation Decks", "Layout & Posters"]
  },
  {
    id: "video-editing",
    number: "03",
    title: "Video Editing",
    description: "Assembling high-fidelity short-form edits, cinematic corporate profiles, and motion-heavy advertisements tailored for optimal digital retention.",
    details: ["Cinematic Storytelling", "High-Retention Reels", "Color Grading & SFX", "Motion Graphics Integration"]
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    description: "Pioneering conversion-focused brand campaigns, paid ad structure layouts, and detailed search optimization tactics that capture qualified leads.",
    details: ["Conversion Funnels", "Paid Advertising", "SEO Optimization", "Lead Capture Automation"]
  },
  {
    id: "branding",
    number: "05",
    title: "Branding",
    description: "Establishing comprehensive corporate guidelines, modern color theory alignments, and verbal narratives to construct a future-proof brand architecture.",
    details: ["Brand Positioning", "Visual Guideline Manuals", "Typography Systems", "Logo Mark Creation"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "project-1",
    title: "Sovereign Essence Focus",
    category: "Branding & Identity System",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
    year: "2025"
  },
  {
    id: "project-2",
    title: "Apex Media Ecosystem",
    category: "Media Management",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
    year: "2026"
  },
  {
    id: "project-3",
    title: "Aero Dynamics Motion",
    category: "Video Editing & Sound Design",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop",
    year: "2025"
  },
  {
    id: "project-4",
    title: "Modernist Editorial Code",
    category: "Graphic Design Layouts",
    image: "https://images.unsplash.com/photo-1541462608141-2758733e30fc?q=80&w=600&auto=format&fit=crop",
    year: "2026"
  },
  {
    id: "project-5",
    title: "Neo Digital Marketplace",
    category: "Digital Marketing Strategy",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    year: "2025"
  },
  {
    id: "project-6",
    title: "Hyper-Connect System",
    category: "Futuristic Creative Lab",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    year: "2026"
  }
];

export const CLIENTS: ClientAvatar[] = [
  {
    id: "client-1",
    name: "Aisha Rahma",
    role: "CEO, Sovereign Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "client-2",
    name: "Devon Carter",
    role: "Marketing lead, Apex Co",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "client-3",
    name: "Jessica Lim",
    role: "Co-Founder, Prism Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "client-4",
    name: "Michael Chen",
    role: "Director, Aerodynamics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

export const COMPANY_ABOUT = {
  description: "PopLogic is a disruptive Indonesian creative and media agency built specifically for a fast-changing digital landscape. We sit at the precise intersection of pop-inspired creative expression and rigorous strategic logic. We do not just build layouts or write social copy; we design systems that generate sustained consumer attention & commercial growth.",
  vision: "To set tomorrow's baseline for brand communication, transforming creative ideas into logical catalysts for market-defining corporate growth.",
  mission: [
    "To build outstanding artistic media products balanced with metrics-driven corporate direction.",
    "To cultivate premium partner assets that clearly distinguish clients in high-competition environments.",
    "To scale media operations through continuous performance diagnostics and creative engineering."
  ]
};
