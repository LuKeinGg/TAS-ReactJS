import React from 'react';
import './cards.css';

function Card(props) {
    return (
        <div className="card">
            <h2 className="card-title">{props.titulo}</h2>
            <p className="card-description">{props.descripcion}</p>
            <p className="card-persona">Asignado a: {props.persona}</p>
            <p className="card-fecha">Fecha de inicio: {props.fechaInicio}</p>
            <p className="card-fecha">Fecha de fin: {props.fechaFin}</p>
        </div>
    );
}

export default Card;
