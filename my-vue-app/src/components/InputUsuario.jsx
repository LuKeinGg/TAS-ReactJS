import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const InputUsuario = () => {
    const { cambiarNombreUsuario } = useContext(UserContext);

    const handleInputChange = (event) => {
        cambiarNombreUsuario(event.target.value); // Actualizar el valor en el contexto
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Escribe tu nombre..."
                onChange={handleInputChange}
            />
        </div>
    );
};

export default InputUsuario;
