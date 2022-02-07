import React, { useState } from 'react';
import Item from './Item';
import ItemListContainer from './ItemListContainer';
const items = [
    {id:"01", name:"Producto 1", description:"DETALLE DEL PRODUCTO"},
 
 ];

const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);
 
 return (
    <div>
  <h2>Productos</h2>
  <h3>Producto Seleccionado para ver detalles</h3>
  <p>{selectedItem ? selectedItem.name : "No hay productos"}</p>
  <p>{selectedItem ? selectedItem.description : "No hay productos"}</p>
  <p>ID: {selectedItem ? selectedItem.id : "No hay productos"}</p>
  <p>Cantidad: {selectedItem ? selectedItem.stock : "No hay productos"}</p>




  <hr/>
  {items.map(({id, name, price, description}) =>(
    <Item
    key={id}
    id={id}
    name={name}
    description={description}
    setSelectedItem={setSelectedItem}
    
    />
  
  ))}
</div>
 );
};

export default ItemDetailContainer;
