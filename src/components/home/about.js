import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring, useInView, useMotionValue } from "framer-motion";

import {
  AnimatedText,
  Education,
  Experience,
  Layout,
  Skills,
} from "@/components";

const AnimateNumber = ({ value }) => {
  const ref = useRef(null);

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

export const About = ({themeMode, setThemeMode}) => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-full dark:text-light"
    >
      <Layout className="pt-16">
        {/* <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        /> */}
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          {/* <div className="flex flex-col items-start justify-start col-span-3 space-y-4 xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I&apos;m Junaid, a web developer and a machine learning and
              computer vision enthusiast with over 3 years of experience in the
              field. I am always looking for new and innovative ways to solve
              problems and create intuitive and enjoyable digital experiences
              for users.
            </p>
            <p className="font-medium">
              I believe that design and development go hand in hand and that a
              great user experience is essential to the success of any digital
              product. My expertise in machine learning and computer vision
              allows me to bring a unique perspective to web development and
              create cutting-edge solutions that meet the needs of today&apos;s
              users.
            </p>
            <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other
              digital product, I am committed to design and development
              excellence and always keep the user at the forefront of my
              thinking. I look forward to the opportunity to bring my skills and
              passion to your next project.
            </p>
          </div>
          <div className="relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 ">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
              src="/images/profile/developer-pic-3.jpg"
              alt="Junaid Ali"
              width={100}
              height={100}
              className="w-full h-auto rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vm,
                             (max-width:1200px) 50vm,
                              33vm"
            />
          </div> */}

          <div className="flex justify-between col-span-8 flex-row items-center md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimateNumber value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                satisfied clients
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimateNumber value={10} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                projects completed
              </h2>
            </div>

            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                <AnimateNumber value={3} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        {/* <Experience /> */}
        <Education themeMode={themeMode} setThemeMode={setThemeMode}/>
      </Layout>
    </section>
  );
};
