import { Icons } from "@/assets/icons";
import { FloatButton } from "@/shared/components/float-button"

interface SocialMedia {
  label: string;
  icon: keyof typeof Icons;
  link: string;
}

export const SocialMedia = () => {

  const buttons: SocialMedia[] = [
    {
      label: "GitHub",
      icon: "github",
      link: "https://github.com/jcguv117/"
    },
    {
      label: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/jcarlos-guevara-42044320b/"
    },
  ]

  return (
    <div className="flex flex-row-reverse gap-2">
      {
        buttons.map((item, i) => (
          <FloatButton 
            key={i}
            classColor={'bg-gradient-to-r from-cyan-500 to-blue-500'}
            label={item.label}
            icon={item.icon}
            link={item.link}
            />
        ))
      }
    </div>
  )
}
