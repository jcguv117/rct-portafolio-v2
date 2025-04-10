import RotatingText from "@/shared/components/rotating-text";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  const rotatingTexts: string[] = t("About.rotatingTexts", {
    returnObjects: true,
  }) as unknown as string[]

  return (
    <section id="about" className="container mx-auto">
      <div className="container px-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="ml-4 col-span-1">
          <div>
            <span className="text-2xl text-primary font-bold">
              {t('About.profileTitle')}
            </span>
            <p className="mb-5 text-xl text-justify"> 
              {t('About.profileText')}
            </p>
            <RotatingText 
              texts={rotatingTexts}
              mainClassName="inline-flex dark:bg-white bg-[hsl(0-0%-98%)] px-1 ml-2 rounded-sm"
              elementLevelClassName="dark:text-black text-white font-bold"
              />
          </div>
        </div>
        <div className="flex justify-center">
          <img className="rounded-full" src="/images/profile.jpg"/>
        </div>
      </div>
    </section>
  )
}
