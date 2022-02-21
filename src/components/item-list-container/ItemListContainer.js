import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { productsAPI } from "../../helpers/promises";
import BSpinner from "../spinner/Spinner";
import ProductList from "./item-list/ItemList";
//import { collection, getDocs, doc, getDoc, getFirestore, limit, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {

        
        /*
        const db = getFirestore();

        const itemCollection = collection(db, 'products');

        getDocs(itemCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data() 
            })))
            console.log(snapshot.docs)
            setLoading(false)
        })

    }, [])*/


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