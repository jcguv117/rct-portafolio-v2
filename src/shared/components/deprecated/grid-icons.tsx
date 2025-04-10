import { Icons } from "@/assets/icons";

interface Skills {
    name: string;
    icon: string;
}

export const GridIcons = ( {data}: { data: Skills[] }) => {

    const skills: Skills[] = data;

    return (
        <div className="w-full lg:w-1/2 px-4 mx-auto grid gap-2 grid-cols-2 sm:grid-cols-4">
        {
            skills.map( skill =>
            {
                const Icon = Icons[skill.icon as keyof typeof Icons];
                return (
                    <div key={skill.name} className="group m-2 border-2 border-cyan-500 hover:border-none rounded-lg select-none">
                        <div className="flex items-center justify-center w-full font-bold text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 group-hover:scale-110 group-hover:rotate-2 group-hover:bg-sky-900 group-hover:text-blue-200 group-hover:shadow-lg active:opacity-85 p-4 h-full">
                            <span className="title-font font-medium text-white">
                            { Icon && <Icon size={16} className="w-12 h-12" /> }
                            {/* <tool-tip role="tooltip">{skill.name}</tool-tip> */}
                            </span>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}