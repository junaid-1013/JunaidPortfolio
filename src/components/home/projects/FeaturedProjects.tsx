"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const FramerLink = motion(Link);
const FramerImage = motion(Image);
const FeaturedProjects = ({ title, summary, img, link, github, tech, index }: any) => {
    return (
        <article className={`relative flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center 
        justify-between w-full lg:p-12 border border-solid shadow-2xl 
        sm:rounded-br-2xl sm:rounded-3xl bg-light dark:bg-dark dark:border-dark flex-col sm:p-8
        rounded-2xl rounded-br-3xl p-4`}>
            <Link
                href={link}
                target="_blank"
                className="lg:w-1/2 overflow-hidden rounded-lg cursor-pointer w-full"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    width={100}
                    height={100}
                    className="w-full h-auto bg-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vm,(max-width:1200px) 50vm, 50vm"
                />
            </Link>

            <div className="flex flex-col items-start justify-between lg:w-1/2 lg:pl-6 w-full pl-0 pt-6 lg:pt-0">
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="w-full my-2 sm:text-4xl font-bold text-left dark:text-light text-sm">
                        {title}
                    </h2>
                </Link>
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
                <div className="flex items-center mt-2 gap-x-4">
                    <FramerLink
                        href={github}
                        target="_blank"
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
                    <FramerLink
                        href={link}
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="font-medium dark:text-light text-sm hover:text-[#1B9CFC]
                         hover:dark:text-[#1B9CFC] flex gap-x-2 sm:text-base"
                    >
                        View Demo <LuExternalLink className="mt-1" />
                    </FramerLink>

                </div>
            </div>
        </article>
    );
};

export default FeaturedProjects;
