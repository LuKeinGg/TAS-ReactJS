import React, { useContext } from 'react';
import { TemaContext } from '../TemaContext';

const CambiarTema = () => {
    const { toggleTema } = useContext(TemaContext);

    return (
        <button onClick={toggleTema}>
            Cambiar tema
        </button>
    );
};

export default CambiarTema;
