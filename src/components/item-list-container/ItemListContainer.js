import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { productsAPI } from "../../helpers/promises";
import BSpinner from "../spinner/Spinner";
import ProductList from "./item-list/ItemList";

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            productsAPI
                .then(res => setProducts(res.filter(prod => prod.category === categoryId)))
                .finally(() => setLoading(false))
        } else {
            productsAPI
                .then(res => setProducts(res))
                .finally(() => setLoading(false))
        }

    }, [categoryId])

    return (
        <div>
            {loading ? <BSpinner /> : <ProductList products={products} />}
        </div>
    )
}

export default ItemListContainer;