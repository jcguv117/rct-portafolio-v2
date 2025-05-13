import { Footer } from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import { Home } from "../Home"
import { Projects } from "../Projects"
import { Skills } from "../Skills"
// import Contact from "../Contact"
import { About } from "../About"
import { SocialMedia } from "../components/SocialMedia"

export const PortafolioLayout = () => {
  return (
    <>
        <Navbar/>
        <SocialMedia className={'flex-col fixed bottom-5 z-50 ml-4'} />
        <div className="min-h-screen flex flex-col justify-center">
          <Home/>
          <Skills />
        </div>
        <About/>
        <Projects/>
        <Footer />
    </>
  )
}
