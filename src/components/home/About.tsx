"use client";
import { Education, Layout, Skills } from "@/components";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimateNumber = ({ value }: { value: number }) => {
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
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

export const About = () => {
    const data = [
        { value: 150, text: "satisfied clients" },
        { value: 20, text: "projects completed" },
        { value: 3, text: "years of experience" },
    ];
    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center w-full dark:text-light"
        >
            <Layout className="!pt-16">
                <div className="grid w-full grid-cols-8 sm:gap-16 gap-8">
                    <div className="flex justify-between col-span-8 flex-row items-center md:order-1 order-3">
                        {data.map((item, index) => (
                            <div key={index} className="flex flex-col lg:items-end justify-center items-center">
                                <span className="inline-block font-bold md:text-7xl sm:text-6xl text-4xl">
                                    <AnimateNumber value={item.value} />+
                                </span>
                                <h2 className="md:text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-center xl:text-start sm:text-lg text-sm">
                                    {item.text}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <Skills />
                {/* <Experience /> */}
                <Education />
            </Layout>
        </section>
    );
};
