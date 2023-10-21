import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SKILLS } from "@/config/constants";

export const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold
                "
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
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    }
  }),
}

export const Skills = () => {
  return (
    <>
      <h2 id="skills" className="w-full mt-28 font-bold text-center text-8xl md:text-6xl md:mt-32 ">
        Skills
      </h2>
      {/* <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            "
      >
        <motion.div
          className="flex items-center justify-center p-8 font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Typescript" x="15vw" y="-12vw" />
        <Skill name="Tailwind CSS" x="32vw" y="-5vw" />
        <Skill name="Firebase" x="0vw" y="-20vw" />
        <Skill name="MongoDB" x="-25vw" y="18vw" />
        <Skill name="Figma" x="18vw" y="18vw" />
      </div> */}
      <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 grid-cols-9 gap-8 mt-4'>
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
    </>
  );
};
