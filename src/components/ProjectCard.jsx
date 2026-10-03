import GitHub from "../assets/icons/github.svg";
import { useLanguage } from "../i18n/LanguageContext";

const ProjectCard = ({ project }) => {
  const { t, localize } = useLanguage();
  const name = localize(project.name);

  return (
    <div className="h-full flex flex-col shadow-lg bg-bg overflow-hidden border border-border rounded-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={ project.image } 
          alt={ name }
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex-1 text-center px-2 py-4 flex flex-col justify-evenly gap-2">
        <h3 className="text-text font-bold text-xl">{ name }</h3>

        <p className="text-text-secondary text-sm">{ localize(project.description) }</p>

        <div className="flex flex-wrap gap-2 justify-center">
          {
            project.tools.map(tool => (
              <span key={ tool } className="text-text-secondary text-sm font-bold">
                { tool }
              </span>
            ))
          }
        </div>

        <div className="flex gap-8 p-2 justify-center">
          <span className="flex items-center gap-2">
            <img src={ GitHub } alt="GitHub" className="w-4 h-4" />

            <a 
              href={ project.github } 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline text-sm text-text"
            >
              { t("projects.repository") }
            </a>
          </span>

          <a 
            href={ project.page } 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer bg-button-bg hover:bg-button-bg/50 transition-colors text-sm text-text px-4 py-1 rounded-lg"
            >
            { t("projects.live") }
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
