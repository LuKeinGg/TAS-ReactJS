import React, { useContext } from 'react';
import { IdiomaContext } from '../IdiomaContext';

const CambiarIdioma = () => {
    const { idioma, setIdioma, textos } = useContext(IdiomaContext);

    const handleChange = (e) => {
        setIdioma(e.target.value); // Cambiamos el idioma al seleccionar
    };

    return (
        <div>
            <label htmlFor="idioma-select">{textos[idioma].seleccionarIdioma}</label>
            <select id="idioma-select" value={idioma} onChange={handleChange}>
                <option value="es">Español</option>
                <option value="en">English</option>
            </select>
        </div>
    );
};

export default CambiarIdioma;

