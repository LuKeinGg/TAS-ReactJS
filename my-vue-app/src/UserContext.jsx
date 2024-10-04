import React, { createContext, useState } from 'react';

export const UserContext = createContext();

// Creo el proveedor del contexto que almacenará el nombre del usuario
export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('Juan Pérez'); // Valor inicial del nombre del usuario

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};
