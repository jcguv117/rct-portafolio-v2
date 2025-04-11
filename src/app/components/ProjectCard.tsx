import { Icons } from "@/assets/icons";
import { Project } from "@/interfaces/Project.interface";
import { Badge } from "@/shared/components/ui/badge";

interface ProjectCard extends Project {}

export const ProjectCard: React.FC<ProjectCard> = ({title, subtitle, description, image, tools}) => {

  return (
    <div className="flex relative h-full">
        {
        image &&
        <img
            alt={title}
            className={`absolute inset-0 w-full h-full z-20 text-left rounded-md animate-fade-in hover:animate-fade-out`}
            src={image}
            />
        }
        <div className="relative w-full h-full z-10 p-2">
        <div className="text-center text-xl font-medium">
            {title}
        </div>
        <div className="text-center tracking-widest text-sm font-medium text-primary mb-4">
            {subtitle}
        </div>
        <p className="leading-relaxed">{description}</p>
        <div className="flex flex-wrap justify-center my-2 gap-1">
            {
            tools.map( (tag: string) => {
                const tagName = tag.toLowerCase().replace(' ','');
                const Icon = Icons[tagName as keyof typeof Icons];
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
  )
}
