"use client";
import { SKILLS } from "@/config/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "./AnimatedText";

export const Skill = ({ name, x, y }: any) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full sm:font-semibold bg-dark text-light
                lg:py-3 lg:px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
                md:py-2 md:px-4 md:text-base text-sm py-1.5 px-3 font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * i,
        }
    }),
}

export const Skills = () => {
    return (
        <div id="skills">
            <AnimatedText
                text="Skills"
                className="lg:!text-8xl md:!text-7xl !text-6xl my-20"
            />
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-8 mt-4'>
                {SKILLS.map(
                    ({ img, title }, i) => (
                        <motion.div key={i}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={i}
                            className='flex flex-col gap-y-2 justify-center items-center'>
                            <div className='justify-center items-center p-6 rounded-full hover:scale-105 ease-in duration-300 w-28 h-28
                            shadow-[0px_8px_12px_4px_rgba(0,0,0,0.35)] border-3 border-solid border-gray-900'>
                                <Image src={img}
                                    width={1000} height={1000}
                                    className="w-16 h-16"
                                    alt='/' />
                            </div>
                            <div className='flex items-center justify-center text-center'>
                                <h3>{title}</h3>
                            </div>
                        </motion.div>
                    )
                )}
            </div>
        </div>
    );
};
