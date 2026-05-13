import libraryImg from "../assets/library.png";
import loginImg from "../assets/login.png";
import portfolioImg from "../assets/portfolio.png";

const projects = [
  {
    id: "library-management",
    title: "Library Management System",

    image: libraryImg,

    techStack: ["Java", "File Handling", "OOP"],

    description:
      "A Java-based library management system that manages books, student registration, and issue/return records using file handling.",

    features: [
      "Student registration system",
      "Book issue & return tracking",
      "File-based data storage",
      "Admin management system",
    ],

    github: "#",
    demo: null,
  },

  {
    id: "login-auth",
    title: "Login Authentication System",

    image: loginImg,

    techStack: ["Node.js", "Express", "MongoDB"],

    description:
      "A secure authentication system with user signup and login functionality using Node.js, Express, and MongoDB.",

    features: [
      "User signup & login",
      "Password hashing using bcrypt",
      "MongoDB database integration",
      "Secure authentication flow",
    ],

    github: "#",
    demo: null,
  },

  {
    id: "developer-portfolio",
    title: "Developer Portfolio Website",

    image: portfolioImg,

    techStack: ["React", "Vite", "Tailwind CSS"],

    description:
      "A modern developer portfolio website built with React and Tailwind CSS to showcase projects, skills, and contact information.",

    features: [
      "Modern responsive UI",
      "Dark / Light theme toggle",
      "Project showcase section",
      "Contact form integration",
      "Smooth scroll navigation",
    ],

    github: "#",
    demo: null,
  },
];

export default projects;
