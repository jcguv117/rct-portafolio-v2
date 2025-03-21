import { useTranslation } from "react-i18next"

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="container text-center mx-auto my-4 mt-0 pt-[15rem] pb-[20rem] font-bold">
      <h3 className="text-cyan-500 text-2xl sm:text-4xl">
        {t("Home.title")}
      </h3>
      <h1 className="text-zinc-100 text-4xl sm:text-6xl">Carlos Guevara</h1>
      <h2 className="text-zinc-300 text-3xl sm:text-5xl">
        {t("Home.subtitle")}
      </h2>
      <div className="m-4 pt-[4rem]">
            <a href="" target="_blank" rel="noreferrer"
              className="bg-sky-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-full cursor-pointer">
              Ver CV
            </a>
      </div>
    </section>
  )
}
