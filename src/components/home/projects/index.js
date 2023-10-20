import { AnimatedText, Layout } from "@/components";
import FeaturedProjects from "./featured-projects";
import ProjectCard from "./project-card";
import { FEATURED_PROJECTS, PROJECTS } from "@/config/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-full mb-16 dark:text-light"
    >
      <Layout className="pt-16">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
        />

        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          {FEATURED_PROJECTS.map(
            ({ github, img, link, summary, title, type }, i) => (
              <div key={link + i} className="col-span-12">
                <FeaturedProjects
                  title={title}
                  img={img}
                  summary={summary}
                  link={link}
                  github={github}
                  type={type}
                />
              </div>
            )
          )}
          {PROJECTS.map(({ title, img, link, github, type }, i) => (
            <div key={link + i} className="col-span-6 sm:col-span-12">
              <ProjectCard
                title={title}
                img={img}
                link={link}
                github={github}
                type={type}
              />
            </div>
          ))}
        </div>
      </Layout>
    </section>
  );
};
