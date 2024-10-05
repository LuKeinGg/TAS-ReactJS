import React, { createContext, useState } from 'react';

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {
    const [tema, setTema] = useState('claro'); // 'claro' como tema por defecto

    // Función para alternar entre el tema claro y oscuro
    const toggleTema = () => {
        setTema(tema === 'claro' ? 'oscuro' : 'claro');
    };

    return (
        <TemaContext.Provider value={{ tema, toggleTema }}>
            {children}
        </TemaContext.Provider>
    );
};

export default TemaProvider;
