import { Footer } from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"
import { Home } from "../Home"
import { Projects } from "../Projects"
import { Skills } from "../Skills"
import Contact from "../Contact"
import { About } from "../About"

export const PortafolioLayout = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills />
        <Contact />
        <Footer />
    </>
  )
}
