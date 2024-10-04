import React, { createContext, useState } from 'react';

export const UserContext = createContext();

// Creo el proveedor del contexto que almacenará el nombre del usuario
export const UserProvider = ({ children }) => {
    const [nombreUsuario, setNombreUsuario] = useState('Matias Alves');

    // Función para actualizar el nombre del usuario
    const cambiarNombreUsuario = (nuevoNombre) => {
        setNombreUsuario(nuevoNombre);
    };

    return (
        <UserContext.Provider value={{ nombreUsuario, cambiarNombreUsuario }}>
            {children}
        </UserContext.Provider>
    );
};

