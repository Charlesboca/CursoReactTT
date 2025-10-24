import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Formulario.jsx'

function App(){

const [contador, setContador]= useState(0) // Variable d

return (
<> 
  <h1>Vite + React</h1>
  <div className="card">
  <button onClick={() => setContador((contador) => contador + 1)}>Suma
    </button>
    <button onClick={() => setContador((contador) => contador - 1)}>Resta
    </button>

  </div>
  <div>Total: {contador}</div>

  <hr />
  <button onClick={() => setContador(0)}>Borrar</button>
</>
)}
export default App
