// ============================================================
// portfolioData.js
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Bhagwanth",
  firstName: "Bhagwanth",
  brandName: "Bhagwanth", // shown in the preloader, navbar and footer
  title: "Python Full Stack Developer",
  location: "Bengaluru, India",
  phone: "9019187905",
  emails: {
    primary: "bhagwanthnagshette@gmail.com",
    secondary: "",
  },
  summary: "Aspiring Python Full Stack Developer skilled in building responsive web applications and interactive Python software.",
  resumeUrl: "/Bhagwant_Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/bhagwanthnagshette",
  linkedin: "https://www.linkedin.com/in/bhagwanth",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Bhagwanth",
  titleHighlight: "Python Full Stack Developer",
  subtitle: "Building scalable web applications and interactive software with Python, Django, modern frontend tools, and clean database architectures.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:bhagwanthnagshette@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Bhagwant_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Bhagwanth</span>, an aspiring Python Full Stack Developer based in Bengaluru, India. I have hands-on knowledge of Python, Django, Flask, MySQL, HTML, CSS, and JavaScript, currently sharpening my skills through the placement training program at TAP Academy. I am eager to solve real-world problems and build scalable web applications to grow as a software developer.`,
  techStack: ["Python", "Django", "Flask", "React", "MySQL"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A disciplined, step-by-step approach to engineering functional software.",
  cards: [
    { number: "01", title: "Research", text: "Analyze requirements, break down core logic, and select optimal Python libraries and architectural patterns." },
    { number: "02", title: "Design", text: "Structure relational database schemas, define RESTful endpoints, and map intuitive user interface flows." },
    { number: "03", title: "Develop", text: "Write clean, modular Python backend code and build responsive frontend interfaces with modern JavaScript." },
    { number: "04", title: "Deploy", text: "Test functionality rigorously, validate edge cases, and deploy applications using version-controlled workflows." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "JavaScript (ES6+)" }, { name: "SQL" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML5 & CSS3" }, { name: "Bootstrap" }, { name: "React.js" }, { name: "Django" }, { name: "Flask" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "SQL" }],
    },
    {
      title: "Tools & Concepts",
      skills: [{ name: "Git & GitHub" }, { name: "REST APIs" }, { name: "OOP" }, { name: "Pygame" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Full Stack Python Developer",
    duration: "2024 - Present",
    skills: [
      "Mastered core Python, OOP, data structures, and exception handling",
      "Gained hands-on experience developing interactive GUI applications with Pygame",
      "Applied practical full-stack concepts to design clean, logical software solutions",
    ],
    tech: ["Python", "Pygame", "OOP", "Data Structures"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating effectively with team members to deliver cohesive project solutions." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex logic into manageable, well-structured algorithmic steps." },
  { name: "Analytical Thinking", icon: "📈", desc: "Designing robust relational schemas and optimizing application data flow." },
  { name: "Communication", icon: "💬", desc: "Articulating technical decisions clearly and documenting codebase architecture." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "Chess Game",
    description: "Interactive two-player chess game developed in Python using Pygame, featuring piece movement validation, board management, and a turn-based engine.",
    techTags: ["Python", "Pygame", "OOP"],
    links: { github: "https://github.com/bhagwanthnagshette", demo: "" }, // demo "" shows "Demo Coming Soon"
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Expense Tracker",
    description: "Python-based expense management application to track daily spending with custom category organization and summary calculation.",
    techTags: ["Python", "Data Management", "File Handling"],
    links: { github: "https://github.com/bhagwanthnagshette", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Full Stack Python Development", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/bhagwanth",
};

export const education = {
  degree: "Bachelor Of Computer Application",
  institution: "Bengaluru, Karnataka",
  cgpa: "2023 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Python Full Stack Developer", "Python · Django · React · MySQL", "Building Scalable Web Solutions"],
  credential: "Bachelor Of Computer Application",
  copyright: `© ${new Date().getFullYear()} Bhagwanth | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
