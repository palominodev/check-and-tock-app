import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthRouter } from './routes/AuthRouter.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthRouter />
    </ThemeProvider>
    </React.StrictMode>
  </BrowserRouter>
)
