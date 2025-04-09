import { desc, section } from "framer-motion/client";
import { Github, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react";

export const Title = "Nath.";

export const HeroSectionData = {
  pTag: "Hi, My name is",
  hTag: "Nathnael Teshome",
  hTag2: "I make websites that go brr.",
  pTag2:
    "I am a software engineer with a passion for building web applications. I have experience in JavaScript, React, and Node.js.I am currently working at a startup where I am responsible for building and maintaining the company's web applications. I am also involved in the design and development of new features.In my free time, I enjoy learning new technologies and working on personal projects. I am also an avid reader and enjoy spending time with my family and friends. In my free time, I enjoy learning new technologies and working on personal projects. I am also an avid reader and enjoy spending time with my family and friends.",
  heroImage: "/images/hero.png",
  button: "Get In Touch",
};

export const ProjectSectionData = {
  sectionId: "03.",
  hTag: "My Projects",
};

export const AboutSectionData = {
  sectionId: "02.",
  hTag: "Hi there!",
  h1Tag: "I’m Nathnael, your go-to software engineer.",
  pTag2:
    "I’m a full-stack(backend-heavy) developer who loves making cool web applications, While I specialize in JavaScript and Python i have a knack for picking up new things, My main expertise lies in crafting robust server-side solutions that keep everything running smoothly. When I’m not in front of a screen, you can find me diving into a good book or reading about the latest trends in technology.",
  animatedImg: "/animatedcoder4.svg",
};
// Updated TechStacks with more detailed information
export const TechStacks = {
  frontEnd: ["TypeScript", "React", "Next.js", "VueJs", "NuxtJs"],
  BackEnd: ["Node.js", "Express.js", ".NET", "C#", "NestJs", "Django", "Go"],
  Mobile: ["React Native"],
};

export const FeaturedSkillTitle = [
  {
    id: 1,
    name: "FrontEnd",
    description:
      "Vibrant storefront of a magical shop, where every button sparkles and every image tells a story.",
  },
  {
    id: 2,
    name: "BackEnd",
    description:
      "Hidden engine of a powerful train, ensuring everything runs smoothly behind the scenes.",
  },
  {
    id: 3,
    name: "Mobile",
    description:
      "The art of creating enchanting apps that fit snugly in your pocket, ready to take you on adventures wherever you go.",
  },
];

// Updated Skills array with more detailed information
export const Skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: "/images/skills/javascript.svg",
    proficiency: 75,
    description:
      "Building interactive and dynamic web applications with modern JavaScript.",
    category: "frontEnd",
  },
  {
    id: 2,
    name: "React",
    icon: "/images/skills/reactjs.svg",
    proficiency: 88,
    description:
      "Creating reusable components and managing application state efficiently.",
    category: "frontEnd",
  },
  {
    id: 3,
    name: "Node.js",
    icon: "/images/skills/nodejs.svg",
    proficiency: 90,
    description:
      "Developing server-side applications with JavaScript runtime environment.",
    category: "BackEnd",
  },
  {
    id: 4,
    name: "Next.js",
    icon: "/images/skills/nextjs.svg",
    proficiency: 89,
    description:
      "Building server-rendered React applications with optimized performance.",
    category: "frontEnd",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "/images/skills/tailwindcss.svg",
    proficiency: 95,
    description:
      "Crafting responsive and utility-first designs with minimal CSS.",
    category: "frontEnd",
  },
  {
    id: 6,
    name: "TypeScript",
    icon: "/images/skills/typescript.svg",
    proficiency: 87,
    description:
      "Writing type-safe code to reduce bugs and improve developer experience.",
    category: "frontEnd",
  },
  {
    id: 7,
    name: "Express.js",
    icon: "/images/skills/expressjs.svg",
    proficiency: 89,
    description: "Creating robust APIs and web servers with Node.js framework.",
    category: "BackEnd",
  },
  {
    id: 8,
    name: ".NET",
    icon: "/images/skills/dotnet.svg",
    proficiency: 86,
    description:
      "Building enterprise-grade applications with Microsoft's framework.",
    category: "BackEnd",
  },
  {
    id: 9,
    name: "C#",
    icon: "/images/skills/csharp.svg",
    proficiency: 82,
    description:
      "Developing type-safe applications with object-oriented programming.",
    category: "BackEnd",
  },
  {
    id: 10,
    name: "NestJs",
    icon: "/images/skills/nestjs.svg",
    proficiency: 82,
    description:
      "Creating scalable server-side applications with progressive Node.js framework.",
    category: "BackEnd",
  },
  {
    id: 11,
    name: "Django",
    icon: "/images/skills/django.svg",
    proficiency: 78,
    description:
      "Building web applications with Python's high-level framework.",
    category: "BackEnd",
  },
  {
    id: 12,
    name: "Go",
    icon: "/images/skills/go.svg",
    proficiency: 75,
    description: "Developing efficient and concurrent server applications.",
    category: "BackEnd",
  },
  {
    id: 13,
    name: "React Native",
    icon: "/images/skills/react-native.svg",
    proficiency: 80,
    description: "Building cross-platform mobile applications with React.",
    category: "Mobile",
  },
  {
    id: 14,
    name: "VueJs",
    icon: "/images/skills/vuejs.svg",
    proficiency: 80,
    description: "Creating progressive web interfaces with the Vue ecosystem.",
    category: "frontEnd",
  },
  {
    id: 15,
    name: "NuxtJs",
    icon: "/images/skills/nuxtjs.svg",
    proficiency: 78,
    description:
      "Building server-rendered Vue applications with enhanced features.",
    category: "frontEnd",
  },
];

