import React, { useContext } from 'react';
import { TemaContext } from '../TemaContext';

const CambiarTema = () => {
    const { cambiarTema, temaOscuro } = useContext(TemaContext);

    return (
        <div>
            <button onClick={cambiarTema}>
                Cambiar a {temaOscuro ? 'Tema Claro' : 'Tema Oscuro'}
            </button>
        </div>
    );
};

export default CambiarTema;
