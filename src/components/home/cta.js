import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedText, Layout, LinkArrow, HireMe, ParticleContainer  } from "@/components";

export const CTA = () => {
  return (
    <main
      id="cta"
      className="flex items-center w-full min-h-screen text-dark dark:text-light"
    >
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <ParticleContainer />
          <div
            className="w-1/3 md:w-full shadow-[0_25px_50px_8px_rgba(0,0,0,0.5)] 
        rounded-full border-3 border-solid border-gray-900"
          >
            <Image
              src="/images/profile/developer-pic-2.png"
              width={70}
              height={100}
              alt="Junaid"
              className="w-full h-auto rounded-full lg:hidden md:inline-block md:w-full"
              priority
              sizes="(max-width: 768px) 100vm,
           (max-width:1200px) 50vm, 50vm"
            />
          </div>
          <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="!text-6xl !text-left 
          xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl xm:!text-3xl
          "
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/Junaid's CV.pdf"
                target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 
            rounded-lg text-text-lg font-semibold
            hover:bg-light hover:text-dark
            border-2 boder-solid border-transparent hover:border-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
            hover:dark:border-light md:p-2 md:px-4 md:text-base"
                download={true}
              >
                Resume
                <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href="mailto:junaid.ali101452@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe />
      <div className="absolute inline-block w-24 right-8 bottom-8 md:hidden">
        <Image
          src="/images/svgs/miscellaneous_icons_1.svg"
          width={100}
          height={100}
          alt="JunaidAli"
          className="w-full h-auto"
        />
      </div>
    </main>
  );
};
