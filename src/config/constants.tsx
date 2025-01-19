import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { ExperienceProps, SocialLinksType } from "./types";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
export const FEATURED_PROJECTS = [
  {
    title: "Crop Sight",
    img: "/images/projects/crop-sight.png",
    summary:
      "Crop Sight optimizes crop monitoring, improves yields, and minimizes seed and fertilizer expenses through precision farming, satellite data, machine learning.",
    link: "https://smartaisolutions.net/",
    github: "https://github.com/junaid-1013",
    tech: ["NextJs", "Django", "Python", "GEE", "Typescript", "Javacript"],
  },
  {
    title: "NFT Arena",
    img: "/images/projects/nftArena.png",
    summary:
      "an NFT marketplace built with Nextjs & Ethereum, empowering creators & collectors in the digital renaissance.",
    link: "https://my-nft-arena.vercel.app/",
    github: "https://github.com/junaid-1013",
    tech: ["NextJs", "Typescript", "Metamask", "Ethereum", "Cloudinary", "IPFS"],
  },
  {
    title: "Symptoms Sense",
    img: "/images/projects/symptomsSense.png",
    summary:
      "Our Disease Prediction System uses medical data to personalize your health journey, with AI insights and easy doctor appointment booking for a proactive approach to health.",
    link: "https://symptoms-sense.vercel.app/",
    github: "https://github.com/junaid-1013",
    tech: ["NextJs", "LangChain", "OpenAI", "Pinecone", "Typescript", "Cloudinary"],
  },
  {
    title: "TEDx COMSATS",
    img: "/images/projects/tedx.png",
    summary:
      "TEDxCOMSATS, built with NEXT.js 14 and TypeScript! This website brings the magic of TED Talks to Lahore, Pakistan, hosting inspiring speakers and sparking ideas worth spreading.",
    link: "https://tedxcomsatslhr.vercel.app/",
    github: "https://github.com/junaid-1013",
    tech: ["NextJs", "Typescript", "Framer Motion", "Tailwind"],
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
  { title: "Home", link: "/" },
  { title: "Skills", link: "#skills" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
];
export const SOCIAL_LINKS: SocialLinksType[] = [
  { href: "https://github.com/junaid-1013", Icon: <IoLogoGithub size={25} /> },
  { href: "https://www.linkedin.com/in/junaid-ali-34b680243/", Icon: <BsLinkedin size={25} color="#0a66c2" /> },
];
export const SKILLS = [
  {
    img: "/images/skills/javascript.png",
    title: "Javascript"
  },
  {
    img: "/images/skills/typescript.png",
    title: "Typescript"
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
    img: "/images/skills/gee.png",
    title: "GEE"
  },
  {
    img: "/images/skills/sentinelHub.png",
    title: "Sentinel Hub"
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
    img: "/images/skills/django.png",
    title: "Django",
  },
  {
    img: "/images/skills/pandas.png",
    title: "Pandas",
  },
  {
    img: "/images/skills/numpy.svg",
    title: "Numpy",
  },
  {
    img: "/images/skills/tensorflow.svg",
    title: "TensorFlow",
  },
  {
    img: "/images/skills/sql.png",
    title: "SQL",
  },
  {
    img: "/images/skills/tailwind.png",
    title: "Tailwind"
  },
  {
    img: "/images/skills/sass.png",
    title: "SCSS"
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
    img: "/images/skills/cpp.png",
    title: "CPP"
  },
  {
    img: "/images/skills/maya.png",
    title: "AutoDesk Maya"
  },
]
export const EDUCATION_DATA = [
  {
    title: "Master of Science In Computer Science",
    date: "2024-Present",
    location: "COMSATS University Islamabad(CUI), Lahore Campus",
    icon: React.createElement(LuGraduationCap),
    info: "Relevant Courses included Advance Computer Vision, Pattern Recognition, Machine Learning and AI.",
  },
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
  // {
  //   title: "F.Sc(pre-engineering)",
  //   date: "2015-2016",
  //   location: "Punjab Group of Colleges(PGC), New Muslim Town Lahore",
  //   icon: React.createElement(LuGraduationCap),
  //   info: "Relevant Courses included Chemistry, Physics and Mathematics.",
  // },
  // {
  //   title: "Matric",
  //   date: "2013-2014",
  //   location: "Al-Farabi High School",
  //   icon: React.createElement(LuGraduationCap),
  //   info: "Relevant Courses included Biology, Chemistry, Physics and Mathematics.",
  // },
]
export const EXPERIENCE_DATA: ExperienceProps[] = [
  {
    id: 'VitalGreen',
    title: " Web Developer",
    company: "Vital Green Ltd.",
    label: 'VitalGreen',
    period: "Jan 2024 - Present",
    details: [
      "Engaged as a NextJS developer, contributing to the development of robust system for agriculture monitoring solutions.",
      "Leading the transformation of Crop-Sight into a practical agriculture monitoring product, focusing on revolutionizing farming practices in Pakistan through technology.",
      "Specializing in precision farming techniques using utilizing machine learning, satellite imagery and remote sensing for farm management, crop monitoring, yield estimation, and resource optimization."
    ]
  },
  {
    id: 'LabEngineer',
    title: "Lab Engineer",
    company: "UMT",
    label: 'UMT',
    period: "June 2024 - present",
    details: [
      "Conducted and instructed programming and Web technologies labs for undergraduate Computer Science students at UMT.",
      "Educated students on contemporary technology trends and their practical applications.",
      "Supported the academic development of students in the School of Systems and Technology, Department of Computer Science."
    ]
  },
  {
    id: 'RA',
    title: "Research Associate",
    company: "COMSATS",
    label: 'CUI',
    period: "Feb 2024 - Jan 2025",
    duration: "5 months",
    details: [
      "Delivered comprehensive lab sessions on C++ programming and Operating Systems to undergraduate students in Computer Science and Software Engineering.",
      "Developed lab exercises and instructional materials, aligning with academic standards and industry practices.",
      "Mentored students individually, providing personalized guidance to promote academic excellence."
    ]
  },
  {
    id: 'MLResearcher',
    title: "Machine Learning Researcher",
    company: "COMSATS",
    label: 'COMSATS',
    period: "Jan 2023 - Jan 2024",
    duration: "Duration: 1 year 1 month",
    details: [
      "Experienced researcher specializing in remote sensing with a focus on integrating machine learning, deep learning, and time series analysis for a thesis project.",
      "Proficient in React and Django development, complemented by advanced geospatial processing using Google Earth Engine.",
      "Enthusiastic about leveraging cutting-edge technology and research insights to drive innovative solutions in the dynamic field of remote sensing."
    ]
  },
];
