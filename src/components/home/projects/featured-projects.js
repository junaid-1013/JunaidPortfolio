import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerLink = motion(Link);
const FramerImage = motion(Image);
const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl order-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            "
      />

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
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vm,
               (max-width:1200px) 50vm, 50vm"
        />
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="py-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="flex items-center mt-2">
          <FramerLink
            href={github}
            target="_blank"
            className="w-10"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </FramerLink>
          <Link
            href={github}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold border-2 border-transparent rounded-lg bg-dark dark:bg-light dark:text-dark text-light sm:px-4 sm:text-base hover:bg-light hover:text-dark boder-solid hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
