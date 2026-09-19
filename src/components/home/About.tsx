"use client";
import { Education, Experience, Layout, Skills } from "@/components";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimateNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const ref = useRef<any>(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current && Math.round(latest) <= value) {
                ref.current.textContent = `${Math.round(latest)}${suffix}`;
            }
        });
        return () => unsubscribe();
    }, [springValue, value, suffix]);

    return <span ref={ref}>{`0${suffix}`}</span>;
};

export const About = () => {
    const data = [
        { value: 4, suffix: "+", text: "Years of experience" },
        { value: 92, suffix: "%", text: "RAG retrieval accuracy" },
        { value: 6, suffix: "+", text: "AI products built" },
        { value: 9, suffix: "+", text: "Engineers led" },
    ];
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center w-full dark:text-light"
        >
            <Layout className="!pt-16">
                <div className="grid w-full grid-cols-8 sm:gap-16 gap-8">
                    <div className="flex justify-between col-span-8 flex-row items-center md:order-1 order-3 gap-x-4">
                        {data.map((item) => (
                            <div key={item.text} className="flex flex-col lg:items-end justify-center items-center">
                                <span className="inline-block font-bold md:text-7xl sm:text-6xl text-3xl">
                                    <AnimateNumber value={item.value} suffix={item.suffix} />
                                </span>
                                <span className="md:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center lg:text-end sm:text-lg text-xs">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </section>
    );
};
