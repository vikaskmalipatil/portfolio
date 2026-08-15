export type ProjectLink = {
  label: "GitHub" | "Live demo";
  url: string | null;
  placeholder?: string;
};

export type Project = {
  name: string;
  subtitle: string;
  date: string;
  description: string;
  technologies: string[];
  highlights: string[];
  award?: string;
  links: ProjectLink[];
};

export const portfolio = {
  name: "Vikas K Malipatil",
  role: "Computer Science Student & Full-Stack Developer",
  currentlyLearning: "Machine Learning",
  email: "vikaskmalipatil@gmail.com",
  phone: "+91 7975993524",
  github: "https://github.com/vikaskmalipatil",
  linkedin: "https://linkedin.com/in/vikas-k-malipatil-3539b8357",
  resumeUrl: "/resume.pdf",
  education: {
    institution: "Sahyadri College of Engineering & Management",
    location: "Mangaluru, Karnataka",
    degree: "Bachelor of Engineering in Computer Science",
    cgpa: "8.6/10.0",
    period: "Aug. 2024 – May 2028",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
    ],
  },
  skills: [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Python", "C++", "SQL"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT Authentication"] },
    { category: "Database", items: ["MongoDB", "Supabase", "Firebase"] },
    { category: "Developer Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"] },
  ],
} as const;

export const projects: Project[] = [
  {
    name: "FleetGuard",
    subtitle: "Enterprise Fleet Management SaaS",
    date: "Jun. 2026",
    description: "A full-stack B2B SaaS platform for fleet compliance, driver assignments, and service tracking.",
    technologies: ["React", "Node.js", "Supabase", "Jest"],
    highlights: [
      "Built a predictive-maintenance engine that analyzes odometer logs, calculates vehicle risk scores, and automates service flags.",
      "Implemented JWT-based role-based access for Admin, Manager, Mechanic, and Driver permissions.",
      "Designed analytics dashboards with Tailwind CSS and Recharts; validated core backend algorithms with Jest.",
    ],
    links: [{ label: "GitHub", url: "https://github.com/Atul-Kumar29/FleetGuard" }],
  },
  {
    name: "LocalFinder",
    subtitle: "Dual-Portal Local Service Platform",
    date: "May 2026",
    description: "A dual-portal full-stack application for service discovery, real-time messaging, and booking workflows.",
    technologies: ["Next.js 16", "Express", "MongoDB", "Socket.IO"],
    highlights: [
      "Architected distinct Customer and Provider portals with proximity search powered by MongoDB 2dsphere indexes and $geoNear pipelines.",
      "Implemented room-based real-time chat with persistent message storage and automated sequential invoicing.",
      "Secured 20+ REST APIs using JWT authentication and role-based middleware.",
    ],
    award: "2nd Prize · CSE Department Innovation Showcase 2026",
    links: [
      { label: "GitHub", url: null, placeholder: "Add LocalFinder repository URL" },
      { label: "Live demo", url: null, placeholder: "Add Customer/Provider live URLs" },
    ],
  },
  {
    name: "Result Analyzer",
    subtitle: "Student Performance Insights with Gemini AI",
    date: "Feb. 2026 – Mar. 2026",
    description: "A full-stack AI result analysis platform that produces automated student performance insights.",
    technologies: ["Gemini API", "Firebase", "React", "Vercel"],
    highlights: [
      "Integrated the Gemini API to generate automated student performance analysis.",
      "Implemented Firebase Authentication and Cloud Firestore for application data management.",
      "Built interactive React dashboard components and deployed the production build on Vercel.",
    ],
    links: [
      { label: "GitHub", url: null, placeholder: "Add Result Analyzer repository URL" },
      { label: "Live demo", url: null, placeholder: "Add Result Analyzer live-demo URL" },
    ],
  },
];

export const achievements = [
  {
    title: "1st Place · Open Sprint 2026",
    description: "Secured 1st position across three technical evaluation rounds in an open-source contribution event organized by Sahyadri OpenSource Community under SOSC. Awarded by the Head of CSE Department.",
  },
  {
    title: "2nd Place · CSE Department Innovation Showcase 2026",
    description: "Won 2nd prize for designing and building the LocalFinder full-stack platform.",
  },
] as const;
