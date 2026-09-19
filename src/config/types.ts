import type { IconType } from "react-icons";

export interface ExperienceProps {
    id: string;
    title: string;
    company: string;
    label: string;
    period: string;
    duration?: string;
    details: string[];
}

export interface SocialLinksType {
    href: string;
    Icon: any
}

export interface ProjectProps {
    title: string;
    kind?: string;
    status?: "Live";
    summary: string;
    img?: string;
    /** mp4 path under /public (e.g. "/videos/demo.mp4"). Plays muted on loop in view; img becomes the poster. */
    video?: string;
    link?: string;
    github?: string;
    tech: string[];
}

export interface OtherProjectProps {
    title: string;
    summary: string;
    link?: string;
    github?: string;
    tech: string[];
}

export interface SkillProps {
    title: string;
    img?: string;
    imgDark?: string;
    Icon?: IconType;
}
