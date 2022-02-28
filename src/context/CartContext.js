import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = item => {
        if (items.find(i => i.id === item.id)) {
            return
        } else {
        setItems([...items, item]);
        };
    };

    const totalSum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const removeItem = item => {
        const newItems = items.filter(i => i.id !== item.id);
        setItems(newItems);
    };

    const emptyCart = () => {
        setItems([]);
    };

    const increaseQuantity = item => {
        const newItems = items.map(i => {
            if ((i.id === item.id) && (i.quantity < item.stock)) {
                return { ...i, quantity: i.quantity + 1 };
            }
            return i;
        });
        setItems(newItems);
    };

    const decreaseQuantity = item => {
        const newItems = items.map(i => {
            if ((i.id === item.id) && (i.quantity > 1)) {
                return { ...i, quantity: i.quantity - 1 };
            }
            return i;
        });
        setItems(newItems);
    };


    return (
        <CartContext.Provider value={{ items, addItem, removeItem, emptyCart, increaseQuantity, decreaseQuantity, totalSum }}> { children } </CartContext.Provider>
    );
}