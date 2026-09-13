export const profile = {
  name: "Nethmini Rathnayake",
  role: "Full-Stack & Systems Engineer",
  tagline:
    "I build production software end to end — from database schema to live infrastructure — and when the system is physical, from circuit to code.",
  location: "Colombo, Sri Lanka",
  email: "nethzrathnayake@gmail.com",
  phone: "+94 77 570 3702",
  links: {
    github: "https://github.com/NethminiRathnayake-03",
    linkedin: "https://linkedin.com/in/nethmini-rathnayake-31934b34b",
  },
};

export const education = [
  {
    school: "University of Moratuwa",
    detail: "B.Sc. (Hons) in Information Technology & Management — Faculty of Information Technology",
    period: "Mar 2024 – Present",
    note: "GPA 3.67 / 4.00 through Semester 3 · Completed 2nd Year",
  },
  {
    school: "National Institute of Business Management (NIBM)",
    detail: "Computer Science",
    period: "Mar 2023 – Jul 2023",
  },
  {
    school: "British Council",
    detail: "English Language & Public Speaking",
    period: "Apr 2023 – Aug 2023",
  },
  {
    school: "G.C.E. Advanced Level",
    detail: "Physical Science Stream — Combined Mathematics, Physics, Chemistry",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "PHP", "Java", "C", "SQL"],
  },
  {
    group: "Web & Backend",
    items: [
      "Flask",
      "Next.js",
      "React",
      "Node.js",
      "REST APIs",
      "Supabase (PostgreSQL)",
      "MySQL",
      "APScheduler",
    ],
  },
  {
    group: "Mobile",
    items: [
      "Shipping Next.js/React platforms as installable Android & iOS apps",
      "Mobile-first responsive UI",
    ],
  },
  {
    group: "Embedded & Hardware",
    items: ["Arduino Mega", "Custom PCB design (EasyEDA/JLC)", "Circuit debugging"],
  },
  {
    group: "Tools & Practice",
    items: [
      "Git/GitHub",
      "Agile Scrum",
      "System & database design",
      "Vercel / Railway / InfinityFree deployment",
      "Structured debugging",
    ],
  },
];

