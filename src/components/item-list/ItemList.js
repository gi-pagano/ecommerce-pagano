import Item from "../item/Item";
import { useEffect, useState } from "react";
import { productsAPI } from "../../helpers/promises";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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
        setLoading(false);
        }

    };
    if (loading) {
        return <h1>Cargando...</h1>;
    }

    return (
        <div className="products-layout">
            {products.map((product) => (
            <Item key={product.id} {...product} />
            ))}
        </div>
    );
};


export default ProductList;