// Skill section content
export const SkillSectionContent = {
  sectionId: "01.",
  title: "Skills & Expertise",
  subtitle:
    "My technical toolkit and areas of expertise that I've developed throughout my journey",
  categories: [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
  ],
  featuredSkillsTitle: "Core Competencies",
};

export const ExperienceSection = {
  sectionId: "02.",
  hTag: "Where I've Worked",
};

export const ExperienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "A2SV",
    date: "Mar 2024 - Present",
    bulletPoints: [
      "Contributed to multiple projects utilizing diverse tech stacks, serving as both a front-end and back-end developer to deliver comprehensive solutions.",
      "Developed and maintained high-performance web applications using ASP.NET and Node.js, leading to significant improvements in user satisfaction as evidenced by customer feedback.",
      "Engineered a robust RESTful API to facilitate secure, real-time data exchanges, while implementing SQL Server management practices to proactively identify and mitigate potential system errors.",
      "Led the design and migration of an optimized database management system, employing Clean Architecture and Dependency Injection principles to enhance code maintainability and scalability.",
      "Enhanced database query efficiency through advanced optimization techniques, resulting in reduced response times and improved overall system performance.",
      "Streamlined data flow between front-end applications and back-end systems, achieving exceptional uptime for user transactions on the platform.",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Ethiopian Space Science Society",
    date: "Nov 2023 - Feb 2024",
    bulletPoints: [
      "Developed an innovative learning platform that provides accessible space science education to a diverse audience.",
      "Created intuitive user interfaces with React, significantly enhancing user engagement based on feedback.",
      "Leveraged Redux Toolkit to streamline state management, improving application performance.",
      "Optimized MongoDB database operations, enhancing data retrieval efficiency.",
      "Architected and deployed a secure user authentication and authorization system using OAuth 2.0, safeguarding access for users.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Minnovation",
    date: "Nov 2022 - Feb 2023",
    bulletPoints: [
      "Collaborated with engineers, scientists, and product teams to develop and refine innovative solutions.",
      "Designed and optimized machine learning models, focusing on enhancing their accuracy, efficiency, and scalability.",
      "Contributed to cross-functional partnerships that advanced project goals effectively.",
    ],
  },
  {
    id: 4,
    title: "Design Engineering Intern",
    company: "Ethiopian Airlines",
    date: "Apr 2022 - Jul 2022",
    bulletPoints: [
      "Supported data collection and analysis for research projects aimed at improving airport operations, focusing on efficiency and safety enhancements.",
      "Applied data visualization techniques to deliver actionable insights, contributing to improved operational efficiency and safety measures at Bole International Airport.",
      "Collaborated with cross-functional teams to identify and implement improvements in material handling processes, optimizing workflow and resource utilization.",
    ],
  },
];

