import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import shopProject from "../../public/images/projects/shop_manag_system.png"
import kidneyStoneProject from "../../public/images/projects/kidney_stone_detection.jpg"
import portfolioProject from "../../public/images/projects/next.js_portfolio.png"
import TransitionEffect from "@/components/TransitionEffect";

const FramerLink = motion(Link);
const FramerImage = motion(Image);
const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between p-12 relative rounded-br-2xl
        rounded-3xl border border-solid order-dark bg-light shadow-2xl dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            "/>

            <Link href={link} target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vm,
               (max-width:1200px) 50vm, 50vm"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="py-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

                <div className="mt-2 flex items-center">
                    <FramerLink href={github} target="_blank" className="w-10" whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <GithubIcon />
                    </FramerLink>
                    <Link href={github} target="_blank"
                        className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold
                        sm:px-4 sm:text-base hover:bg-light hover:text-dark
                        border-2 boder-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light 
                        hover:dark:border-light
                        ">
                        Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            " />
            <Link href={link} target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vm,
           (max-width:1200px) 50vm, 50vm"
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">{title}</h2>
                </Link>


                <div className="w-full mt-2 flex items-center justify-between">
                    {/* <Link href={github} target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    >Visit</Link> */}

                    <FramerLink href={github} target="_blank" className="w-8 md:w-6" whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <GithubIcon />
                    </FramerLink>

                </div>
            </div>
        </article>

    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Junaid Ali | Projects Page</title>
                <meta name='junaid ali' content="myintroduction" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProjects
                                title="Kidney Stone Detection"
                                img={kidneyStoneProject}
                                summary="The system will utilize image processing and computer vision techniques, such as feature extraction and object detection, 
                                to analyze the images and detect abnormalities. The extracted features will be used to train machine learning algorithms, such as
                                convolutional neural networks (CNNs) & SVmM, to classify the images into different categories based on the detected abnormalities. 
                                Tk inter Graphical User Interface(GUI) is used."
                                link="https://github.com/junaid-1013/Kidney-Stone-Detection"
                                github="https://github.com/junaid-1013/Kidney-Stone-Detection"
                                type="Featured Project"

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Shop Management System"
                                img={shopProject}
                                link="https://github.com/junaid-1013/Shop-Management-System"
                                github="https://github.com/junaid-1013/Shop-Management-System"
                                type="Featured Project"

                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Next Js Portfolio Website"
                                img={portfolioProject}
                                link="https://next-js-portfolio-website-omega.vercel.app/"
                                github="https://github.com/junaid-1013/Next.js-Portfolio-Website"
                                type="Featured Project"

                            />
                        </div>

                        {/* <div className="col-span-12">
                            <FeaturedProjects
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                                link="/"
                                github="/"
                                type="Featured Project"

                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Featured Project"

                            />
                        </div>

                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Crypto Screener Application"
                                img={project1}
                                link="/"
                                github="/"
                                type="Featured Project"

                            />
                        </div> */}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects