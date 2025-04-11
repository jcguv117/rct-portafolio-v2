import { Icons } from "@/assets/icons";
import data from "@/data/skils.json"
import IconWall from "@/shared/components/icon-wall";

interface Skills {
    name: string;
    icon: string;
}

export const Skills = () => {
    const SkilsData = data.map((skill: Skills) => {
        const Icon = skill.icon ? Icons[skill.icon as keyof typeof Icons] : undefined;
        return {
            component: Icon ? <Icon size={40} className="size-10" /> : null,
            altText: `${skill.name} Icon`
        }
    })

  return (
    <section id="skills" className="container mx-auto my-4">
        <IconWall items={SkilsData} size="clamp(8rem, 1rem + 10vmin, 20rem)" bgAccentColor="var(--color-primary)" />
    </section>
  )
}



