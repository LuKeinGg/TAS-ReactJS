import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);

        // Limpieza del intervalo cuando el componente se desmonte
        return () => {
            clearInterval(intervalId);
        };

    }, []); // El array vacío hace que esto solo ocurra una vez cuando el componente se monta

    return (
        <div className="timer-container">
            <h1>Temporizador: {time} segundos</h1>
        </div>
    );
}

export default Timer;