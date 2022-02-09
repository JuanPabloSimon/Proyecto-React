import React from 'react';
import './item.css'
// import ItemCount from '../ItemCount/itemCount.js'
import { Link } from 'react-router-dom';
// import prod from '../../products';

const Item = ({product}) => {
  return (
    <div className='item'>
        <h2> {product.name} </h2>
        <img className='imgProd' src={product.imgUrl} alt={product.name}/>
        <p> {product.price} </p>
        {/* <ItemCount onAdd={() => {console.log('Producto Agregado al carrito')}}/> */}
        <Link to='' className='link' >Ver Más</Link>
    </div>
    );
};

export default Item;
