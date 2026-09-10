import Profile from "./assets/profile.jpg";
import ProjectCard from "./compnents/ProjectCard";
import { projects } from "./data/projects";

function App() {
  // console.log(projects);
  return (
    <>
      <section className="flex flex-col md:flex-row gap-4 justify-center items-center text-center py-10">
        <div className="flex flex-col gap-2 justify-center items-center md:w-1/3">
          <img 
            src={ Profile } 
            alt="Kahbib" 
            width={ 200 } 
            height={ 200 } 
            className="rounded-full"
          />

          <ul className="">
            <li>Bogotá, Colombia</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 md:w-2/3">
          <h1 className="text-2xl font-bold md:text-3xl">Cristian Contreras - Desarrollador Web</h1>

          <p className="text-text-secondary">Desarrollador web con experiencia en el desarrollo de aplicaciones web. Me especializo en crear interfaces modernas y experiencias de usuario intuitivas. Actualmente trabajo con React, Node.js y bases de datos SQL.</p>

          <div className="flex gap-2 justify-center items-center">
            <a href="#" className="px-4 py-2 rounded hover:bg-button-bg/80 transition-colors">Conectemos</a>

            <a href="#" className="bg-button-bg text-text px-4 py-2 rounded hover:bg-button-bg/80 transition-colors">Ver Proyectos</a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold md:text-3xl text-center py-10">Proyectos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            projects.map(project => (
              <ProjectCard key={ project.id } project={ project } />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default App
