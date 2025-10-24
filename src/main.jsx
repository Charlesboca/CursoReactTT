import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Formulario from './Formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hr />
    <Formulario />
  </StrictMode>,
)
