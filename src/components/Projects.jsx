import { projects } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="w-full flex flex-col justify-center items-center py-10">
      <Reveal className="w-full lg:w-2/3 py-5 flex flex-col justify-center gap-5">
        <SectionHeading title={ t("projects.title") } subtitle={ t("projects.subtitle") } />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            projects.map(project => (
              <ProjectCard key={ project.id } project={ project } />
            ))
          }
        </div>
      </Reveal>
    </section>
  );
};

export default Projects;
