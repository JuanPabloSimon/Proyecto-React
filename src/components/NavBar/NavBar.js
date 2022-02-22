import React from 'react';
import './navBar.css'
import { Link } from 'react-router-dom';
import CartWidget from '../cartWidget/cartWidget';

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
      <Link to='/Cart' className='Link' > <CartWidget/> </Link>
    </ul>
  </nav>;
  
};

export default navBar;


