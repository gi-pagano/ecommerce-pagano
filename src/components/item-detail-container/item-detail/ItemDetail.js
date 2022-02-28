
import { Link } from 'react-router-dom'
import ItemCount from '../../item-count/ItemCount'
import { Carousel } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'


const ItemDetail = ( {product}) => {

    const { name, description, price, stock, brand, image, image2 } = product

    const [show, setShow] = useState(true)

    const { addItem } = useContext(CartContext)

    const onAdd = ( counter ) => {
        addItem({ ...product, quantity: counter })
        setShow(false)
    }


    return (
        <div>
            <div className="detail-layout">
                <Carousel fade className="carousel-size">
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={image}
                        alt={name}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src={image2}
                        alt={name}
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="detail-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>$ {price}</h3>
                    <p>{brand}</p>
                    <p>{stock} unidades disponibles</p>
                    {stock > 0 ?
                    show ? <ItemCount stock={stock} onAdd={onAdd} /> : 
                        <div className="detail-btns">
                            <Link to='/cart'><button>Finalizar compra</button></Link>
                            <Link to='/'><button>Seguir Comprando</button></Link>
                        </div> : 
                    <p>Sin stock</p> }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail