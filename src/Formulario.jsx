import { useState } from 'react';

function Formulario() {
    const [nombre, setNombre] = useState(''); // Variable de estado "nombre"

const manejarCambio = (e) => {
    setNombre(e.target.value); // Actualiza el estado con el valor del input

};

return (

<div>
    <input
    type="text"
    value={nombre}
    onChange={manejarCambio}
    placeholder="Escribe tu nombre"
    />

<p>¡Hola, {nombre || 'Anónimo'}!</p>

</div>

);
}

export default Formulario;  