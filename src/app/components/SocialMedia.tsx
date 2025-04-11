import { Icons } from "@/assets/icons";
import { HoverButton } from "@/shared/components/hover-button"

interface SocialMedia {
  className?: string;
}

interface SocialMediaBtn {
  label: string;
  icon: keyof typeof Icons;
  link: string;
}

export const SocialMedia: React.FC<SocialMedia> = ({
  className = ''
}) => {

  const buttons: SocialMediaBtn[] = [
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
    <div className={`flex gap-2 ${className} `}>
      {
        buttons.map((item, i) => (
          <HoverButton 
            key={i}
            classColor={'gradient-color'}
            label={item.label}
            icon={item.icon}
            link={item.link}
            />
        ))
      }
    </div>
  )
}
