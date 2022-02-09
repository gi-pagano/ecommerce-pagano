import React, { useState } from "react";

const ItemCounter = ({ stock }) => {
    const [counter, setCounter] = useState(1);

    const minus = () => {
        if (counter <= 1) return;
        setCounter(counter - 1);
        };

    const plus = () => {
        if (counter >= stock) return;
        setCounter(counter + 1);
    };

    return (
        <>
            <div className="counter">
                <button className="counter-btn" onClick={minus}>-</button>
                <span className="counter-txt">{counter}</span>
                <button className="counter-btn" onClick={plus}>+</button>
            </div>
        </>
    );
};

export default ItemCounter;