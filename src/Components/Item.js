import { useState } from "react";
import ItemCounter from "./item-counter/itemCounter";



const Item = ({id, name, description, stock, image,  price, setSelectedItem}) =>{
    const [stockSelected, setStockSelected] = useState (0);

    const selectedItem = () =>
        setSelectedItem ({id, name, description, price, image, stock: stockSelected});

    return (
        <>
        <div>
            <h2>{name}</h2>
            <img src={image} alt="imagen del producto" />
            
           {/* <ItemCounter stock={stock} setStockSelected={setStockSelected} /> */}
            <button onClick={selectedItem}>Seleccionar Producto</button>

        </div>

        </>
    );
};

export default Item;