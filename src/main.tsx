import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './providers/theme-provider.tsx'

import './config/i18n.ts'
import { LangProvider } from './providers/lang-provider.tsx'
import { PortafolioLayout } from './app/layouts/PortafolioLayout.tsx'


import i18n from 'i18next'
i18n.on('initialized', () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <LangProvider>
          <PortafolioLayout/>
        </LangProvider>
      </ThemeProvider>
    </StrictMode>,
  );
})
