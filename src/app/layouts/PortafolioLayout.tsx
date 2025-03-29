import { Footer } from "@/app/components/Footer"
import Navbar from "@/app/components/navbar"
import { Home } from "../Home"
import { Projects } from "../Projects"
import { Skills } from "../Skills"
import Contact from "../Contact"

export const PortafolioLayout = () => {
  return (
    <>
        <Navbar/>
        <Home/>
        {/* <About/> */}
        <Projects/>
        <Skills />
        <Contact />
        <Footer />
    </>
  )
}
