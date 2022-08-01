import { useState, useContext } from "react";
import { addDoc, collection, doc, getFirestore, writeBatch } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

const MyForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [show, setShow] = useState(true);

    const buyer = {
        name: name,
        phone: phone,
        email: email,
        address: address,
    };

    const [orderId, setOrderId] = useState(null);
    
    const { items, totalSum, emptyCart } = useContext(CartContext);

    const sendOrder = (e) => {
        e.preventDefault();
        setShow(false);
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        const order = { buyer, totalSum, items };
        addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
        const batch = writeBatch(db);
        items.forEach(item => {
            const itemRef = doc(db, "items", item.id);
            batch.update(itemRef, { stock: item.stock - item.quantity });
        });
        batch.commit();
        emptyCart();
    };

    const validateEmail = (email) => {
        return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    
    function isEnabled() {
        return (
            name.length > 0 &&
            validateEmail(email) 
        );
    }


    return (
        <div>
            {show ? (
                <div>
                    <h2>Completa tus datos para finalizar la compra</h2>
                    <h2>Total : $ { totalSum } </h2>
                    <form className="my-form">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" className="form-control" id="name" placeholder="Por favor ingrese su nombre" required="required" data-error="Firstname is required." value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="phone">Teléfono:</label>
                        <input type="text" className="form-control" id="phone" placeholder="Por favor ingrese su teléfono" required="required" data-error="Phone is required." value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" className="form-control" id="email" placeholder="Por favor ingrese su mail" required="required" data-error="Email is required." value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="address">Dirección:</label>
                        <input type="text" className="form-control" id="address" placeholder="Por favor ingrese su dirección" required="required" data-error="Address is required." value={address} onChange={(e) => setAddress(e.target.value)} />
                        <button disabled={!isEnabled()} onClick={sendOrder} type="submit">Enviar</button> 
                    </form>
                </div> ) : ( null )}
            {orderId ? ( <h2> ¡Tu compra se realizó con éxito! El id para seguimiento es: { orderId } </h2> ) : ( null )}
        </div>
    );
};

export default MyForm;

