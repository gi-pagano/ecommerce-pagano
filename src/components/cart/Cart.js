import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import MyForm from "../form/Form";

const Cart = () => {
    const { items, removeItem, emptyCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const totalSum = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const [show, setShow] = useState(false);

    const displayMyForm = () => {
        setShow(!show);
    }


    

    return (
        <div>
            <h2 className="cart-title">Tu carrito</h2>

            {items.length > 0 ? (
                <div className="cart-items">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}> ♠ {item.name} - $ {item.price} x {item.quantity} = $ {item.price * item.quantity} <button onClick={() => decreaseQuantity(item)}>-</button><button onClick={() => increaseQuantity(item)}>+</button><button onClick={() => removeItem(item)}>X</button></li>
                        ))}
                    </ul>
                    <h3>Total = $ {totalSum}</h3>

                    <button onClick={displayMyForm}>Finalizar compra</button>
                    <button onClick={emptyCart}>Vaciar carrito</button>
                    {show ? <MyForm /> : null}
                </div>
            ) : (
                <div className="cart-items">
                    <h3>No hay productos en el carrito</h3>
                    <Link to='/'><button>¡Quiero ver productos!</button></Link>
                </div>
                )
            }
        </div>
    );
};

export default Cart;
