import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EDUCATION_DATA } from "@/config/constants";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";


export const Education = () => {
  const ref = useRef(null);
  const [theme, setTheme] = useThemeSwitcher();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="education" className="mt-28">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <VerticalTimeline>
        {
          EDUCATION_DATA.map((education, i) => (
            <React.Fragment key={i}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={education.date}
                icon={education.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(61, 61, 61)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{education.title}</h3>
                <p className="font-normal !mt-0">{education.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {education.info}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </div>
  );
};
