import { HoverButton } from "@/shared/components/hover-button";
import { useTranslation } from "react-i18next"

export const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="container text-center mx-auto my-4 font-bold">
      <h3 className="text-primary text-2xl sm:text-4xl">
        {t("Home.title")}
      </h3>
      <h1 className="text-primary text-4xl sm:text-6xl">Carlos Guevara</h1>
      <h2 className="text-primary text-3xl sm:text-5xl">
        {t("Home.subtitle")}
      </h2>
      <div className="my-4 flex justify-center">
          <a href="/Carlos Guevara CV (es).pdf" download={'Carlos Guevara CV.pdf'}>        
            <HoverButton 
                  classColor={'gradient-color'}
                  label={`${i18n.language === "es" ? "Descargar" : "Download"} CV`}
                  icon={'download'}
                  callback={() => null}
                  />
          </a>
      </div>
    </section>
  )
}
