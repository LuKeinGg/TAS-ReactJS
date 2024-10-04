import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const MostrarUsuario = () => {
    const { nombreUsuario } = useContext(UserContext);

    return (
        <div>
            <h2>Nombre de usuario: {nombreUsuario}</h2>
        </div>
    );
};

export default MostrarUsuario;
