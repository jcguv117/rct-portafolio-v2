import { Moon } from "@/assets/icons/moon";
import { Sun } from "@/assets/icons/sun";
import { useTheme } from "@/providers/theme-provider";
import { useLanguage } from "@/providers/lang-provider";

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const { language, toggleLanguage } = useLanguage()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky w-full top-0 z-50 flex flex-wrap items-center justify-between px-2 py-2 gradient-color">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 p-2 whitespace-nowrap uppercase text-white no-underline"
              href="#home">
              CARLOS GUEVARA
            </a>
            <div className="flex lg:hidden">
                <button 
                    className="text-white flex items-center cursor-pointer text-xl leading-none mx-2 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
                    type="button"
                    onClick={toggleTheme}
                    >
                      <Sun className="fill-white dark:-rotate-90 h-[1.2rem] w-[2rem] rotate-0 scale-100 transition-all dark:scale-0" />
                      <Moon className="fill-white absolute h-[1.2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </button>
                <button 
                    className="text-white hover:underline cursor-pointer text-sm leading-none mx-2 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                    type="button"
                    onClick={toggleLanguage}
                    >
                        {language === "es" ? "ES" : "EN"}
                </button>
                {/* <button 
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button" 
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <Bars className="" />
                </button> */}
            </div>
          </div>

          {/* <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mb-4">
              <li className="nav-item">
                <a className="px-3 mt-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 no-underline" href="#about">
                  <span className="ml-2">SOBRE MI</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 mt-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 no-underline" href="#projects">
                  <span className="ml-2">PROYECTOS</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 mt-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 no-underline" href="#skills">
                  <span className="ml-2">HABILIDADES</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="px-3 mt-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 no-underline" href="#contact">
                  <span className="ml-2">CONTACTO</span>
                </a>
              </li>
            </ul>
          </div> */}

          <div className="hidden lg:flex">
                <button 
                    className="text-white flex cursor-pointer text-xl leading-none mx-2 py-1 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
                    type="button"
                    onClick={toggleTheme}
                    >
                      <Sun className="fill-white dark:-rotate-90 h-[1.2rem] w-[2rem] rotate-0 scale-100 transition-all dark:scale-0" />
                      <Moon className="fill-white absolute h-[1.2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </button>
                <button 
                    className="text-white hover:underline cursor-pointer text-sm leading-none mx-2 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
                    type="button"
                    onClick={toggleLanguage}
                    >
                        {language === "es" ? "ES" : "EN"}
                </button>
          </div>
        </div>
      </nav>
    </>
  );
}