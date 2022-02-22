
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./item-detail/ItemDetail";
import { doc, getFirestore, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore();

        const docRef = doc(db, "items", id);

        getDoc(docRef).then((snapshot) => {
            setProduct(({
                id: snapshot.id,
                ...snapshot.data()
            }))
        })
    }, [id])
    

    return (
        <div className="details">
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer;
