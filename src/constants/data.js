import { 
  FaJava, 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaAws, 
  FaGithub, 
  FaDatabase,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkedAlt,
  FaCode,
  FaServer,
  FaNode
} from 'react-icons/fa'
import { SiTailwindcss, SiLeaflet, SiNodedotjs, SiMongodb, SiMysql, SiExpress } from 'react-icons/si'

export const personalInfo = {
  name: "Jagadeeswar Mula",
  title: "Full Stack Developer focused on real-world systems & cloud-backed applications.",
  typingTexts: [
    "Building monitoring systems",
    "Java + Cloud Developer",
    "Scaling skills daily"
  ],
  tagline: "Building scalable apps. Exploring cloud. Learning every day.",
  credibility: "Built a real-time monitoring system during internship at Incux AI",
  profileImage: "/assets/profile.jpg",
  resume: "/assets/resume.pdf"
}

export const socialLinks = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mula-jagadeesh-a26054336/",
    color: "#0077B5"
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/JAGADEESH349",
    color: "#F59E0B"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/jagadeesh.jd_/",
    color: "#E4405F"
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "mailto:mulajagadeesh119@gmail.com",
    color: "#EA4335"
  }
]

export const stats = [
  { number: "1", label: "Real-World Internship" },
  { number: "5+", label: "Built Projects" },
  { number: "100+", label: "DSA Problems" }
]

export const aboutText = "I'm a developer from Andhra Pradesh focused on building real-world applications using Java, React, and cloud tools. During my internship at Incux AI, I worked on a live monitoring system with map-based tracking. I'm currently pushing deeper into AWS and system design to build scalable applications."

export const skills = [
  {
    category: "Core",
    items: [
      {
        name: "Java",
        icon: FaJava,
        description: "Backend & DSA"
      },
      {
        name: "Data Structures & Algorithms",
        icon: FaCode,
        description: "Problem Solving"
      }
    ]
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
        description: "UI Development"
      },
      {
        name: "JavaScript",
        icon: FaJs,
        description: "ES6+"
      },
      {
        name: "HTML & CSS",
        icon: FaHtml5,
        description: "Web Fundamentals"
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description: "Styling"
      }
    ]
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNode,
        description: "Server-side JavaScript"
      },
      {
        name: "Express.js",
        icon: SiExpress,
        description: "Web Framework"
      }
    ]
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        description: "NoSQL Database"
      },
      {
        name: "MySQL",
        icon: SiMysql,
        description: "Relational Database"
      }
    ]
  },
  {
    category: "Cloud",
    items: [
      {
        name: "AWS",
        icon: FaAws,
        description: "S3, EC2, IAM, Lambda"
      }
    ]
  },
  {
    category: "Tools",
    items: [
      {
        name: "Git & GitHub",
        icon: FaGithub,
        description: "Version Control"
      }
    ]
  }
]

export const projects = [
  {
    title: "Smart Bandobasth Monitoring System",
    description: "Real-time monitoring dashboard with map-based tracking built during internship. Integrated live location visualization using Leaflet.",
    image: "/assets/project1.jpg",
    tech: ["React", "Leaflet.js", "Node.js"],
    github: "https://github.com/JAGADEESH349",
    icon: FaMapMarkedAlt
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio with smooth animations and responsive UI.",
    image: "/assets/project2.jpg",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/JAGADEESH349",
    icon: FaReact
  },
  {
    title: "Complaint Management System",
    description: "Full-stack web application managing complaints between students and police with role-based dashboards and RESTful APIs for structured tracking.",
    image: "/assets/project3.jpg",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/JAGADEESH349",
    icon: FaServer
  },
  {
    title: "AWS Practice Projects",
    description: "Hands-on cloud experiments including S3 hosting, EC2 instances, IAM roles, and Lambda basics.",
    image: "/assets/project4.jpg",
    tech: ["AWS"],
    github: "https://github.com/JAGADEESH349",
    icon: FaAws
  },
  {
    title: "Java + DSA Practice",
    description: "Solved 100+ problems covering arrays, trees, graphs, and core algorithms.",
    image: "/assets/project5.jpg",
    tech: ["Java"],
    github: "https://github.com/JAGADEESH349",
    icon: FaCode
  }
]

export const experience = [
  {
    role: "Web Developer Intern",
    company: "IncuxAI",
    period: "2026",
    description: [
      "Built frontend components for monitoring system",
      "Made Backend Integrations with Restful Api's",
      "Integrated Leaflet.js for real-time map visualization",
      "Collaborated with team on deployment"
    ],
    icon: FaServer
  }
]

export const contactCards = [
  {
    title: "LinkedIn",
    subtitle: "Let's connect professionally",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mula-jagadeesh-a26054336/",
    color: "hover:border-[#0077B5]"
  },
  {
    title: "GitHub",
    subtitle: "Check out my code",
    icon: FaGithub,
    url: "https://github.com/JAGADEESH349",
    color: "hover:border-accent"
  },
  {
    title: "Instagram",
    subtitle: "Follow my journey",
    icon: FaInstagram,
    url: "https://www.instagram.com/jagadeesh.jd_/",
    color: "hover:border-[#E4405F]"
  },
  {
    title: "Email",
    subtitle: "Send me a message",
    icon: FaEnvelope,
    url: "mailto:mulajagadeesh119@gmail.com",
    color: "hover:border-[#EA4335]"
  }
]
