import { baseURL, driveURL } from "@/config/config-url";
import { HoverButton } from "@/shared/components/hover-button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"

export const Home = () => {
  const { t, i18n } = useTranslation();

  const [dataFile, setDataFile] = useState<any>({})

  useEffect(() => {
      fetch(`${baseURL}/files.json`)
      .then((res) => res.json())
      .then((json) => setDataFile(json))
      .catch((err) => console.error("Error loading data files:", err))
  }, [])

  const downloadCV = () => {
    const link = document.createElement('a');
    const lang = i18n.language === "es" ? "es" : "en";
    const idFile = dataFile ? dataFile[lang] : null;
    if(idFile) {
        link.href = `${driveURL}&id=${idFile}`
        link.download = 'Carlos Guevara CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        console.error("file not found.")
    }
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
