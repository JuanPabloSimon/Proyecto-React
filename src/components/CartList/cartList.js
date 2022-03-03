import React from 'react'
import CartItem from '../CartItem/cartItem';
import CartCount from '../cartCount/cartCount';
import './cartList.css'
import { Link } from 'react-router-dom';

const Cartlist = ({items}) => {
  return (
    <div className='cartList'> 
    
    {
      items.map((item) => (
        <CartItem key={item.id} item={item} ></CartItem>
        
        ))
      }
      <aside>
        <h5> Compra Total: </h5>
        <ul>
          {
          items.map((item) => (
            <CartCount key={item.id} item={item}></CartCount>
            ))
          }
        </ul>
        <h5> Precio Final: </h5>
        <Link to='/finish'><button className='buttonFinish'> Finalizar Compra </button> </Link>
      </aside>
      
    </div>
  )
}

export default Cartlist;