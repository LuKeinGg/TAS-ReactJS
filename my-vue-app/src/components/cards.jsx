import React from 'react';
import './cards.css';

const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default Card;
