"use client";
import { AnimatedText, Layout, ParticleContainer } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";

export const CTA = () => {
    return (
        <main
            id="cta"
            className="flex items-center w-full min-h-screen text-dark dark:text-light"
        >
            <Layout className="md:!pt-0 sm:pt-16 pt-8">
                <div className="flex items-center justify-between w-full flex-col lg:flex-row">
                    <ParticleContainer />
                    <div
                        className="md:w-1/3 w-full shadow-[0_25px_50px_8px_rgba(0,0,0,0.5)] 
                        rounded-full border-3 border-solid border-gray-900"
                    >
                        <Image
                            src="/images/profile/developer-pic.png"
                            width={70}
                            height={100}
                            alt="Junaid"
                            className="w-full h-auto rounded-full md:hidden inline-block lg:inline-block"
                            priority
                            sizes="(max-width: 768px) 100vm,(max-width:1200px) 50vm, 50vm"
                        />
                    </div>
                    <div className="flex flex-col items-center self-center lg:w-1/2 w-full text-center lg:text-left">
                        <AnimatedText
                            text="Hi, my name is"
                            className="!text-left !font-medium sm:!text-base !text-sm"
                        />
                        <AnimatedText
                            text="Junaid Ali"
                            className="xl:!text-6xl lg:!text-left lg:!text-5xl !text-center md:!text-6xl sm:!text-5xl !text-4xl"
                        />
                        <p className="my-4 md:text-base font-medium sm:text-sm text-xs text-justify">
                            I am a Computer Scientist with over 3 years of experience in various domains.
                            My expertise includes web and mobile app development, Machine Learning, AI, and computer vision.
                            I have also contributed to research projects.
                        </p>
                        <div className="flex items-center lg:self-start mt-2 self-center">
                            <Link
                                href="/Junaid's Resume.pdf"
                                target={"_blank"}
                                className="flex items-center bg-dark text-light md:p-2.5 md:px-6 
                                rounded-lg md:text-lg font-semibold
                                hover:bg-light hover:text-dark
                                border-2 boder-solid border-transparent hover:border-dark
                                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
                                hover:dark:border-light p-2 px-4 text-base gap-x-2"
                                download={true}
                            >
                                Resume
                                <LuExternalLink size={20} />
                            </Link>
                            <Link
                                href="mailto:junaid.ali101452@gmail.com"
                                target={"_blank"}
                                className="ml-4 md:text-lg font-medium underline capitalize text-dark dark:text-light text-base"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    );
};
