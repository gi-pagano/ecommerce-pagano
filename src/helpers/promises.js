import { products } from "../data/products";

export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        //reject("Error al cargar los productos");
        resolve(products);
    }, 2000);
});