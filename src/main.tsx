import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { Home } from './app/Home.tsx'

import './config/i18n.ts'
import { LangProvider } from './providers/lang-provider.tsx'
import { About } from './app/About.tsx'
import { Projects } from './app/Projects.tsx'
import { Skills } from './app/Skills.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LangProvider>
        <Home/>
        {/* <About/> */}
        <Projects/>
        <Skills />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
)
