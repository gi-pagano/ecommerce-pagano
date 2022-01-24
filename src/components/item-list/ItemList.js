import Item from "../item/item";

const productos = [
    { id: "1", name: "Spider-Man", price: "12000" },
    { id: "2", name: "Wolverine", price: "11000" },
    { id: "3", name: "Black Widow", price: "13000" },
    { id: "4", name: "Batman", price: "10000" },
];

const ListaProductos = () => {
    return (
        <div>
            {productos.map(({ id, name, price }) => (
            <Item
                key={id}
                id={id}
                name={name}
                price={price}
            />
            ))}
        </div>
    );
};

export default ListaProductos;