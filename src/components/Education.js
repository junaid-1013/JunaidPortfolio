import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EDUCATION_DATA } from "@/config/constants";
import { AnimatedText } from "./AnimatedText";


export const Education = ({themeMode, setThemeMode}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div id="education" className="mt-28">
      <AnimatedText
        text="Education"
        className="lg:!text-7xl sm:!text-6xl xs:!text-4xl mb-16"
      />
      <VerticalTimeline>
        {
          EDUCATION_DATA.map((education, i) => (
            <React.Fragment key={i}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    themeMode === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    themeMode === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={education.date}
                icon={education.icon}
                iconStyle={{
                  background:
                    themeMode === "light" ? "white" : "rgba(61, 61, 61)",
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
