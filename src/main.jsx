import { createRoot } from 'react-dom/client'
{/* import './index.css'*/}
import App from './App.jsx'
import { Subtititulo ,Boton} from './App.jsx'
import Formulario from './Formulario.jsx'

createRoot(document.getElementById('root')).render(
  
     <>
    <App />
    <Subtititulo/>
    <Boton/>
    <Formulario></Formulario>


    </>
  
)
