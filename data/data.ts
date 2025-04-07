import { section } from "framer-motion/client";

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
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contacts", href: "#" },
];

export const projects = [
  {
    name: "rateeat",
    tag: "featured project",
    description:
      "rateeat is a web application that allows users to rate and review restaurants. it is built with react, node.js, and mongodb. the application has a user-friendly interface and allows users to search for restaurants by location, cuisine, and rating. users can also create an account to save their favorite restaurants and reviews.",
    imageurl: "/images/rateeat.png",
    technologies: ["python", "flask", "mongodb"],
    github: "http://github.com/rateeat",
    url: "http://rateeat.com",
  },
  {
    name: "rideshare",
    tag: "featured project",
    description:
      "rideshare is a web application that allows users to find and book rides with other users. it is built with react, node.js, and mongodb. the application has a user-friendly interface and allows users to search for rides by location, date, and time. users can also create an account to save their favorite rides and drivers.",
    imageurl: "/images/rideshare.png",
    github: "http://github.com/rideshare",
    technologies: ["python", "flask", "mongodb"],
    url: "http://rideshare.com",
  },
];

export const Contact = {
  facebook: "https://www.facebook.com/nathnael.teshome",
  github: "https:/www.github.com/nathnaelteshome",
  instagram: "https://www.instagram.com/nathnaelteshome",
  linkedin: "https://www.linkedin.com/in/nathnaelteshome",
  twitter: "https://twitter.com/nathnaelteshome",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=nathnaelteshome10@gmail.com",
};
