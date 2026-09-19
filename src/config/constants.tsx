import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiGooglegemini,
  SiOpenai,
  SiOpencv,
  SiPytorch,
  SiScikitlearn,
} from "react-icons/si";
import {
  ExperienceProps,
  OtherProjectProps,
  ProjectProps,
  SkillProps,
  SocialLinksType,
} from "./types";
// `video`: mp4 path under public/ (e.g. "/videos/demo.mp4"). Plays muted on loop when scrolled into view; `img` is its poster.
export const FEATURED_PROJECTS: ProjectProps[] = [
  {
    title: "CropSight",
    kind: "AgriTech Platform",
    status: "Live",
    img: "/images/projects/crop-sight.png",
    summary:
      "End-to-end farm and agri-project platform serving individual farms through to sugar and wheat mills, with web and Play Store mobile apps. GPS boundary mapping, crop-health classification via Google Earth Engine, geo-tagged task verification, weather alerts, yield forecasting and stakeholder dashboards.",
    link: "https://smartaisolutions.net/",
    tech: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Sentinel Hub",
      "Google Earth Engine",
      "Leaflet",
      "Mapbox",
    ],
  },
  {
    title: "PropAI",
    kind: "AI Platform",
    status: "Live",
    summary:
      "WhatsApp-first multi-tenant SaaS where real estate agents run their entire lead, buyer and listing pipeline through chat. Claude drives lead qualification and daily agent briefings, and pgvector matches buyers to listings semantically. Includes tenant-scoped RBAC, 2FA, Playwright listing ingestion and Stripe usage metering.",
    link: "https://app.propworld.ai/",
    video: "/videos/propai-demo.mp4",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Redis/ARQ",
      "Claude API",
      "Next.js",
      "Stripe",
      "AWS",
    ],
  },
  {
    title: "Marginalia",
    kind: "AI Platform",
    status: "Live",
    summary:
      "Chat-with-your-PDF study platform. Answers carry page citations that open the PDF at the exact page, and each document also generates summaries, flashcards and quizzes. A durable Inngest pipeline handles parsing, chunking, embedding and generation with retries. The AI layer is provider-agnostic (OpenAI or Gemini) with bring-your-own-key and AES-256-GCM encrypted keys.",
    link: "https://marginalia-jj.vercel.app/",
    github: "https://github.com/junaid-1013/marginalia",
    img: "/images/projects/marginalia-poster.jpg",
    video: "/videos/marginalia-demo.mp4",
    tech: [
      "Next.js",
      "TypeScript",
      "pgvector",
      "Prisma",
      "Inngest",
      "Vercel AI SDK",
    ],
  },
  {
    title: "Symptoms Sense",
    kind: "AI Health Companion",
    img: "/images/projects/symptomsSense.jpg",
    summary:
      "Conversational health assistant: describe symptoms, get pointed to the right specialist with urgency flags (information only, never a diagnosis), then book an appointment or set a medicine reminder in one chat. A tool-calling agent uses a propose-then-confirm design, so nothing is written until the user confirms.",
    link: "https://symptoms-sense.vercel.app/",
    github: "https://github.com/junaid-1013/Symptoms-Sense",
    video:"/videos/symptoms-sense-demo.mp4",
    tech: [
      "FastAPI",
      "OpenAI function calling",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
  },
  {
    title: "GAN-Based Drone & Satellite Fusion",
    kind: "MS Thesis",
    img: "/images/projects/thesis-gan.jpg",
    summary:
      "GAN framework fusing drone imagery with 10 m Sentinel-2 data, using a spectral attention encoder and a multi-task segmentation head for weed, lodging and boundary detection. Reaches 32.94 dB PSNR on a self-collected set of 11,325 annotated patch pairs, and runs CPU-only after INT8 quantisation (230 MB, down from 850 MB).",
    tech: [
      "PyTorch",
      "GANs",
      "Attention",
      "Multi-Task Learning",
      "Quantization",
      "Sentinel-2",
    ],
  },
];
export const OTHER_PROJECTS: OtherProjectProps[] = [
  {
    title: "Kidney Stone Detection",
    summary:
      "CT image analysis comparing a CNN with an SVM + HOG baseline, served through Gradio.",
    github: "https://github.com/junaid-1013/Kidney-Stone-Detection",
    tech: ["Python", "CNN", "SVM", "Gradio"],
  },
  {
    title: "TEDx COMSATS",
    summary:
      "Official website for TEDxCOMSATS Lahore 2024, built as part of the Web & IT team.",
    link: "https://tedxcomsatslhr.vercel.app/",
    github: "https://github.com/junaid-1013",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
  },
  {
    title: "NFT Arena",
    summary:
      "NFT marketplace on Ethereum where creators mint and collectors trade digital art.",
    link: "https://my-nft-arena.vercel.app/",
    github: "https://github.com/junaid-1013/NFT-Arena",
    tech: ["Next.js", "TypeScript", "Ethereum", "IPFS"],
  },
  {
    title: "Media Server",
    summary:
      "Media server for streaming and managing digital content. Minimal HTTP API to upload media to disk and serve it",
    github: "https://github.com/junaid-1013/media-server",
    tech: ["Express", "Javascript"],
  },

];
export const NAV_LINKS = [
  { title: "Home", link: "/" },
  { title: "Skills", link: "#skills" },
  { title: "Experience", link: "#experience" },
  { title: "Education", link: "#education" },
  { title: "Projects", link: "#projects" },
];
export const SOCIAL_LINKS: SocialLinksType[] = [
  { href: "https://github.com/junaid-1013", Icon: <IoLogoGithub size={25} /> },
  {
    href: "https://www.linkedin.com/in/junaid-ali-bhatti-34b680243/",
    Icon: <BsLinkedin size={25} color="#0a66c2" />,
  },
];
export const SKILLS: SkillProps[] = [
  {
    img: "/images/skills/nextjs.png",
    title: "NextJS",
  },
  {
    img: "/images/skills/react.png",
    title: "React JS",
  },
  {
    img: "/images/skills/typescript.png",
    title: "Typescript",
  },
  {
    img: "/images/skills/javascript.png",
    title: "Javascript",
  },
  {
    img: "/images/skills/python.png",
    title: "Python",
  },
  {
    img: "/images/skills/fastApi.png",
    title: "FastAPI",
  },
  {
    img: "/images/skills/django.png",
    title: "Django",
  },
  {
    img: "/images/skills/node.png",
    title: "Node JS",
  },
  {
    img: "/images/skills/langgraph.png",
    title: "LangGraph",
  },
  {
    img: "/images/skills/pinecone.png",
    imgDark: "/images/skills/pinecone-white.png",
    title: "Pinecone",
  },
  {
    img: "/images/skills/tensorflow.svg",
    title: "TensorFlow",
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
    img: "/images/skills/postgresql.png",
    title: "PostgreSQL",
  },
  {
    img: "/images/skills/mongodb.png",
    title: "Mongo DB",
  },
  {
    img: "/images/skills/sql.png",
    title: "SQL",
  },
  {
    img: "/images/skills/gee.png",
    title: "GEE",
  },
  {
    img: "/images/skills/sentinelHub.png",
    title: "Sentinel Hub",
  },
  {
    img: "/images/skills/tailwind.png",
    title: "Tailwind",
  },
  {
    img: "/images/skills/git.png",
    title: "GitHub",
  },
  {
    img: "/images/skills/mcp-light.png",
    imgDark: "/images/skills/mcp.png",
    title: "MCP",
  },
  {
    img: "/images/skills/claude.png",
    title: "Claude API",
  },
  { Icon: SiOpenai, title: "OpenAI API" },
  {
    img: "/images/skills/gemini.svg",
    title: "Gemini API",
  },
  {
    img: "/images/skills/aws.svg",
    imgDark: "/images/skills/aws-light.svg",
    title: "AWS",
  },
  {
    img: "/images/skills/docker.svg",
    title: "Docker",
  },
  {
    img: "/images/skills/redis.svg",
    title: "Redis",
  },
  {
    img: "/images/skills/pytorch.svg",
    title: "PyTorch",
  },
  {
    img: "/images/skills/scikitlearn.svg",
    title: "Scikit-learn",
  },
  { Icon: SiOpencv, title: "OpenCV" },
  {
    img: "/images/skills/linux.png",
    title: "Linux",
  },
];
export const EDUCATION_DATA = [
  {
    title: "Master of Science In Computer Science",
    date: "2024-2026",
    location: "COMSATS University Islamabad(CUI), Lahore Campus",
    icon: React.createElement(LuGraduationCap),
    info: "Thesis: GAN-based spatio-temporal fusion of drone and satellite imagery for precision agriculture. Relevant courses included Advanced Computer Vision, Pattern Recognition, Machine Learning and AI.",
  },
  {
    title: "Bachelor of Science In Computer Science",
    date: "2020-2024",
    location: "COMSATS University Islamabad(CUI), Lahore Campus",
    icon: React.createElement(LuGraduationCap),
    info: "Relevant Courses included Data Structures and Algorithms, Computer Vision and Artificial Intelligence.",
  },
  // {
  //   title: "B.Sc-Mathematics",
  //   date: "2017-2018",
  //   location: "University of Punjab, Lahore",
  //   icon: React.createElement(LuGraduationCap),
  //   info: "Relevant Courses included Calculus, Mechanics and Mathematical Method.",
  // },
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
];
export const EXPERIENCE_DATA: ExperienceProps[] = [
  {
    id: "Techesthete",
    title: "Senior AI Engineer",
    company: "Techesthete",
    label: "Techesthete",
    period: "Oct 2026 - Present",
    details: [
      "Build and deploy AI agents and agentic workflows with LangChain and LangGraph, integrating OpenAI, Claude and Gemini models.",
      "Develop LLM-powered applications and RAG workflows over vector databases, from ingestion to grounded responses.",
      "Build MCP integrations that give LLM agents controlled access to tools and data.",
      "Develop Python and Node.js backend services and React.js AI interfaces, and deploy them to production.",
    ],
  },
  {
    id: "SmartAISolutions",
    title: "Software Engineer",
    company: "Smart A & I Solutions",
    label: "SmartAISolutions",
    period: "Sep 2025 - Sep 2026",
    duration: "1 year 1 Month",
    details: [
      "Led development of two AI products from inception: planning, work breakdown, code review, Git workflow, and the hardest technical components personally.",
      "Architected a multi-tenant AI SaaS end-to-end on FastAPI (async SQLAlchemy, PostgreSQL) and Next.js.",
      "Built agentic LLM systems with LangGraph, Claude and OpenAI for lead qualification, document intelligence and citation-grounded RAG.",
      "Owned deployment on AWS: EC2, RDS, S3, IAM roles and policies, Secrets Manager, and CI/CD pipelines.",
    ],
  },
  {
    id: "VitalGreen",
    title: "Software Developer",
    company: "Vital Green",
    label: "VitalGreen",
    period: "Jan 2023 - Aug 2025",
    duration: "2 years 8 months",
    details: [
      "Founding developer on CropSight, one of three engineers who took it from prototype to a deployed agri-industry platform.",
      "Moved into the technical lead role as the team grew to nine, directing architecture and onboarding new developers.",
      "Built the web application and owned deployment, server administration and task automation on Ubuntu.",
    ],
  },
  {
    id: "LogicFinder",
    title: "Full Stack Developer (Contract)",
    company: "Logic Finder",
    label: "LogicFinder",
    period: "Mar 2025 - Jun 2025",
    duration: "4 months",
    details: [
      "Built Network Fort, a real-time cybersecurity dashboard, using Next.js and Server-Sent Events.",
      "Designed secure REST APIs with Elasticsearch integration, working directly with the US client team.",
    ],
  },
  {
    id: "LabEngineer",
    title: "Lab Engineer",
    company: "UMT",
    label: "UMT",
    period: "Jun 2024 - Jul 2025",
    duration: "1 year 2 months",
    details: [
      "Conducted labs for programming and modern tech trends within the School of Systems and Technology.",
    ],
  },
  {
    id: "RA",
    title: "Research Associate",
    company: "COMSATS",
    label: "COMSATS",
    period: "Feb 2024 - Jun 2025",
    duration: "1 year 5 months",
    details: [
      "Conducted lab sessions for C++ Programming, Operating Systems, and AI, and guided student projects and research.",
    ],
  },
];
