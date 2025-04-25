import { HoverButton } from "@/shared/components/hover-button";
import { useTranslation } from "react-i18next"

export const Home = () => {
  const { t, i18n } = useTranslation();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = `/resources/Carlos Guevara CV (${i18n.language === "es" ? "es" : "en"}).pdf`;
    link.download = 'Carlos Guevara CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <HoverButton 
          classColor={'gradient-color'}
          label={`${i18n.language === "es" ? "Descargar" : "Download"} CV`}
          icon={'download'}
          callback={downloadCV}
        />
      </div>
    </section>
  )
}
