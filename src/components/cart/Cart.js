import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';


const Cart = () => {
    const { items, removeItem, emptyCart, increaseQuantity, decreaseQuantity, totalSum } = useContext(CartContext);


    return (
        <div className="cart-layout">
            {items.length > 0 ? (
                <div className="cart-container">
                    <h2 className="cart-title">Tu carrito</h2>
                    <div className="cart-items">
                        <ul>
                            {items.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <div>
                                        <img className="cart-item-image" src={item.image} alt={item.name} />
                                    </div>
                                    <div className="cart-item-info">
                                        <h3 className="cart-item-name">{item.name}</h3>
                                        <div className="cart-item-btn">
                                            <button onClick={() => decreaseQuantity(item)}>-</button>
                                            <h3>{item.quantity}</h3>
                                            <button onClick={() => increaseQuantity(item)}>+</button>
                                        </div>
                                        <h3 className="price">$ {item.price * item.quantity}</h3>
                                        <button onClick={() => removeItem(item)}>Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <h3 className="line">Total = $ {totalSum}</h3>

                        <Link to= '/form'> <button>Finalizar compra</button> </Link>
                        <button onClick={emptyCart}>Vaciar carrito</button>
                    </div>
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
