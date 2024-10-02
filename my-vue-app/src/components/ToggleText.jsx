import React, { useState } from 'react';
import './ToggleText.css';

const ToggleText = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const toggleText = () => {
        setIsTextVisible(!isTextVisible);
    };

    return (
        <div className="toggle-container">
            <button onClick={toggleText}>
                {isTextVisible ? 'Ocultar Texto' : 'Mostrar Texto'}
            </button>
            {/* Texto que aparece y desaparece */}
            {isTextVisible && <p>¡Este es el texto que aparece y desaparece!</p>}
        </div>
    );
}

export default ToggleText;