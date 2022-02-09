
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsAPI } from "../../helpers/promises";
import ItemDetail from "./item-detail/ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        productsAPI
            .then(res => setProduct(res.find(prod => prod.id === id)))

    }, [id])

    return (
        <div className="details">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer;
