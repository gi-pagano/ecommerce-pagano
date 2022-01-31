
import ItemCounter from "../item-count/ItemCount";

const Item = ({ id, name, description, price, brand, image, stock }) => {

    return (
        <>
            <div className="card">
                <img className="card-img" src={image} alt={name} />
                <div className="card-body">
                    <h2>{name}</h2>
                    <h2>{description}</h2>
                    <h2>$ {price}</h2>
                    <h2>Marca: {brand}</h2>
                    <h2>Disponibles: {stock}</h2>
                    <ItemCounter stock={stock}  />
                    <button>Agregar al carrito</button>
                </div>    
            </div>
        </>
    );
};

export default Item;