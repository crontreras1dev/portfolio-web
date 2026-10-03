import Profile from "./assets/profile.webp";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";
import SectionHeading from "./components/SectionHeading";
import GitHub from "./assets/icons/github.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
import { projects } from "./data/projects";
import { useLanguage } from "./i18n/LanguageContext";

const EMAIL = "crontreras1dev@gmail.com";

function App() {
  const { t } = useLanguage();

  const handleSendEmail = () => {
    const subject = encodeURIComponent(t("email.subject"));
    const body = encodeURIComponent(t("email.body"));

    window.location.href = `mailto:${ EMAIL }?subject=${ subject }&body=${ body }`;
  };

  return (
    <>
      <Navbar />

      <main id="top">
        <section className="md:flex md:justify-center">
          <div className="w-full lg:w-2/3 py-5 flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="p-4 flex flex-col gap-2 justify-center items-center md:w-1/3">
              <img 
                src={ Profile } 
                alt={ t("hero.imageAlt") } 
                width={ 252 } 
                height={ 252 } 
                className="rounded-full border-4 border-border shadow-lg shadow-border/50"
              />

              <div className="flex justify-center items-center py-5">
                <ul className="flex gap-4">
                  <li>
                    <a href="https://github.com/crontreras1dev" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                      <img src={ GitHub } alt="GitHub" className="w-4 h-4" />

                      <span className="text-text">GitHub</span>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/crontreras1dev/" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center">
                      <img src={ LinkedIn } alt="LinkedIn" className="w-4 h-4" />

                      <span className="text-text">LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-5 md:w-2/3 text-center">
              <h1 className="text-2xl font-bold md:text-3xl">{ t("hero.title") }</h1>

              <p className="text-text-secondary text-sm md:text-base text-center flex flex-col gap-2">
                {
                  t("hero.intro").map(paragraph => (
                    <span key={ paragraph }>{ paragraph }</span>
                  ))
                }
              </p>

              <div className="flex gap-2 justify-center items-center">
                <a
                  href="https://app.notion.com/p/Cristian-Contreras-Frontend-Developer-3ca0874829f780b28c16d8125ff5c89c?source=copy_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm md:text-base border border-border rounded-lg hover:bg-button-bg/50 transition-colors"
                >
                  { t("hero.cv") }
                </a>

                <button onClick={ handleSendEmail } className="bg-button-bg text-text px-4 py-2 text-sm md:text-base border border-border rounded hover:bg-button-bg/80 transition-colors cursor-pointer">{ t("hero.contact") }</button>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full flex flex-col justify-center items-center py-10">
          <div className="w-full lg:w-2/3 py-5 flex flex-col justify-center items-center gap-5">
            <SectionHeading title={ t("projects.title") } subtitle={ t("projects.subtitle") } />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {
                projects.map(project => (
                  <Reveal key={ project.id } className="h-full">
                    <ProjectCard project={ project } />
                  </Reveal>
                ))
              }
            </div>
          </div>
        </section>

        <Skills />

        <Experience />

        <Contact email={ EMAIL } onContact={ handleSendEmail } />
      </main>

      <footer className="border-t border-border my-5 py-5">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center items-center py-5">
            <ul className="flex gap-4">
              <li>
                <a href="https://github.com/crontreras1dev" target="_blank" rel="noopener noreferrer">
                  <img src={ GitHub } alt="GitHub" className="w-6 h-6" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/crontreras1dev/" target="_blank" rel="noopener noreferrer">
                  <img src={ LinkedIn } alt="LinkedIn" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          <p className="text-sm text-text-secondary">© { new Date().getFullYear() } crontreras1dev. { t("footer.rights") }</p>

          <p className="text-sm text-text-secondary">
            { t("footer.madeWith") }{ " " }
            <a href="https://github.com/crontreras1dev" target="_blank" rel="noopener noreferrer" className="hover:underline">crontreras1dev</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
