import React, { useContext } from 'react';
import { IdiomaContext } from '../IdiomaContext';

const MostrarIdioma = () => {
    const { idioma, textos } = useContext(IdiomaContext);

    return (
        <div>
            <h2>{textos[idioma].saludo}</h2>
        </div>
    );
};

export default MostrarIdioma;
