import React, { createContext, useState } from 'react';

export const IdiomaContext = createContext();

const IdiomaProvider = ({ children }) => {
    const [idioma, setIdioma] = useState('es'); // Estado para el idioma actual ('es' por defecto)

    // Defino los textos en ambos idiomas
    const textos = {
        es: {
            saludo: 'Bienvenido',
            temaActual: 'Tema actual',
            cambiarTema: 'Cambiar tema',
            seleccionarIdioma: 'Seleccionar idioma'
        },
        en: {
            saludo: 'Welcome',
            temaActual: 'Current Theme',
            cambiarTema: 'Change theme',
            seleccionarIdioma: 'Select language'
        }
    };

    return (
        <IdiomaContext.Provider value={{ idioma, setIdioma, textos }}>
            {children}
        </IdiomaContext.Provider>
    );
};

export default IdiomaProvider;
