import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (currentItem) => {
        if (cart.some(({ item }) => item.id === currentItem.item.id)) return;
        setCart([...cart, currentItem]);
    };

    return (
        <CartContext.Provider value={ { cart, addToCart } }> { children } </CartContext.Provider>
    );
}