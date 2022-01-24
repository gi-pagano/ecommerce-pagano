const Item = ({ id, name, price, }) => {

    return (
        <div>
            <h2>Figura: {name}</h2>
            <h2>Precio: $ {price}</h2>
        </div>
    );
};

export default Item;