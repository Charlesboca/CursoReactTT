import './App.css'
import { MiBoton } from './Miboton.jsx'
import Tarjeta from './Tarjeta.jsx'
import ListaFrutas from './ListaFrutas.jsx'



function App() {

  return (
    <>
    <h1 className="titulo">Comenzando con React Js</h1>

    <h2>Ejercicios Clase 2</h2> 
        <h2 >Lista de frutas</h2> 
        <ListaFrutas frutas={['Manzana', 'Banana','Durazno','Kiwi']} />
        <hr />
      <div>
        <Tarjeta
        titulo="Oferta especial"
        descripcion="20% de descuentos en todos los productos"
        botonTexto="Ver mas"
        />

        <Tarjeta
        titulo=" Nuevo Producto"
        descripcion="Descuento en compras superiores "
        botonTexto="Aprovechar "
        />

          <Tarjeta
        titulo="  Producto Legacy"
        descripcion="Descuento comprando mas de una unidad "
        botonTexto="Compra "
        />

    </div>
    <hr />
    <h2>Botones Personalizados</h2>

    <MiBoton texto="Aceptar" color = "Green"></MiBoton>
    <MiBoton texto="Cancelar" color = "Red"></MiBoton>
    <MiBoton texto="Mas informacion" color = "grey"></MiBoton>



   </>
  )
}

export default App

function Subtititulo() {
  
  return (
    <>
    <hr />
    <h2>Talent tech</h2>

   </>
  )
}  
export {Subtititulo}

function Boton () {

  return (

<button onClick={() => alert("Hola Mundo")}>Click</button>
   
  )
  
}

export {Boton}
