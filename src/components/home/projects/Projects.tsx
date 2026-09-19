"use client";
import { AnimatedText, Layout } from "@/components";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/config/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import FeaturedProjects from "./FeaturedProjects";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            delay: 0.05 * i,
        }
    }),
}

export const Projects = () => {
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center w-full mb-16 dark:text-light"
        >
            <Layout className="xl:-mt-32 mt-0">
                <AnimatedText
                    text="My Work"
                    className="mb-6 lg:!text-8xl md:!text-7xl !text-6xl"
                />
                <p className="mb-16 text-center font-medium text-sm sm:text-base text-dark/75 dark:text-light/75">
                    Some of my production work is under NDA. I&apos;m happy to walk through the architecture and my
                    contribution in an interview.
                </p>
                <div className="grid grid-cols-12 xl:gap-x-24 gap-y-24 lg:gap-x-16 md:gap-x-8 sm:gap-y-20 gap-x-0 
                xl:px-16 lg:px-12 md:px-10 sm:px-8 px-0">
                    {FEATURED_PROJECTS.map(
                        (project, i) => (
                            <motion.div key={project.title} className="col-span-12"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={i}
                            >
                                <FeaturedProjects {...project} index={i} />
                            </motion.div>
                        )
                    )}
                </div>
                <h3 className="mt-24 mb-8 text-3xl sm:text-4xl font-bold text-center">Other Work</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-0">
                    {OTHER_PROJECTS.map(({ title, summary, link, github, tech }) => (
                        <article
                            key={title}
                            className="flex flex-col gap-y-3 p-6 rounded-2xl border border-solid shadow-xl bg-light dark:bg-dark dark:border-light/20"
                        >
                            <h4 className="text-xl font-bold">{title}</h4>
                            <p className="text-sm sm:text-base font-medium">{summary}</p>
                            <p className="text-xs sm:text-sm text-dark/75 dark:text-light/75">{tech.join(" · ")}</p>
                            <div className="flex items-center gap-x-4 mt-auto pt-2">
                                {github && (
                                    <Link href={github} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-x-2 font-medium text-sm hover:text-[#1B9CFC]">
                                        Code <FaGithub size={15} />
                                    </Link>
                                )}
                                {link && (
                                    <Link href={link} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-x-2 font-medium text-sm hover:text-[#1B9CFC]">
                                        View Demo <LuExternalLink />
                                    </Link>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </Layout>
        </section>
    );
};
