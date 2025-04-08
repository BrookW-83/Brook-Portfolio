import { desc, section } from "framer-motion/client";

export const Title = "Nath.";

export const Hero = {
  pTag: "Hi, My name is",
  hTag: "Nathnael Teshome",
  hTag2: "I make websites that go brr.",
  pTag2:
    "I am a software engineer with a passion for building web applications. I have experience in JavaScript, React, and Node.js.I am currently working at a startup where I am responsible for building and maintaining the company's web applications. I am also involved in the design and development of new features.In my free time, I enjoy learning new technologies and working on personal projects. I am also an avid reader and enjoy spending time with my family and friends. In my free time, I enjoy learning new technologies and working on personal projects. I am also an avid reader and enjoy spending time with my family and friends.",
  heroImage: "/images/hero.png",
  button: "Get In Touch",
};

export const About = {
  hTag: "About Me",
  h1Tag: "Hi, I am Nathnael Teshome",
  pTag2:
    "I am a software engineer with a passion for building web applications. I have experience in JavaScript, React, and Node.js.I am currently working at a startup where I am responsible for building and maintaining the company's web applications. I am also involved in the design and development of new features.In my free time, I enjoy learning new technologies and working on personal projects. I am also an avid reader and enjoy spending time with my family and friends. In my free time, I enjoy learning new technologies and working on personal projects. I am also an avid reader and enjoy spending time with my family and friends.",
  animatedImg: "/animatedcoder4.svg",
};

export const Skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: "/images/skills/javascript.svg",
  },
  {
    id: 2,
    name: "React",
    icon: "/images/skills/react.svg",
  },
  {
    id: 3,
    name: "Node.js",
    icon: "/images/skills/nodejs.svg",
  },
  {
    id: 4,
    name: "Next.js",
    icon: "/images/skills/nextjs.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    icon: "/images/skills/tailwindcss.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    icon: "/images/skills/typescript.svg",
  },
];

export const ExperienceSection = {
  hTag: "Where I've Worked",
};

export const ExperienceData = [
  {
    id: 1,
    title: "Lead Engineer",
    company: "Tech Company",
    date: "Jan 2022 - Present",
    bulletPoints: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Participated in code reviews and provided feedback to other developers.",
      "Worked with product managers to understand user requirements and translate them into technical specifications.",
      "Mentored junior developers and provided guidance on best practices.",
    ],
    description:
      "I am a software engineer with a passion for building web applications. I have experience in JavaScript, React, and Node.js.I am currently working at a startup where I am responsible for building and maintaining the company's web applications. I am also involved in the design and development of new features.",
  },
  {
    id: 2,
    title: "Intern Software Engineer",
    company: "Tech Company",
    date: "Jan 2021 - Dec 2021",
    bulletPoints: [
      "Worked with product managers to understand user requirements and translate them into technical specifications.",
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to design and implement new features.",
      "Participated in code reviews and provided feedback to other developers.",
      "Worked with product managers to understand user requirements and translate them into technical specifications.",
      "Mentored junior developers and provided guidance on best practices.",
    ],
    description:
      "I am a software engineer with a passion for building web applications. I have experience in JavaScript, React, and Node.js.I am currently working at a startup where I am responsible for building and maintaining the company's web applications. I am also involved in the design and development of new features.",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Minnovation",
    date: "Jan 2020 - Dec 2020",
    bulletPoints: [
      " I collaborated with engineers, scientists, and product teams to develop and refine innovative solutions.",
      "My contributions included designing and optimizing machine learning models, to enhance their accuracy, efficiency, and scalability",
    ],
  },
  {
    id: 4,
    title: "Software Engineer",
    company: "Ethiopian Airlines",
    date: "Jan 2020 - Dec 2020",
    bulletPoints: [
      "Collaborated with the Design Engineering team to collect, process, and analyze operational data",
      "Worked on basic scripting to visualize performance metrics, aiding data-driven decision-making",
      "Documented technical findings and created structured reports for ongoing research and improvement initiatives.",
    ],
  },
];

