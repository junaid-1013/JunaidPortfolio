import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import { LiIcon } from "./LiIcon";

export const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between 
        md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg ">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-28">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                "
        />
        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position="Math Teacher"
            company="The Quest School"
            compayLink="http://thequestschool.edu.pk/"
            time="Sep 2019- Januray 2020"
            address="Main G.T. Road, Shahdara Lahore"
            work="I was hired as a full-time teacher for Matric Mathematics. As a Math teacher, 
                        I was responsible for designing and delivering engaging lessons that catered to the 
                        needs of my students."
          />
          <Details
            position="Math Teacher"
            company="Al-Ghazi Evening College"
            compayLink="https://www.facebook.com/Ghazzians/"
            time="Sep 2016- June 2019"
            address="Imamia Colony, shahdara Lahore"
            work="Hired as a Full time teacher for Matric and Intermideiate classes for Mathematics. Also Teaches 
                        Physics and Statistics in the hour of need for Institute. Also worked as a admin incharge for Institute."
          />
          <Details
            position="Math Teacher"
            company="Al-Farabi Group of Schools"
            compayLink="https://ar-ar.facebook.com/alfarabigroupofschools/about/"
            time="Aug 2018- Sep 2018"
            address="Imamia Colony, shahdara Lahore"
            work="I was hired as a full-time teacher for Matric Mathematics and Physics. As a teacher, I was responsible for designing
                         and delivering engaging lessons that catered to the needs of my students."
          />
        </ul>
      </div>
    </div>
  );
};
