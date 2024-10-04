import React, { createContext, useState } from 'react';

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
    // Estado que manejará si el tema es oscuro o claro
    const [temaOscuro, setTemaOscuro] = useState(false);

    // Función para alternar entre los temas
    const cambiarTema = () => {
        setTemaOscuro(!temaOscuro);
    };

    return (
        <TemaContext.Provider value={{ temaOscuro, cambiarTema }}>
            {children}
        </TemaContext.Provider>
    );
};
