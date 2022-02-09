
import { useEffect, useState } from "react";
import { productsAPI } from "../helpers/promises";
/*import ProductList from "./item-list/ItemList";*/
/*import BSpinner from "../spinner/Spinner";*/

const useProducts = () => {
    const [products, setProducts] = useState([]);
    /*const [loading, setLoading] = useState(true);*/

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const result = await productsAPI;
            setProducts(result);
        } catch (error) {
            console.log({ error });
        } finally {
        console.log("Carga realizada");
        }

    };

    return {

        
        products,
        
    };

}  

export default useProducts;