import React from 'react';
import './navBar.css'
import img from './carrito.png'

const navBar = () => {
  return <nav className='Navegation'>
    <h1> Vivero Simon </h1>
    <ul>
      <li> <a href='' alt='link-home' >Home</a> </li>
      <li> <a href='' alt='link-products' >Products</a> </li>
      <li> <a href='' alt='link-about' >About</a> </li>
      <li> <a href='' alt='link-contact' >Contact</a> </li>
      <li> <a href='' alt='link-contact' > <img src={img} alt='imagen-carrito' /> </a> </li>
      
    </ul>
  </nav>;
  
};

export default navBar;


