import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="container mx-auto my-4 py-[15rem]">
      <div className="container px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="ml-4 col-span-1">
          <div>
            <span className="text-2xl text-cyan-600 font-bold">{t('About.profileTitle')}</span>
            <p className="text-gray-300 mb-5 text-xl text-justify"> 
              {t('About.profileText')}
            </p>
            
          </div>
        </div>

      </div>
    </section>
  )
}
