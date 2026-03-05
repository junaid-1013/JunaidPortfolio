"use client";
import { EDUCATION_DATA } from "@/config/constants";
import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

const iconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: [0.5, 1.2, 1],
        opacity: [0, 1, 1],
        transition: { duration: 0.6, times: [0, 0.6, 1], ease: "easeOut" },
    },
};

const cardVariants = (from: number) => ({
    hidden: { x: from, opacity: 0 },
    visible: {
        x: [from, -from / 5, 0],
        opacity: [0, 1, 1],
        transition: { duration: 0.6, times: [0, 0.6, 1], ease: "easeOut" },
    },
});

export const Education = () => {
    return (
        <div id="education" className="mt-28 overflow-x-clip">
            <AnimatedText
                text="Education"
                className="lg:!text-8xl md:!text-7xl !text-6xl mb-16"
            />
            <ol className="relative w-[90%] max-w-[1170px] mx-auto py-8">
                <span
                    aria-hidden="true"
                    className="absolute top-0 bottom-0 left-5 min-[1170px]:left-1/2 w-1 -ml-0.5
                    bg-dark dark:bg-light"
                />
                {EDUCATION_DATA.map((education, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <motion.li
                            key={education.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="relative mb-16 last:mb-0"
                        >
                            <motion.span
                                aria-hidden="true"
                                variants={iconVariants}
                                className="absolute top-0 left-0 min-[1170px]:left-1/2 min-[1170px]:-ml-[30px]
                                flex items-center justify-center rounded-full text-2xl
                                w-10 h-10 min-[1170px]:w-[60px] min-[1170px]:h-[60px]
                                bg-light text-dark ring-4 ring-dark
                                dark:bg-[#3d3d3d] dark:text-light dark:ring-light"
                            >
                                {education.icon}
                            </motion.span>

                            <motion.div
                                variants={cardVariants(isLeft ? -100 : 100)}
                                className={`relative ml-[60px] min-[1170px]:ml-0 min-[1170px]:w-[45%]
                                ${isLeft ? "" : "min-[1170px]:ml-auto"}
                                px-8 py-[1.3rem] text-left rounded-md border border-solid border-black/5
                                bg-gray-100 dark:bg-white/5`}
                            >
                                {/* Arrow pointing at the icon: on the left edge, or on the right edge of left-column cards on desktop. */}
                                <span
                                    aria-hidden="true"
                                    className={`absolute top-6 right-full w-0 h-0 border-[7px] border-solid border-transparent
                                    border-r-gray-400 dark:border-r-white/50
                                    ${isLeft ? "min-[1170px]:hidden" : ""}`}
                                />
                                {isLeft && (
                                    <span
                                        aria-hidden="true"
                                        className="hidden min-[1170px]:block absolute top-6 -right-[14px] w-0 h-0
                                        border-[7px] border-solid border-transparent
                                        border-l-gray-400 dark:border-l-white/50"
                                    />
                                )}
                                <time
                                    className={`block min-[1170px]:absolute min-[1170px]:top-1.5 min-[1170px]:w-full
                                    mb-2 min-[1170px]:mb-0 opacity-70
                                    ${isLeft
                                            ? "min-[1170px]:left-[124%]"
                                            : "min-[1170px]:right-[124%] min-[1170px]:text-right"}`}
                                >
                                    {education.date}
                                </time>
                                <h3 className="font-semibold capitalize">{education.title}</h3>
                                <p className="font-normal">{education.location}</p>
                                <p className="mt-1 font-normal leading-relaxed text-gray-700 dark:text-white/75">
                                    {education.info}
                                </p>
                            </motion.div>
                        </motion.li>
                    );
                })}
            </ol>
        </div>
    );
};
