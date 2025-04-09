import { useTranslation } from "react-i18next"
import { SocialMedia } from "./components/SocialMedia";

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="container text-center mx-auto my-4 font-bold">
      <h3 className="text-primary text-2xl sm:text-4xl">
        {t("Home.title")}
      </h3>
      <h1 className="text-primary text-4xl sm:text-6xl">Carlos Guevara</h1>
      <h2 className="text-primary text-3xl sm:text-5xl">
        {t("Home.subtitle")}
      </h2>
      <div className="m-4 pt-2">
            <a href="" target="_blank" rel="noreferrer"
              className="bg-sky-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-full cursor-pointer">
              Ver CV
            </a>
            <SocialMedia />
      </div>
    </section>
  )
}
