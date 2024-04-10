"use client"
import {
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    SunIcon,
    TwitterIcon,
} from "@/components";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/config/constants";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";
import { motion } from "framer-motion";
import { useState } from "react";
import CustomLink from "./CustomLink";
import CustomMobileLink from "./CustomMobileLink";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { themeMode, setThemeMode } = useThemeSwitcher();

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="relative z-10 flex items-center justify-between w-full lg:px-32 py-8 font-medium
         dark:text-light md:px-16 sm:px-12 p-8">
            <button
                className="flex-col items-center justify-center lg:hidden flex"
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 
                        rounded-sm  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                        }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 
                        rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
                        }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 
                        rounded-sm  ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                        }`}
                ></span>
            </button>

            <div className="lg:flex items-center justify-between w-full hidden">
                <nav className="space-x-4">
                    {NAV_LINKS.map(({ link, title }, i) => (
                        <CustomLink key={link + i} href={link} title={title} />
                    ))}
                </nav>

                <nav className="flex flex-wrap items-center justify-center">
                    <motion.a
                        href="https://twitter.com/junaidali1014"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <TwitterIcon />
                    </motion.a>
                    <motion.a
                        href="https://github.com/junaid-1013"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/junaid-ali-bhatti-34b680243/"
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mx-3"
                    >
                        <LinkedInIcon />
                    </motion.a>

                    <button
                        onClick={() => setThemeMode(themeMode == "light" ? "dark" : "light")}
                        className={`flex items-center justify-center rounded-full p-1 ml-3
                ${themeMode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                            }`}
                    >
                        {themeMode === "dark" ? (
                            <SunIcon className={"fill-dark"} />
                        ) : (
                            <MoonIcon className={"fill-darl"} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
            "
                >
                    <nav className="flex flex-col items-center justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="#about"
                            title="About"
                            className=""
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="#projects"
                            title="Projects"
                            className=""
                            toggle={handleClick}
                        />
                    </nav>

                    <nav className="flex flex-wrap items-center justify-center mt-2">
                        <motion.a
                            href="https://twitter.com/junaidali1014"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 sm:mr-3 mx-1"
                        >
                            <TwitterIcon />
                        </motion.a>
                        <motion.a
                            href="https://github.com/junaid-1013"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 sm:mx-3 rounded-full mx-1 bg-light dark:bg-dark"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/junaid-ali-34b680243/"
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 sm:ml-3 mx-1"
                        >
                            <LinkedInIcon />
                        </motion.a>

                        <button
                            onClick={() => setThemeMode(themeMode == "light" ? "dark" : "light")}
                            className={`ml-3 flex items-center justify-center rounded-full p-1
                ${themeMode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                                }`}
                        >
                            {themeMode === "dark" ? (
                                <SunIcon className={"fill-dark"} />
                            ) : (
                                <MoonIcon className={"fill-darl"} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};
