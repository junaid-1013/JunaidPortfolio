"use client";
import { ProjectProps } from "@/config/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const FramerLink = motion(Link);
const FramerImage = motion(Image);

// Muted looping clip: plays while in view, pauses when scrolled away.
const VideoPlayer = ({ title, video, img }: { title: string; video: string; img?: string }) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => (entry.isIntersecting ? el.play().catch(() => {}) : el.pause()),
            { threshold: 0.4 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <video
            ref={ref}
            src={video}
            poster={img}
            aria-label={`${title} demo video`}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            className="w-full h-full object-contain"
        />
    );
};

const Media = ({ title, img, video, link }: Pick<ProjectProps, "title" | "img" | "video" | "link">) => {
    const wrapper = "lg:w-1/2 overflow-hidden rounded-lg w-full";

    if (video) {
        return (
            <div className={`${wrapper} aspect-video bg-dark`}>
                <VideoPlayer title={title} video={video} img={img} />
            </div>
        );
    }

    const content = img ? (
        <FramerImage
            src={img}
            alt={title}
            width={100}
            height={100}
            className="w-full h-auto bg-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw, 50vw"
        />
    ) : (
        <div
            role="img"
            aria-label={`${title} preview coming soon`}
            className="flex items-center justify-center w-full aspect-video p-6 text-center font-bold
            sm:text-2xl text-lg text-light dark:text-dark bg-gradient-to-br from-dark to-gray-600
            dark:from-light dark:to-gray-400"
        >
            {title}
        </div>
    );

    return link ? (
        <Link href={link} target="_blank" rel="noopener noreferrer" className={`${wrapper} cursor-pointer`}>
            {content}
        </Link>
    ) : (
        <div className={wrapper}>{content}</div>
    );
};

const FeaturedProjects = ({
    title, kind, status, summary, img, video, link, github, tech, index,
}: ProjectProps & { index: number }) => {
    const heading = (
        <h2 className="w-full my-2 sm:text-4xl font-bold text-left dark:text-light text-xl">
            {title}
        </h2>
    );
    return (
        <article className={`relative flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center 
        justify-between w-full lg:p-12 border border-solid shadow-2xl 
        sm:rounded-br-2xl sm:rounded-3xl bg-light dark:bg-dark dark:border-dark flex-col sm:p-8
        rounded-2xl rounded-br-3xl p-4`}>
            <Media title={title} img={img} video={video} link={link} />

            <div className="flex flex-col items-start justify-between lg:w-1/2 lg:pl-6 w-full pl-0 pt-6 lg:pt-0">
                {(kind || status) && (
                    <div className="flex items-center gap-x-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-light/75">
                        {kind && <span>{kind}</span>}
                        {status && (
                            <span className="flex items-center gap-x-1.5 normal-case text-green-600 dark:text-green-400">
                                <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true" />
                                {status}
                            </span>
                        )}
                    </div>
                )}
                {link ? (
                    <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-2"
                    >
                        {heading}
                    </Link>
                ) : (
                    heading
                )}
                <p className={`py-2 font-medium text-dark dark:text-light text-sm text-justify sm:text-base
                    ${index % 2 === 1 ? 'lg:pr-6 lg:-pl-6 pr-0 pl-0' : ''} `}>
                    {summary}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {tech.map(
                        (techItem: string, i: number) => (
                            <div key={i} className="p-2 sm:px-4 font-medium rounded-lg shadow-xl dark:bg-light 
                            text-dark px-2 text-sm sm:text-base">
                                {techItem}
                            </div>
                        )
                    )}
                </div>
                {(github || link) && (
                    <div className="flex items-center mt-2 gap-x-4">
                        {github && (
                            <FramerLink
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className="flex gap-x-2 group items-center">
                                    <p className="py-2 font-medium text-dark dark:text-light text-sm sm:text-base group-hover:text-[#1B9CFC]">
                                        Code
                                    </p>
                                    <FaGithub size={15} className="group-hover:text-[#1B9CFC]" />
                                </div>
                            </FramerLink>
                        )}
                        {link && (
                            <FramerLink
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="font-medium dark:text-light text-sm hover:text-[#1B9CFC]
                                 hover:dark:text-[#1B9CFC] flex gap-x-2 sm:text-base"
                            >
                                View Demo <LuExternalLink className="mt-1" />
                            </FramerLink>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};

export default FeaturedProjects;
