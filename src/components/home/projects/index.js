import { AnimatedText, Layout } from "@/components";
import FeaturedProjects from "./featured-projects";
import { FEATURED_PROJECTS} from "@/config/constants";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      delay: 0.05 * i,
    }
  }),
}

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full mb-16 dark:text-light"
    >
      <Layout className="-mt-32 xl:mt-0">
        <AnimatedText
          text="My Work"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-20 sm:gap-x-0 px-16 xl:px-12 lg:px-10 md:px-8 sm:px-4 xs:px-0">
          {FEATURED_PROJECTS.map(
            ({ github, img, link, summary, title, tech }, i) => (
              <motion.div key={link + i} className="col-span-12"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={i}
              >
                <FeaturedProjects
                  title={title}
                  img={img}
                  summary={summary}
                  link={link}
                  github={github}
                  tech={tech}
                  index={i}
                />
              </motion.div>
            )
          )}
        </div>
      </Layout>
    </section>
  );
};
