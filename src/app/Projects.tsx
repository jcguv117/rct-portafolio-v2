import SpotlightCard from "@/shared/components/spotlight-card"
import { ControlButton } from "./components/ControlButton";
import { useTranslation } from "react-i18next";
import { Project } from "@/interfaces/Project.interface";
import { ProjectCard } from "./components/ProjectCard";

export const Projects = () => {

  const { t, i18n } = useTranslation()
  const projects: Project[] = t("Projects.data", {
    returnObjects: true,
  }) as Project[]
  

  return (
    <section id="projects" className="container mx-auto body-font">
      <div>
          <h1 className="text-center text-primary md:text-4xl text-2xl font-medium title-font mb-4">
            { t("Projects.title") }
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 m-4 gap-2">
            {projects.map((project: Project, index: number) => (
              <div key={index}>
                <SpotlightCard 
                  className="p-4 my-8 w-full h-96"
                  key={index}
                  >  
                  <ProjectCard {...project} />
                </SpotlightCard>
                <div className="flex justify-center flex-wrap gap-4 py-2 z-[100]">
                    {
                      <>
                        <ControlButton icon='github' url={project.github} tooltip={`${i18n.language === "es" ? "Ir a repositorio" : "Open repository"}`} />
                        <ControlButton icon='globe' url={project.website} tooltip={`${i18n.language === "es" ? "Visitar Sitio Web" : "Open WebSite"}`} />
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
