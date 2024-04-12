"use client";
import { EXPERIENCE_DATA } from "@/config/constants";
import { useState } from "react";
import { AnimatedText } from "./AnimatedText";
import ExperienceDetails from "./ExperienceDetails";

export const Experience = () => {
    const [activeWork, setActiveWork] = useState(EXPERIENCE_DATA[0].id);

    return (
        <section id="experience" className="mt-28 max-w-[768px] mx-auto px-4">
            <AnimatedText
                text="Experience"
                className="lg:!text-8xl md:!text-7xl !text-6xl mb-16"
            />
            <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
                <ul className="md:w-32 flex flex-col">
                    {EXPERIENCE_DATA.map((work) => (
                        <li
                            key={work.id}
                            onClick={() => setActiveWork(work.id)}
                            className={`${activeWork === work.id
                                ? "dark:border-l-white dark:text-white border-l-black text-black "
                                : "border-l-[#7c7c7c] text-[#7c7c7c]"
                                } border-l-2 bg-transparent hover:dark:bg-[#272727] hover:bg-[#d1d1d1] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                        >
                            {work.label}
                        </li>
                    ))}
                </ul>
                <div>
                    {EXPERIENCE_DATA.map((work) => (
                        activeWork === work.id ? <ExperienceDetails key={work.id} {...work} /> : null
                    ))}
                </div>
            </div>
        </section>
    );
};
