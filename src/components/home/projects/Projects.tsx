"use client";
import { AnimatedText, Layout } from "@/components";
import { FEATURED_PROJECTS } from "@/config/constants";
import { motion } from "framer-motion";
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
                    className="mb-16 lg:!text-8xl md:!text-7xl !text-6xl"
                />
                <div className="grid grid-cols-12 xl:gap-x-24 gap-y-24 lg:gap-x-16 md:gap-x-8 sm:gap-y-20 gap-x-0 
                xl:px-16 lg:px-12 md:px-10 sm:px-8 px-0">
                    {FEATURED_PROJECTS.map(
                        ({ github, img, link, summary, title, tech }, i) => (
                            <motion.div key={link + i} className="col-span-12"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true,
                                }}
                                custom={i}
                            >
                                <FeaturedProjects
                                    title={title}
                                    img={img}
                                    summary={summary}
                                    link={link}
                                    github={github}
                                    tech={tech}
                                    index={i}
                                />
                            </motion.div>
                        )
                    )}
                </div>
            </Layout>
        </section>
    );
};
