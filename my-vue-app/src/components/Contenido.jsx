import React, { useContext } from 'react';
import { TemaContext } from '../TemaContext';
import './Contenido.css';

const Contenido = () => {
    const { temaOscuro } = useContext(TemaContext);

    return (
        <div className={temaOscuro ? 'contenedor oscuro' : 'contenedor claro'}>
            <h1>{temaOscuro ? 'Tema Oscuro' : 'Tema Claro'}</h1>
            <p>Este es un ejemplo de cómo cambiar el estilo usando un contexto.</p>
        </div>
    );
};

export default Contenido;

