import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'; // Importamos el Provider
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/** Envolvemos la App con el Provider */}
      <App />
    </HelmetProvider>
  </StrictMode>,
)
