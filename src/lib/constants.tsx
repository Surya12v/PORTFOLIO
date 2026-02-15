import project1 from "../assets/Project1.png"
import project2 from "../assets/Project2.png"
import project3 from "../assets/Project3.png"
import project4 from "../assets/Project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"

// Professional Summary
export const PROFESSIONAL_SUMMARY = {
  title: "Full Stack Developer | REST API & Integration Specialist",
  intro: "Results-driven Full Stack Developer with 1+ years of professional experience building scalable web applications, managing REST APIs, and integrating enterprise platforms.",
  description: "I specialize in full-stack web development using React, Svelte, Node.js, and modern databases like PostgreSQL and Supabase. My expertise includes REST API development, platform integration, workflow management, and ServiceNow ITOM implementation. I excel at migrating and custom building solutions, managing relational databases, and creating robust integrations between CRM platforms and web applications.",
  location: "Tirupur, Tamil Nadu, India",
  email: "suryavelraj0309@gmail.com",
  phone: "+91 9884430309",
  github: "https://github.com/Surya12v",
  linkedin: "https://www.linkedin.com/in/surya-v-05729126a/",
  resume: "/suryavRESUME.pdf"
};

// Technical Skills
export const SKILLS = {
  languages: [
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "SQL", icon: "SiPostgresql" },
    { name: "C", icon: "SiC" },
  ],
  frameworks: [
    { name: "React.js", icon: "SiReact" },
    { name: "Svelte", icon: "SiSvelte" },
    { name: "SvelteKit", icon: "SiSvelte" },
    { name: "Express.js", icon: "SiExpress" },
  ],
  database: [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Supabase", icon: "SiSupabase" },
  ],
  platforms: [
    { 
      name: "ServiceNow",
      details: ["ITOM Discovery", "ACC-M", "MID Server", "Script Includes", "Client Scripts", "ITSM"],
      icon: "SiServicenow"
    },
    { 
      name: "Jira Service Management",
      details: ["Request Types", "Custom Workflows", "Automation", "Kanban Board Configuration"],
      icon: "SiJira"
    },
    { 
      name: "VMware",
      details: ["Virtual Machine Provisioning", "System Monitoring"],
      icon: "SiVmware"
    },
    { 
      name: "GoHighLevel",
      details: ["Workflow", "API Integration"],
      icon: "SiGit"
    },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "Postman", icon: "SiPostman" },
    { name: "JIRA", icon: "SiJira" },
    { name: "ServiceNow", icon: "SiServicenow" },
    { name: "GoHighLevel", icon: "SiGit" },
  ],
  concepts: [
    "RESTful APIs",
    "Webhooks",
    "Agile Methodology",
    "ITIL Framework",
  ]
};

// Work Experience
export const EXPERIENCE = [
  {
    title: "Developer",
    company: "Right Angle Solutions, Tirupur",
    duration: "Aug 2025 - Present",
    description: [
      "Building full-stack web applications using Svelte/SvelteKit, PostgreSQL, and Supabase",
      "Migrating AppSheet-based applications to custom web solutions with re-architected workflows and data models",
      "Implementing webhook-based CRM data ingestion into BigQuery with real-time synchronization",
      "Designing REST API-driven bi-directional integrations enabling secure CRM data access for non-platform users",
      "Customizing third-party CRM platforms and integrating with internal services and web applications",
      "Managing environment-specific configurations and secrets for staging and production deployments"
    ]
  },
  {
    title: "Software Developer Trainee",
    company: "Dotsito Technologies, Kangeyam",
    duration: "Sep 2024 - May 2025",
    description: [
      "Contributed to HR portal development using MERN stack with responsive React UI and REST API integration",
      "Implemented customizable Dynamic Kanban Board and Automation Builder components",
      "Gained hands-on experience with ServiceNow ITOM Discovery including ACC-M, MID Servers, Script Includes",
      "Customized Jira Service Management workflows, automations, and Kanban board configurations",
      "Participated in Agile development activities including sprints, code reviews, and testing",
      "Managed relational data and backend workflows in PostgreSQL with optimized queries"
    ]
  },
  {
    title: "B.Tech Information Technology",
    company: "Erode Sengunthar Engineering College",
    duration: "2021 - 2025",
    description: [
      "Completed comprehensive full-stack web development coursework",
      "Developed 7+ full-stack applications using modern frameworks and technologies",
      "Participated in technical workshops on REST APIs, Agile methodology, and ITIL practices"
    ]
  }
];

