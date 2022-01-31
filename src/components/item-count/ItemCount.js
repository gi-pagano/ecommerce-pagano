import React, { useState } from "react";

const ItemCounter = ({ stock }) => {
    const [counter, setCounter] = useState(0);

    const minus = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
        };

    const plus = () => {
        if (counter >= stock) return;
        setCounter(counter + 1);
    };

    return (
        <>
            <button onClick={minus}>-</button>
            <span className="counter">{counter}</span>
            <button onClick={plus}>+</button>
        </>
    );
};

export default ItemCounter;