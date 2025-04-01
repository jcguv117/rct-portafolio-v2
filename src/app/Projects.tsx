import SpotlightCard from "@/shared/components/spotlight-card"
import { Badge } from "@/shared/components/ui/badge"
import { Icons } from "@/assets/icons";
import data from "@/data/projects.json"
import { useState } from "react";
import { ControlButton } from "./components/ControlButton";

export const Projects = () => {

  const projects: any = data;
  const [visible, setVisible] = useState(Array(projects.length).fill(true));

  return (
    <section id="projects" className="container mx-auto text-gray-400 body-font pt-[10rem] pb-[10rem]">
      <div>
          <h1 className="text-center md:text-4xl text-2xl font-medium title-font mb-4 text-white">
            Aplicaciones que he construido
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 m-4 gap-2">
            {projects.map((project:any, index: number) => (
              <div key={index}>

                <SpotlightCard 
                  className="p-4 my-8 w-full h-96"
                  key={index}
                  >  
                    <div className="flex relative h-full">
                      {
                        project.image &&
                        <img
                        id={"img_prj_" + index}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full z-20 text-left rounded-md animate-fade-in hover:animate-fade-out
                          ${visible[index] ? 'block' : 'hidden'}`}
                          src={project.image}
                          />
                      }
                      <div className="relative w-full h-full z-10 p-2">
                        <h1 className="text-center text-xl font-medium text-white">
                          {project.title}
                        </h1>
                        <h2 className="text-center tracking-widest text-sm font-medium text-cyan-500 mb-4">
                          {project.subtitle}
                        </h2>
                        <p className="leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap justify-center my-2 text-white gap-1">
                          {
                            project.tools.map( (tag:any) => {
                                const Icon = Icons[tag.toLowerCase() as keyof typeof Icons];
                                return (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="flex shrink-0 items-center justify-center gap-2 px-2 py-1 font-medium"
                                    >
                                    { Icon && <Icon size={16} className="w-4 h-4" /> }
                                    <span className="ml:text-sm text-accent-foreground">{tag}</span>
                                  </Badge>
                                )
                            })
                          }
                        </div>
                      </div>
                    </div>
                </SpotlightCard>
                  <div className="flex justify-center flex-wrap gap-4 py-2 z-[100]">
                      {
                        <>
                          <ControlButton icon='github' url={project.github} tooltip="Ir a repositorio" />
                          <ControlButton icon='globe' url={project.website} tooltip="Visitar Sitio Web" />
                        </>
                      }
                  </div>
              </div>
            ))}
          </div> 
 

      </div>
    </section>
  )
}
