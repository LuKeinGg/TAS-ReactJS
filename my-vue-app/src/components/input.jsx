import React, { useState } from 'react';

const Input = () => {
    // Define un estado para almacenar el texto del input
    const [inputValue, setInputValue] = useState('');

    // Función para actualizar el estado con el valor ingresado
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            {/* Input donde el usuario escribe */}
            <input
                type="text"
                placeholder="Escribe algo..."
                value={inputValue}
                onChange={handleChange} // Actualiza el estado cuando el valor cambia
            />

            {/* Párrafo que muestra lo que el usuario va escribiendo */}
            <p>Has escrito: {inputValue}</p>
        </div>
    );
}

export default Input;
