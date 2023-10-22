import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";

const FramerLink = motion(Link);
const FramerImage = motion(Image);
const FeaturedProjects = ({ title, summary, img, link, github, tech, index }) => {
  return (
    <article className={`relative flex ${index % 2 === 1 ? 'flex-row-reverse' : ''} items-center justify-between w-full p-12 border border-solid shadow-2xl 
    rounded-br-2xl rounded-3xl order-dark bg-light dark:bg-dark dark:border-dark lg:flex-col lg:p-8 
    xs:rounded-2xl xs:rounded-br-3xl xs:p-4`}>

      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
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
          sizes="(max-width: 768px) 100vm,
               (max-width:1200px) 50vm, 50vm"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className={`py-2 font-medium text-dark dark:text-light sm:text-sm text-justify ${index % 2 === 1 ? 'pr-6 -pl-6 lg:pr-0 lg:pl-0' : ''} `}>
          {summary}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {tech.map(
            (techItem, i) => (
              <div key={i} className="p-2 px-4 font-medium rounded-lg shadow-xl dark:bg-light  text-dark sm:px-2 sm:text-sm ">
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
            <div className="flex gap-x-2 group">
              <p className="py-2 font-medium text-dark dark:text-light sm:text-sm group-hover:text-[#1B9CFC]">
                Code
              </p>
              <GithubIcon className="w-6 group-hover:text-[#1B9CFC]" />
            </div>
          </FramerLink>
          <FramerLink
            href={link}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="font-medium dark:text-light sm:text-sm  hover:text-[#1B9CFC]  hover:dark:text-[#1B9CFC] flex gap-x-2"
          >
            View Demo <LuExternalLink className="mt-1" />
          </FramerLink>

        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
