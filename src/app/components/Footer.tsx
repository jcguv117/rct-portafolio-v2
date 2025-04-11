import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { i18n } = useTranslation()

  return (
    <div className="h-20 bg-transparent font-bold text-center">
        <hr className="h-[1px] mx-[10%] border border-gray-300 dark:border-gray-700" />
        <p className="pt-4 my-2">
            <span className="ml-2 text-primary">© {`${i18n.language === "es" ? "Portafolio" : "Portfolio"}`} 2025</span> <br/> 
        </p>
    </div>
  )
}
