import React, { useContext } from 'react';
import { TemaContext } from '../TemaContext';
import { IdiomaContext } from '../IdiomaContext';

const MostrarTema = () => {
    const { tema } = useContext(TemaContext);
    const { idioma } = useContext(IdiomaContext);

    const textos = {
        es: {
            temaActual: 'Tema actual: ',
            claro: 'claro',
            oscuro: 'oscuro',
        },
        en: {
            temaActual: 'Current theme: ',
            claro: 'light',
            oscuro: 'dark',
        },
    };

    return (
        <h2>
            {textos[idioma].temaActual} {textos[idioma][tema]}
        </h2>
    );
};

export default MostrarTema;

