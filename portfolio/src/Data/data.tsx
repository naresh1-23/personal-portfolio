export const EXPERIENCES = [
  {
    company: "Basiyo",
    location: "Lalitpur, Nepal",
    role: "Software Developer",
    period: "Dec 2024 — Present",
    type: "Full-time",
    url: "https://basiyo.com",
    description:
      "Designed and developed a comprehensive restaurant management platform from the ground up, integrating payment processing, real-time calendar synchronisation, and external review aggregation.",
    bullets: [
      "Architected scalable RESTful APIs using Django and Django REST Framework to support the platform's core business logic.",
      "Authored complex SQL queries for efficient data retrieval, transformation, and performance optimisation.",
      "Integrated third-party payment gateways and calendar APIs to enable real-time availability tracking across online platforms.",
    ],
    tech: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL",
      "REST APIs",
      "Elastic Search",
    ],
  },
  {
    company: "Ramailo Tech",
    location: "Lalitpur, Nepal",
    role: "Junior Python Developer",
    period: "Mar 2024 — Nov 2024",
    type: "Full-time",
    url: "https://ramailo.tech",
    description:
      "Contributed to the development of client-facing web applications and internal automation tooling, while actively participating in client engagements to align technical deliverables with business requirements.",
    bullets: [
      "Developed backend APIs and responsive frontend templates using Django, HTML, CSS, and JavaScript.",
      "Automated repetitive manual workflows using Python and Selenium, significantly reducing operational overhead.",
      "Integrated OpenAI and Stable Diffusion APIs to deliver AI-generated story, image, and audio content features.",
    ],
    tech: ["Python", "Django", "Selenium", "OpenAI API", "Stable Diffusion"],
  },
  {
    company: "Ramailo Tech",
    location: "Lalitpur, Nepal",
    role: "Python Developer Intern",
    period: "Jan 2024 — Mar 2024",
    type: "Internship",
    url: "https://ramailo.tech",
    description:
      "Built the backend infrastructure for an internal storybook application, gaining hands-on experience in full-stack development within an agile team environment.",
    bullets: [
      "Designed and implemented backend services and client-specified templates for a storybook application.",
      "Maintained version control discipline using Git and managed tasks through Jira in an agile workflow.",
    ],
    tech: ["Python", "Django", "DRF", "PostgreSQL", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Basiyo Platform",
    subtitle: "Basiyo.com · 2024–Present",
    desc: "A scalable platform designed for modern business operations, integrating real-time systems, APIs, and performance-driven backend architecture.",
    tags: [
      "Django",
      "DRF",
      "PostgreSQL",
      "REST APIs",
      "MFA",
      "Elastic Search",
      "Payment Integration",
    ],
    link: "https://basiyo.com",
    accent: "#b89cf5",
  },
  {
    title: "Restaurant Management System",
    subtitle: "Basiyo · 2024–Present",
    desc: "A full-scale restaurant management system handling reservations, order management, staff workflows, payments, and real-time availability synchronisation.",
    tags: [
      "Django",
      "DRF",
      "PostgreSQL",
      "Payments API",
      "Realtime",
      "Reporting",
      "Billing",
    ],
    link: "https://host.basiyo.com",
    accent: "#c8a96e",
  },
  {
    title: "Bedtime Tales",
    subtitle: "Ramailo Tech · 2024",
    desc: "An AI-powered storytelling platform that generates 3 unique random stories daily, ensuring continuous fresh and engaging content.",
    tags: ["Python", "Django", "AI", "Gemini"],
    link: "https://ramailo.tech",
    accent: "#7eb8c8",
  },
  {
    title: "Story Genius",
    subtitle: "Ramailo Tech · 2024",
    desc: "A subscription-based storytelling platform where users upload images to create characters and generate personalised stories based on prompts or structured book formats.",
    tags: ["Python", "Django", "AI", "Image Processing", "OpenAI"],
    link: "https://storygenius.me",
    accent: "#9ec87e",
  },
  {
    title: "Fraud Detection in Auction Systems",
    subtitle: "Academic Project · 2024",
    desc: "A machine learning system designed to detect anomalous bidding behaviour using statistical analysis and data-driven insights.",
    tags: [
      "Python",
      "Machine Learning",
      "PostgreSQL",
      "Data Analysis",
      "Logistic Regression",
    ],
    link: "https://github.com/naresh1-23",
    accent: "#d28f58",
  },
];

export const SKILLS_GROUPS = [
  {
    label: "Backend",
    items: ["Python", "Django", "Django REST Framework", "PostgreSQL", "SQL"],
  },
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "Linux",
      "Selenium",
      "Jira",
      "OpenAI API",
      "Stable Diffusion",
    ],
  },
  { label: "Languages", items: ["Python", "JavaScript", "C", "C++"] },
];

export const AWARDS = [
  { title: "Outstanding Performer", org: "Ramailo Tech", date: "Jun 2024" },
  { title: "ReactJS for Beginners", org: "DynoAcademy", date: "2023" },
  { title: "NodeJS Backend Development", org: "DynoAcademy", date: "2023" },
  { title: "Internship Certificate", org: "Ramailo Tech", date: "May 2023" },
];

export const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];

export const CONTACT_ITEMS = [
  {
    icon: "✉",
    label: "Email",
    value: "nareshtamang20000@gmail.com",
    href: "mailto:nareshtamang20000@gmail.com",
  },
  {
    icon: "☏",
    label: "Phone",
    value: "+977 9861188817",
    href: "tel:+9779861188817",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/naresh-tamang",
    href: "https://www.linkedin.com/in/naresh-tamang/",
    mono: true,
  },
  {
    icon: "{}",
    label: "GitHub",
    value: "github.com/naresh1-23",
    href: "https://github.com/naresh1-23",
    mono: true,
  },
  {
    icon: "⌖",
    label: "Location",
    value: "Baniyatar, Kathmandu, Nepal",
    href: null,
  },
];
