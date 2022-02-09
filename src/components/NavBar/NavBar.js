import React from 'react';
import './navBar.css'
import img from '../assets/carrito.png'
import { Link } from 'react-router-dom';

const navBar = () => {
  return <nav className='Navegation'>
    <h1> Vivero Simon </h1>
    <ul>
      {/* <li> <a href='' alt='link-home' >Home</a> </li>
      <li> <a href='' alt='link-products' >Products</a> </li>
      <li> <a href='' alt='link-about' >About</a> </li>
      <li> <a href='' alt='link-contact' >Contact</a> </li>
      <li> <a href='' alt='link-contact' > <img src={img} alt='imagen-carrito' /> </a> </li> */}
      <Link to='/' className='Link' > Home</Link>
      <Link to='/' className='Link' > Products</Link>
      <Link to='/about' className='Link' > About</Link>
      <Link to='/contact' className='Link' > Contact</Link>
      <Link to='/Cart' className='Link' > <img src={img} alt='imagen-carrito' /> </Link>
    </ul>
  </nav>;
  
};

export default navBar;


