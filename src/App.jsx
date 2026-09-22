import Profile from "./assets/profile.png";
import ProjectCard from "./compnents/ProjectCard";
import GitHub from "../src/assets/icons/github.svg";
import LinkedIn from "../src/assets/icons/linkedin.svg";
import { projects } from "./data/projects";

function App() {
  const handleSendEmail = () => {
    const subject = encodeURIComponent("Hola, acabo de ver tu portafolio web");
    const body = encodeURIComponent("Hola, me gustaría contactar contigo para...");

    window.location.href = `mailto:crontreras1dev@gmail.com?subject=${ subject }&body=${ body }`;
  };

  return (
    <>
      <header className="flex justify-between items-center p-5">
        <p className="text-3xl font-bold text-text-secondary">Cr1</p>
      </header>

      <section className="md:flex md:justify-center">
        <div className="w-full lg:w-2/3 py-5 flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="p-4 flex flex-col gap-2 justify-center items-center md:w-1/3">
            <img 
              src={ Profile } 
              alt="cristian contreras" 
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
            <h1 className="text-2xl font-bold md:text-3xl">Cristian Contreras - Desarrollador front-end</h1>

            <p className="text-text-secondary text-sm md:text-base text-center flex flex-col gap-2">
              <span>
                ¡Hola! Soy Desarrollador Front-end en proceso de convertirse en Full-Stack.<br />
              </span>

              <span>
                Transformo ideas en productos web completos, fluidos y bien construidos de principio a fin, pero especializado en Front.end. Mi stack principal se mueve entre React.js, Astro.js y Tailwincss 4; luego Supabase, TypeScript y/o Sass, entre otros dependiendo del proyecto en el que esté trabajando. Continuamente estoy aprendiendo nuevas habilidades.<br />
              </span>

              <span>
                Concibo el código como una herramienta para resolver problemas reales.
              </span>
            </p>

            <div className="flex gap-2 justify-center items-center">
              <div className="flex gap-2 items-center px-4 py-2 text-sm md:text-base border cursor-pointer border-border rounded-lg">         
                <a href="https://app.notion.com/p/Cristian-Contreras-Frontend-Developer-3ca0874829f780b28c16d8125ff5c89c?source=copy_link" target="_blank" rel="noopener noreferrer">CV</a>
              </div>

              <button onClick={ handleSendEmail } className="bg-button-bg text-text px-4 py-2 text-sm md:text-base border border-border rounded hover:bg-button-bg/80 transition-colors cursor-pointer">Contactemos</button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center py-10">
        <div className="w-full lg:w-2/3 py-5 flex flex-col justify-center items-center gap-5">
          <div className="w-full flex flex-col gap-0 py-10">
            <h2 className="text-1xl font-bold md:text-2xl">Proyectos</h2>

            <p className="text-sm md:text-base text-text-secondary">Algunos de los proyectos en los que he trabajado</p>
          </div>

          <div className="flex flex-wrap gap-10">
            {
              projects.map(project => (
                <ProjectCard key={ project.id } project={ project } />
              ))
            }
          </div>
        </div>
      </section>

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

          <p className="text-sm text-text-secondary">© 2026 crontreras1dev. Todos los derechos reservados.</p>

          <p className="text-sm text-text-secondary">Hecho con 💙 por <a>crontreras1dev</a></p>
        </div>
      </footer>
    </>
  )
}

export default App
