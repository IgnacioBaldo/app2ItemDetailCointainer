import React, { useEffect, useState } from 'react';
import { productsAPI } from './helpers/promises';
import Item from './Item';
import ItemListContainer from './ItemListContainer';
const items = [
    {id:"01", name:"Producto 1", description:"DETALLE DEL PRODUCTO", price:"precio del producto $", image:"https://herschel.com/content/dam/herschel/products/10011/10011-00001-OS_02.jpg.sthumbnails.680.850.jpg"},
 
 ];

const ItemDetailContainer = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      getProducts();
    },[]);
  
    const getProducts = async () => {
      try {
        const result = await productsAPI;
        setProducts(result);
      } catch (error) {
        console.log({error});
      } finally {
        setLoading(false);
        console.log("Terminacion de API");
      }
    };
    if(loading) {
      return <h1>LOADING...</h1>;
    }
  
 
 return (
    <div>
  <h2>Productos</h2>
  <h3>Producto Seleccionado para ver detalles</h3>
  <p>{selectedItem ? selectedItem.name : "No hay productos"}</p>
  <p>{selectedItem ? selectedItem.description : "No hay productos"}</p>
  <p>{selectedItem ? selectedItem.price : "No hay productos"}</p>
  <p>{selectedItem && selectedItem.image && <img src={selectedItem.image} alt="selectedItemImage"/>}</p>
  
  <p>Cantidad: {selectedItem ? selectedItem.stock : "No hay productos"}</p>




  <hr/>
  {items.map(({id, name, price, description, image}) =>(
    <Item
    key={id}
    id={id}
    name={name}
    price={price}
    image={image}
    description={description}
    setSelectedItem={setSelectedItem}
    
    />
  
  ))}
</div>
 );
};

export default ItemDetailContainer;
