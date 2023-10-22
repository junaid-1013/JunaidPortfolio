import React from "react";
import { LuGraduationCap } from "react-icons/lu";

export const FEATURED_PROJECTS = [
  {
    title: "Crop Sight",
    img: "/images/projects/crop-sight.png",
    summary:
      "Crop Sight optimizes crop monitoring, improves yields, and minimizes seed and fertilizer expenses through precision farming, satellite data, machine learning.",
    link: "https://cropsight-dusky.vercel.app/",
    github: "https://github.com/junaid-1013",
    tech: ["NextJs", "Django", "Python", "GEE", "Typescript", "Javacript"],
  },
  {
    title: "Linetech Digital",
    img: "/images/projects/oeowo.png",
    summary:
      "This is a web application for a marketing agency that offers a range of services, including various software solutions, digital marketing, branding, web application development, and mobile application development.",
    link: "https://oeovo-technologies.vercel.app/",
    github: "https://github.com/junaid-1013/oeovo-technologies",
    tech: ["NextJs", "TypeScript", "Tailwind", "SCSS"],
  },
  {
    title: "Kidney Stone Detection",
    img: "/images/projects/kidney_stone_detection.png",
    summary:
      "The system will utilize image processing and computer vision techniques to analyze the CT images. The extracted features will be used to train CNN & SVM, to classify the images into positive and Negative.",
    link: "https://github.com/junaid-1013/Kidney-Stone-Detection",
    github: "https://github.com/junaid-1013/Kidney-Stone-Detection",
    tech: ["Python", "Gradio"],
  },
  {
    title: "Shop Management System",
    img: "/images/projects/shop_manag_system.png",
    summary:
      "Users can track inventory and sales records, create employees for product sales, and add,view, update, delete products. This system is developed in C# Windows Form with an MS SQL database.",
    link: "https://github.com/junaid-1013/Shop-Management-System",
    github: "https://github.com/junaid-1013/Shop-Management-System",
    tech: ["C# Win Forms", "MS SQL"],
  },
];

export const NAV_LINKS = [
  { title: "Home", link: "#cta" },
  { title: "Skills", link: "#skills" },
  { title: "Education", link: "#education" },
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