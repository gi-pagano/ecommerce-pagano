import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { items, removeItem, emptyCart, increaseQuantity, decreaseQuantity, totalSum } = useContext(CartContext);

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

                    <Link to= '/form'> <button>Finalizar compra</button> </Link>
                    <button onClick={emptyCart}>Vaciar carrito</button>
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
