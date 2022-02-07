
/*import { Link } from 'react-router-dom'*/
import ItemCount from '../../item-count/ItemCount'


const ItemDetail = () => {

    const cap =
{
    id: "1", 
    name: "Captain America", 
    description: "Figura del Capitán América de Marvel Avengers", 
    price: 30000,
    stock: 3, 
    brand: "Figma",
    image: "https://res.cloudinary.com/gicloud1433/image/upload/v1644185855/cap_yk0fso.jpg",
    category: "avengers",
};

    const { name, description, price, stock, brand, image } = cap

    return (
        <div>
            <div className="detail-layout">
                <img src={image} alt={name} />
                <div className="detail-info">
                    <div className="detail-name">
                        <h2>{name}</h2>
                        <h3>$ {price}</h3>
                    </div>
                    <div className="detail-description">    
                        <p>{description}</p>
                        <p>{brand}</p>
                        <p>Quedan: {stock} unidades</p>
                        <ItemCount stock={stock} /> :
                        {/*<div className="detail-btns">
                            <Link to='/cart'><button>Ver tu carrito</button></Link>
                            <Link to='/'><button>Seguir Comprando</button></Link>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail