import Item from './item/Item';

const ProductList = ( {products} ) => {

    return (
        <div className="products-layout">
            {products?.map((product) => (
            <Item key={product.id} {...product} />
            ))}
        </div>
    );
};


export default ProductList;