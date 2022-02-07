import AddToCart from "../../../cart-icon/AddToCart";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, image, stock }) => {

    return (
        <>
            <div className="card">
                <img className="card-img" src={image} alt={name} />
                <div className="card-body">
                    <div className="card-body-layout">
                        <h3>{name}</h3>
                        <p>$ {price}</p>
                    </div>
                    <div className="card-body-layout">
                        <button><AddToCart /></button>
                        <Link to={`/item/${id}`}><button>Ver más</button></Link>
                    </div>
                </div>    
            </div>
        </>
    );
};

export default Item;