import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export const PROJECTS = [
  {
    title: "Shop Management System",
    img: "/images/projects/shop_manag_system.png",
    link: "https://github.com/junaid-1013/Shop-Management-System",
    github: "https://github.com/junaid-1013/Shop-Management-System",
    type: "Featured Project",
  },
  {
    title: "Next Js Portfolio Website",
    img: "/images/projects/next.js_portfolio.png",
    link: "https://next-js-portfolio-website-omega.vercel.app/",
    github: "https://github.com/junaid-1013/Next.js-Portfolio-Website",
    type: "Featured Project",
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "Kidney Stone Detection",
    img: "/images/projects/kidney_stone_detection.jpg",
    summary:
      "The system will utilize image processing and computer vision techniques, such as feature extraction and object detection, to analyze the images and detect abnormalities. The extracted features will be used to train machine learning algorithms, such as convolutional neural networks (CNNs) & SVmM, to classify the images into different categories based on the detected abnormalities. Tk inter Graphical User Interface(GUI) is used.",
    link: "https://github.com/junaid-1013/Kidney-Stone-Detection",
    github: "https://github.com/junaid-1013/Kidney-Stone-Detection",
    type: "Featured Project",
  },
];

export const NAV_LINKS = [
  { title: "Home", link: "#cta" },
  { title: "About", link: "#about" },
  { title: "education", link: "#education" },
  { title: "Projects", link: "#projects" },
];

export const SKILLS = [
  {
    img: "/images/skills/cpp.png",
    title: "CPP"
  },
  {
    img: "/images/skills/css.png",
    title: "CSS"
  },
  {
    img: "/images/skills/html.png",
    title: "HTML"
  },
  {
    img: "/images/skills/javascript.png",
    title: "Javascript"
  },
  {
    img: "/images/skills/react.png",
    title: "React JS"
  },
  {
    img: "/images/skills/nextjs.png",
    title: "NextJS"
  },
  {
    img: "/images/skills/typescript.png",
    title: "Typescript"
  },
  {
    img: "/images/skills/gee.png",
    title: "GEE"
  },
  {
    img: "/images/skills/git.png",
    title: "GitHub"
  },
  {
    img: "/images/skills/mongodb.png",
    title: "Mongo DB"
  },
  {
    img: "/images/skills/node.png",
    title: "Node JS"
  },
  {
    img: "/images/skills/python.png",
    title: "Python"
  },
  {
    img: "/images/skills/tailwind.png",
    title: "Tailwind"
  },
  {
    img: "/images/skills/sass.png",
    title: "SCSS"
  },
]

export const EDUCATION_DATA = [
  {
    title: "Bachelor of Science In Computer Science",
    date: "2020-2024",
    location: "COMSATS University Islamabad(CUI), Lahore Campus",
    icon: React.createElement(LuGraduationCap),
    info: "Relevant Courses included Data Structures and Algorithms, Computer Vision and Artificial Intelligence.",
  },
  {
    title: "B.Sc-Mathematics",
    date: "2017-2018",
    location: "University of Punjab, Lahore",
    icon: React.createElement(LuGraduationCap),
    info: "Relevant Courses included Calculus, Mechanics and Mathematical Method.",
  },
  {
    title: "F.Sc(pre-engineering)",
    date: "2015-2016",
    location: "Punjab Group of Colleges(PGC), New Muslim Town Lahore",
    icon: React.createElement(LuGraduationCap),
    info: "Relevant Courses included Chemistry, Physics and Mathematics.",
  },
  {
    title: "Matric",
    date: "2013-2014",
    location: "Al-Farabi High School",
    icon: React.createElement(LuGraduationCap),
    info: "Relevant Courses included Biology, Chemistry, Physics and Mathematics.",
  },
]