// Certifications & Achievements
export const CERTIFICATIONS = [
  {
    title: "ServiceNow ITOM Discovery Certification",
    issuer: "Hands-on Experience | Dotsito Technologies",
    date: "2025",
    description: "Expertise in ACC-M, MID Servers, Script Includes, and CI management"
  },
  {
    title: "REST API & Integration Specialist",
    issuer: "Right Angle Solutions",
    date: "2025",
    description: "Proficient in webhook-based integrations, BigQuery data ingestion, and bi-directional API design"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Dotsito Technologies & Right Angle Solutions",
    date: "2024-2025",
    description: "Advanced expertise in MERN, Svelte/SvelteKit, PostgreSQL, and Supabase"
  },
  {
    title: "Jira Service Management & Agile",
    issuer: "Dotsito Technologies",
    date: "2024",
    description: "Customized workflows, automations, and Kanban board configurations"
  }
];

// Projects Data
export const PROJECTS = [
  {
    title: "Dynamic Form Builder & CRUD System",
    description: "A full-stack application for building dynamic forms, managing collections, and performing CRUD operations on any schema, using React (frontend), Node.js/Express (backend), and MongoDB.",
    image: project5,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT","RESTful API"],
    livedemo: "",
    code: "https://github.com/Surya12v/CRUD",
    highlights: ["Dynamic Forms", "REST API", "MongoDB Integration"]
  },
  {
    title: "OAuth-APP",
    description: "A robust authentication system using Google OAuth 2.0, Express.js, React, and MongoDB. This project demonstrates secure, session-based authentication, user management, and a modular backend/frontend architecture.",
    image: project6,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB","OAuth 2.0"],
    livedemo: "",
    code: "https://github.com/Surya12v/OAuth-APP",
    highlights: ["Google OAuth", "Session Management", "Secure Auth"]
  },
  {
    title: "Shopping Cart",
    description: "A simple shopping cart built in React that allows users to add and remove products. Includes basic cart management features like item tracking and dynamic updates.",
    image: project2,
    technologies: ["React.js", "Tailwind CSS", "Context API"],
    livedemo: "https://shopcart-woad.vercel.app/",
    code: "https://github.com/Surya12v/shopcart-react.git",
    highlights: ["State Management", "Responsive Design", "Live Preview"]
  },
  {
    title: "QR Code Generator",
    description: "A React.js QR code generator with state management, styled using Tailwind CSS, dynamically creates scannable codes from user inputs.",
    image: project3,
    technologies: ["React.js", "Tailwind CSS", "QR Code API"],
    livedemo: "https://qr-code-generator-two-blue.vercel.app/",
    code: "https://github.com/Surya12v/QR-Code-Generator.git",
    highlights: ["State Management", "Dynamic Generation", "Live Demo"]
  },
  {
    title: "HealthLink Pro",
    description: "A doctor-patient management system that handles user registration, login, and displays personalized patient details, allowing doctors to manage patient information efficiently.",
    image: project1,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    code: "https://github.com/Surya12v/Healthlink-Pro-MERN-Project.git",
    highlights: ["Role-based Access", "Patient Management", "Full MERN Stack"]
  },
  {
    title: "CRUD Operations",
    description: "CRUD operations in MERN manage data using Node.js, Express.js, and MongoDB for backend processing, while React handles the frontend interactions via API calls.",
    image: project4,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    code: "https://github.com/Surya12v/CURD-MERN.git",
    highlights: ["CRUD Operations", "REST API", "Database Management"]
  },
  {
    title: "Login Authentication System",
    description: "Built a secure login system using the MERN stack with bcrypt for password hashing and MongoDB for user data storage, ensuring secure authentication.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "bcrypt"],
    code: "https://github.com/Surya12v/LoginForm-MERN.git",
    highlights: ["Secure Auth", "Password Hashing", "Session Management"]
  },
];
