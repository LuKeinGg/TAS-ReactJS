import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="container">
            <h1>Contador: {count}</h1>
            <div className="buttons-container">
                <button onClick={increment}>Incrementar</button>
                <button onClick={decrement}>Decrementar</button>
            </div>
        </div>
    );
};

export default Counter;