export const ProjectSectionData = {
  sectionId: "03.",
  hTag: "My Projects",
};

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
      "rateeat is a web application that allows users to rate and review restaurants.",
      "It is built with Python, Flask, and MongoDB.",
      "The application provides a user-friendly interface for searching restaurants by location, cuisine, and rating.",
      "Users can create accounts to save their favorite restaurants and reviews.",
    ],
    imageurl: "/images/rateeat.png",
    technologies: ["python", "flask", "mongodb"],
    github: "",
    url: "http://rateeat.app",
  },
  {
    name: "rideshare",
    tag: "featured project",
    description: [
      "rideshare is a web application that connects users to find and book rides with others.",
      "It is built with Python, Flask, and MongoDB.",
      "The platform offers a seamless interface for searching rides by location, date, and time.",
      "Users can create accounts to save their favorite rides and drivers.",
    ],
    imageurl: "/images/rideshare.png",
    technologies: ["python", "flask", "mongodb"],
    github: "",
    url: "https://rideshare.a2sv.org/home",
  },
  {
    name: "ESSS LP",
    tag: "featured project",
    description: [
      "Ethiopian Space Science Society LP is an innovative learning platform designed for the Ethiopian Space Science Society to provide accessible space science education.",
      "Built with React and Redux Toolkit, it offers intuitive user interfaces and efficient state management.",
      "The platform integrates MongoDB for streamlined database operations and OAuth 2.0 for secure user authentication.",
      "It serves over 500 users, enhancing engagement and learning experiences.",
    ],
    imageurl: "/images/esss.png",
    technologies: ["react", "redux toolkit", "mongodb", "oauth 2.0"],
    github: "https://github.com/esssweb/ESSS-learning-platform",
    url: "http://esss-learning-platform.com",
  },
  {
    name: "Nath. Store",
    tag: "fun project",
    description: [
      "Nath. Store is an e-commerce platform for buying and selling products.",
      "It is built with Mern stack.",
      "The application features a user-friendly interface for searching products by category, price, and rating.",
      "Users can create accounts to save their favorite products and sellers.",
    ],
    github: "https://github.com/nathnaelteshome/react-e-commerce-app.git",
    imageurl: "/images/e-comomerce.png",
    technologies: ["react", "expressjs", "Scss", "mongodb"],
    url: "https://nathstore.vercel.app/",
  },
  {
    name: "Netflix Clone",
    tag: "fun project",
    description: [
      "Netflix Clone is a web application that mimics the functionality of Netflix.",
      "It is built with React and Redux Toolkit.",
      "The application provides a user-friendly interface for searching and watching movies and TV shows.",
      "Users can create accounts to save their favorite movies and shows.",
    ],
    github: "https://github.com/nathnaelteshome/netflix_clone",
    imageurl: "/images/netflix-clone.png",
    technologies: ["redux", "vite", "react", "tailwind"],
    url: "https://netflix-clone.vercel.app/",
  },

  {
    name: "Chat App",
    tag: "fun project",
    description: [
      "Chat App is fun project i worked on it is a real-time messaging application that allows users to communicate with each other.",
      "It is built with Python, Flask, and MongoDB.",
      "The application provides a user-friendly interface for sending and receiving messages in real-time.",
      "Users can create accounts to save their favorite chats and contacts.",
    ],
    github: "https://github.com/nathnaelteshome/react-chat-app",
    imageurl: "/images/chatapp.png",
    technologies: ["redux", "vite", "react", "tailwind"],
    url: "https://github.com/nathnaelteshome/react-chat-app",
  },
];

export const Contact = {
  github: "https:/www.github.com/nathnaelteshome",
  linkedin: "https://www.linkedin.com/in/nathnaelteshome",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=nathnaelteshome10@gmail.com",
};

export const Contact2 = {
  facebook: "https://www.facebook.com/nathnael.teshome",
  github: "https:/www.github.com/nathnaelteshome",
  instagram: "https://www.instagram.com/nathnaelteshome",
  linkedin: "https://www.linkedin.com/in/nathnaelteshome",
  twitter: "https://twitter.com/nathnaelteshome",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=nathnaelteshome10@gmail.com",
};
