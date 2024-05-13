import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthRouter } from './routes/AuthRouter.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthRouter />
    </React.StrictMode>
  </BrowserRouter>
)
