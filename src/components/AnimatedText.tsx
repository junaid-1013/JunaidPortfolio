"use client";
import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const AnimatedText = ({ text, className = "" }: any) => {
    return (
        <div className="flex items-center justify-center w-full sm:py-2 mx-auto overflow-hidden text-center py-0 ">
            <motion.h1
                className={`inline-block w-full text-dark font-bold capitalize text-8xl 
            ${className} dark:text-light`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text.split(" ").map((word: string, index: number) => (
                    <motion.span
                        key={word + "-" + index}
                        className="inline-block"
                        variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
};