type Project = {
  year: string;
  name: string;
  role: string;
  type: string;
  stack: string;
  description: string;
  highlights: string[];
  images?: { src: string; position?: "top" | "center" | "bottom" }[];
  live?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    year: "2026",
    name: "Digital Employee Performance Management System",
    role: "HQ Admin Template Management — Software Development Project (IS2901)",
    type: "Team of 5 · Client: Dart Global Logistics Inc.",
    stack: "Python Flask · Next.js · TypeScript · Supabase (PostgreSQL) · APScheduler",
    images: [
      { src: "/photos/projects/pms/01-hq-dashboard.png" },
      { src: "/photos/projects/pms/02-template-management.png" },
      { src: "/photos/projects/pms/03-my-team.png" },
      { src: "/photos/projects/pms/04-appraisal-cycle.png" },
      { src: "/photos/projects/pms/05-login.png" },
      { src: "/photos/projects/pms/06-my-performance.png" },
      { src: "/photos/projects/pms/07-potential-assessment.png" },
      { src: "/photos/projects/pms/08-evaluate-team-member.png" },
      { src: "/photos/projects/pms/09-dashboard-map.png" },
    ],
    description:
      "A role-based performance management system for a 25-country aviation and logistics client, spanning a 5-tier role hierarchy from Global Admin to Sub-Department Admin.",
    highlights: [
      "Designed and built the HQ Admin Template Management module end to end — creation, editing, assignment, freeze management, and variants applied worldwide",
      "Built the Template Dashboard with multi-dimensional filtering, a live appraisal-cycle timeline, and real-time freeze-state indicators across a 6-level hierarchy",
      "Flask REST endpoints for template CRUD, variant management, freeze/unfreeze exceptions, and cycle rollover with role-based access control",
      "Designed the core schema and configured 40+ real performance templates with 400+ assignment rules from client data",
    ],
    repo: "https://github.com/madhusiva19/pms",
  },
  {
    year: "2026",
    name: "LexaSpeakAI",
    role: "Production AI English Coaching Platform",
    type: "Individual project",
    stack: "Next.js 14 · TypeScript · Express.js · Supabase · Gemini + Claude API · Tailwind · Framer Motion",
    images: [
      { src: "/photos/projects/lexaspeak/01-dashboard.png" },
      { src: "/photos/projects/lexaspeak/02-write.png" },
      { src: "/photos/projects/lexaspeak/03-conversations.png" },
      { src: "/photos/projects/lexaspeak/04-conversation-chat.png" },
      { src: "/photos/projects/lexaspeak/05-vocabulary.png" },
      { src: "/photos/projects/lexaspeak/06-write-feedback.png" },
      { src: "/photos/projects/lexaspeak/07-listen.png" },
      { src: "/photos/projects/lexaspeak/08-summary.png" },
      { src: "/photos/projects/lexaspeak/09-speak-feedback.png" },
    ],
    description:
      "A production full-stack platform shipped as two independently deployed services, sharing a Row-Level-Security-secured Supabase database with server-side JWT auth.",
    highlights: [
      "Multi-provider LLM chain (Gemini → Claude → rule-based fallback) for real-time grammar correction and AI-graded assessments, degrading gracefully under API failures",
      "Real-time conversation practice: Free Chat and 10 scenario-based Roleplays with live contextual corrections",
      "CEFR-aligned 5-level × 10-lesson path across 8 practice modes, with AI-graded advancement tests",
      "Audio practice via four accent- and gender-matched AI coaches using the Web Speech API",
      "Direct/group messaging with accept-based requests and role-based team chat, authorized through PostgreSQL RLS",
      "Resolved SSR hydration mismatches, cross-service CORS, and API quota exhaustion via dual-key rotation; shipped installable Android/iOS builds",
    ],
    live: "https://lexa-speak-ai.vercel.app",
    repo: "https://github.com/NethminiRathnayake-03/LexaSpeakAI",
  },
  {
    year: "2026",
    name: "Vantage",
    role: "Immersive 3D Shopping Platform",
    type: "Individual project",
    stack: "Next.js · React · TypeScript · Tailwind · Framer Motion · Flask · PostgreSQL (Neon)",
    images: [
      { src: "/photos/projects/vantage/01-home.png" },
      { src: "/photos/projects/vantage/02-shop.png" },
      { src: "/photos/projects/vantage/03-product.png" },
      { src: "/photos/projects/vantage/04-cart.png" },
      { src: "/photos/projects/vantage/05-orders.png" },
      { src: "/photos/projects/vantage/06-color-config.png" },
      { src: "/photos/projects/vantage/07-ar-view.png" },
      { src: "/photos/projects/vantage/08-onboarding.png" },
    ],
    description:
      "A full-stack 3D e-commerce platform where customers view products in real-time 3D, place them in AR through the phone camera, and recolor them live before buying.",
    highlights: [
      "Full e-commerce flow — session auth, cart, checkout, order history — on Flask REST APIs backed by PostgreSQL",
      "Motion-driven UI: custom cursor, scroll-triggered animation, magnetic buttons, animated page transitions",
      "Real-time 3D rendering and AR placement via Google's model-viewer, with live material/color editing",
      "Deployed end-to-end on Vercel + Neon, resolving cross-domain auth and CORS in production",
    ],
    live: "https://frontend-kappa-sepia-51.vercel.app",
    repo: "https://github.com/NethminiRathnayake-03/Immersive-3D-Virtual-Marketplace",
  },
  {
    year: "2025",
    name: "Smart Abacus (AbacusGenius)",
    role: "Microcontroller-Based ICT Project (IS1901)",
    type: "Team of 5 · Selected for FITExpo 2025",
    stack: "Arduino Mega · Hall Effect sensors · ESP8266 · DFPlayer Mini · HTML/CSS/JS/MQTT",
    images: [
      { src: "/photos/projects/smart-abacus/06-product-clean.jpg", position: "center" },
      { src: "/photos/projects/smart-abacus/07-child-testing.jpg", position: "center" },
      { src: "/photos/projects/smart-abacus/03-presenting-1.jpg", position: "center" },
      { src: "/photos/projects/smart-abacus/01-product.jpg", position: "center" },
      { src: "/photos/projects/smart-abacus/02-presenter-badge.jpg", position: "center" },
      { src: "/photos/projects/smart-abacus/04-presenting-2.jpg", position: "center" },
    ],
    description:
      "An interactive electric abacus pairing physical bead movement with real-time digital feedback for teaching arithmetic to children.",
    highlights: [
      "Designed a Hall Effect sensor-based bead-counting mechanism, replacing an unreliable magnet/iron-ball design",
      "Owned the audio-visual/control subsystem end to end: DFPlayer Mini audio, LED feedback, and button input",
      "Diagnosed and fixed a short-circuit fault on the custom PCB that had disabled the Arduino board",
      "Built a companion web app communicating with the device over MQTT via ESP8266",
    ],
  },
  {
    year: "2026",
    name: "Inkwell",
    role: "Personal Full-Stack Blogging Platform",
    type: "Individual project",
    stack: "PHP · MySQL · HTML/CSS/JS",
    images: [
      { src: "/photos/projects/inkwell/01-home.png" },
      { src: "/photos/projects/inkwell/02-new-story.png" },
      { src: "/photos/projects/inkwell/03-edit-story.png" },
      { src: "/photos/projects/inkwell/04-stories.png" },
      { src: "/photos/projects/inkwell/05-story-view.png" },
      { src: "/photos/projects/inkwell/06-story-detail.png" },
      { src: "/photos/projects/inkwell/07-comments.png" },
    ],
    description:
      "A full-stack blogging platform with auth and full CRUD, followed by a full security, feature, and UI overhaul post-launch.",
    highlights: [
      "Hardened against stored XSS, moved destructive actions to CSRF-protected POST, added rate-limited login attempts",
      "Comments/likes with AJAX, cover-image uploads, categories/tags, paginated search, redesigned dark-mode UI",
      "Upgrade-safe SQL migrations that preserved existing user data",
      "Managed live infrastructure end to end — port conflicts, expired hosting, database migration",
    ],
    live: "https://nethzblog.42web.io",
    repo: "https://github.com/NethminiRathnayake-03/InkWell",
  },
  {
    year: "2026",
    name: "Personal Portfolio Website",
    role: "This site — Interactive Developer Portfolio",
    type: "Individual project",
    stack: "Next.js · TypeScript · Tailwind CSS · Framer Motion",
    images: [
      { src: "/photos/projects/portfolio/05-home.png" },
      { src: "/photos/projects/portfolio/03-projects-top.png" },
      { src: "/photos/projects/portfolio/02-projects.png" },
      { src: "/photos/projects/portfolio/04-skills.png" },
      { src: "/photos/projects/portfolio/01-resume.png" },
    ],
    description:
      "A one-page, editorial-style portfolio built to showcase this exact body of work — designed and coded end to end, including its own interaction details.",
    highlights: [
      "Single-page scroll layout with a roman-numeral table of contents and smooth-scroll navigation",
      "Custom fanned photo-stack galleries per project with a click-to-enlarge lightbox and keyboard navigation",
      "Self-hosted variable fonts (no external font requests) and a hand-built editorial color system",
      "Responsive from mobile through desktop, with a full-screen animated menu on small screens",
    ],
  },
];

export const extracurricular = [
  "SPARK Competition — University of Moratuwa",
  "CodeRush Competition — University of Moratuwa",
  "Technical write-ups on architecture, trade-offs, and debugging",
  "Member, Rotaract Club",
  "Member, Leo Club",
  "Active Member of the School Swimming Team; Selected for the University Swimming Team",
];

export const interests = [
  "Software engineering",
  "Full-stack development",
  "UI/UX design",
  "Backend development",
  "Mobile app development",
  "Quality assurance",
  "Business analysis",
  "Project management",
  "Embedded/IoT systems",
  "Educational technology",
];

export const hopingToLearn = [
  "Consumer solutions design",
  "Creativity",
  "Consumer psychology",
  "Product management",
  "Marketing management",
  "Product research methods",
];