export const menuItems = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

export const projects = [
  {
    name: "rateeat",
    tag: "featured project",
    description: [
      "Rateeat is a versatile web and mobile application that enables users to rate and review restaurants.",
      "It features a sleek interface for searching restaurants by location, cuisine, and rating.",
      "Users can create accounts to save their favorite restaurants and reviews, enhancing their culinary journey.",
    ],
    imageurl: "/images/rateeat.png",
    technologies: ["Node.js", "Next.js", "Flutter", "PostgreSQL"],
    github: "",
    url: "http://rateeat.app",
  },

  {
    name: "rideshare",
    tag: "featured project",
    description: [
      "Rideshare is an innovative web and mobile application that connects users to find and book rides with others.",
      "It provides a seamless interface for searching rides by location, date, and time.",
      "Users can create accounts to save their favorite rides and drivers, making transportation easier and more efficient.",
    ],
    imageurl: "/images/rideshare.png",
    technologies: ["ASP.NET", "Flutter", "Nuxt.js", "MongoDB"],
    github: "",
    url: "https://rideshare.a2sv.org/home",
  },

  {
    name: "netflix clone",
    tag: "fun project",
    description: [
      "This is a fun project I undertook to create a Netflix Clone!",
      "Imagine having all your favorite movies and TV shows at your fingertips.",
      "The application integrates with external APIs to provide updated content.",
      "With a user-friendly interface, you can easily watch trailer for new shows and content without the need for account creation.",
    ],
    github: "https://github.com/nathnaelteshome/netflix_clone",
    imageurl: "/images/netflix-clone.png",
    technologies: ["Redux", "Vite", "React", "SCSS"],
    url: "https://netflix-clone.vercel.app/",
  },

  {
    name: "esss lp",
    tag: "featured project",
    description: [
      "The ESSS Learning Platform is an innovative educational tool designed for Ethiopian students to learn about space science.",
      "It provides an intuitive user interface and efficient state management.",
      "The platform integrates secure user authentication, enhancing engagement and learning experiences in space science.",
    ],
    imageurl: "/images/esss.png",
    technologies: [
      "Next.js",
      "Node.js",
      "Redux Toolkit",
      "MongoDB",
      "OAuth 3.0",
    ],
    github: "https://github.com/esssweb/esss-learning-platform",
    url: "http://esss-learning-platform.com",
  },

  {
    name: "nath. store",
    tag: "fun project",
    description: [
      "Nath. Store is a fun project I created as a comprehensive e-commerce platform for buying and selling products.",
      "It features a user-friendly interface where users can browse products, select items, and edit their values before adding them to their shopping cart.",
      "Users can easily navigate to the shop section and enjoy a hassle-free purchasing process.",
    ],
    github: "https://github.com/nathnaelteshome/react-e-commerce-app.git",
    imageurl: "/images/e-comomerce.png",
    technologies: ["React", "Express.js", "SCSS", "MongoDB"],
    url: "https://nathstore.vercel.app/",
  },

  {
    name: "chat app",
    tag: "fun project",
    description: [
      "Chat App is a fun project I worked on that allows users to communicate in real-time.",
      "With a user-friendly interface, you can send and receive messages instantly.",
      "Users can create accounts to save their favorite chats and contacts, making communication more efficient and enjoyable.",
    ],
    github: "https://github.com/nathnaelteshome/react-chat-app",
    imageurl: "/images/chatapp.png",
    technologies: ["Redux", "Vite", "React", "Tailwind CSS"],
    url: "https://github.com/nathnaelteshome/react-chat-app",
  },
];

// Contact methods data
export const contactMethods = [
  {
    id: "email",
    title: "Email",
    value: "nathnaelteshome10@gmail.com",
    icon: Mail,
    action: {
      text: "Send an email",
      url: "mailto:nathnaelteshome10@gmail.com",
    },
  },
  {
    id: "social",
    title: "Social Media",
    value: "Find me on social platforms",
    icon: MessageSquare,
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/nathnaelteshome",
        icon: Github,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nathnaelteshome",
        icon: Linkedin,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/nathnaelteshome",
        icon: Twitter,
      },
    ],
  },
];
