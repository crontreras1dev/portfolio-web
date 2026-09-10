import React, { useState } from 'react';
import { projects } from '../data/projects';
import GitHub from "../assets/icons/github.svg";

const ProjectCard = ({ project }) => {
  // console.log(project);
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <>
    

    <div className="max-w-sm shadow-lg bg-bg overflow-hidden border border-border rounded-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={ project.image } 
          alt={ project.name }
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* <span className="absolute top-3 right-3 bg-bg/50 text-text text-xs px-3 py-1 rounded-full">{ projects[0].status }</span> */}
      </div>

      <div className="text-center px-2 py-4 flex flex-col gap-2">
        <h3 className="text-text font-bold text-xl">{ project.name }</h3>

        <p className="text-text-secondary text-sm">{ project.description }</p>

        <div className="flex gap-2 justify-center">
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
              GitHub
            </a>
          </span>

          <a 
            href={ project.page } 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer bg-button-bg hover:bg-button-bg/50 transition-colors text-sm text-text px-4 py-1 rounded-lg"
            >
            Página
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;