import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import BSpinner from "../spinner/Spinner";
import ProductList from "./item-list/ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {
        
        const db = getFirestore();

        const itemCollection = collection(db, 'items');

        if (categoryId) {
            const itemQuery = query(itemCollection, where('category', '==', categoryId));
            getDocs(itemQuery).then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })))
                setLoading(false)
            })
        } else {
            getDocs(itemCollection).then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                })))
                setLoading(false)
            })
        }
    }, [categoryId])


    return (
        <div>
            {loading ? <BSpinner /> : <ProductList products={products} />}
        </div>
    )
}

export default ItemListContainer;