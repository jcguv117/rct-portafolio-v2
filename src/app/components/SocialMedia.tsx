import { Icons } from "@/assets/icons";
import { FloatButton } from "@/shared/components/float-button"

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
