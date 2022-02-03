import React from 'react';
import './item.css'
// import ItemCount from '../ItemCount/itemCount.js'

const Item = ({product}) => {
  return (
    <div className='item'>
        <h2> {product.name} </h2>
        <img className='imgProd' src={product.imgUrl} alt={product.name}/>
        <p> {product.price} </p>
        {/* <ItemCount onAdd={() => {console.log('Producto Agregado al carrito')}}/> */}
        <button> Ver mas detalles</button>
    </div>
    );
};

export default Item;
