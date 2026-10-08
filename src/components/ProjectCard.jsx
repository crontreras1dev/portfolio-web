import { useLanguage } from "../i18n/LanguageContext";

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M256 6.3C114.6 6.3 0 120.9 0 262.3c0 113.3 73.3 209 175 242.9 12.8 2.2 17.6-5.4 17.6-12.2 0-6.1-.3-26.2-.3-47.7-64.3 11.8-81-15.7-86.1-30.1-2.9-7.4-15.4-30.1-26.2-36.2-9-4.8-21.8-16.6-.3-17 20.2-.3 34.6 18.6 39.4 26.2 23 38.7 59.8 27.8 74.6 21.1 2.2-16.6 9-27.8 16.3-34.2-57-6.4-116.5-28.5-116.5-126.4 0-27.8 9.9-50.9 26.2-68.8-2.6-6.4-11.5-32.6 2.6-67.8 0 0 21.4-6.7 70.4 26.2 20.5-5.8 42.2-8.6 64-8.6s43.5 2.9 64 8.6c49-33.3 70.4-26.2 70.4-26.2 14.1 35.2 5.1 61.4 2.6 67.8 16.3 17.9 26.2 40.6 26.2 68.8 0 98.2-59.8 120-116.8 126.4 9.3 8 17.3 23.4 17.3 47.4 0 34.2-.3 61.8-.3 70.4 0 6.7 4.8 14.7 17.6 12.2C438.7 471.3 512 375.3 512 262.3c0-141.4-114.6-256-256-256" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const { t, localize } = useLanguage();
  const name = localize(project.name);

  return (
    <article className="group h-full flex flex-col border border-border rounded-lg bg-bg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-text-secondary/50 hover:shadow-xl">
      <div className="relative aspect-video w-full overflow-hidden">
        <img 
          src={ project.image } 
          alt={ name }
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 p-4 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-text">
          <a 
            href={ project.page } 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            { name }
          </a>
        </h3>

        <p className="text-sm text-text-secondary line-clamp-3">{ localize(project.description) }</p>

        <ul className="flex flex-wrap gap-2">
          {
            project.tools.map(tool => (
              <li key={ tool } className="text-xs px-2 py-0.5 rounded-full border border-border text-text-secondary">
                { tool }
              </li>
            ))
          }
        </ul>

        <div className="mt-auto pt-3 border-t border-border flex gap-4">
          <a 
            href={ project.github } 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={ `${ t("projects.repository") }: ${ name }` }
            title={ t("projects.repository") }
            className="text-text-secondary hover:text-text transition-colors"
          >
            <GitHubIcon />
          </a>

          <a 
            href={ project.page } 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={ `${ t("projects.live") }: ${ name }` }
            title={ t("projects.live") }
            className="text-text-secondary hover:text-text transition-colors"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
