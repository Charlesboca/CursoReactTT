import { useState } from 'react'
function Formulario() {
    const [nombre, setNombre] = useState('')
    const manejarCambio = (evento) => {
        setNombre(evento.target.value); //actualiza el estado con el valor del input
    };
    return (
        <div>
            <input
                type='text'
                value={nombre}
                onChange={manejarCambio}
                placeholder='Escribe tu nombre por favor'
            />
            <p> Hola {nombre || 'Anónimo'} </p>
        </div>
    )
}
export default Formulario;