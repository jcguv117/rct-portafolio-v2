import SpotlightCard from "@/shared/components/spotlight-card"
import { Badge } from "@/shared/components/ui/badge"
import { Icons } from "@/assets/icons";

export const Projects = () => {

  const tags: Array<keyof typeof Icons> = ['node', 'react'];

  return (
    <section>
        <SpotlightCard>
            <div className=''>
            <article>

        <div className="flex flex-col gap-2 px-4 pt-4 pb-6">

          <p className="mb-2 ml:text-lg text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia dolorum, ipsam illo aut ipsa ex repellat placeat, enim cupiditate, voluptatibus ullam voluptates quod. Labore autem consequatur aut distinctio laboriosam.</p>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map(tag => {
              const Icon = Icons[tag];
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
            })}
          </div>
        </div>
      </article>
            </div>
        </SpotlightCard>
    </section>
  )
}
