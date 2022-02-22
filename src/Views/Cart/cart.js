import React, { useEffect, useContext, useState}  from 'react'
import CartList from '../../components/CartList/cartList'
import { CartContext } from '../../Context/cartContext'
import './cart.css'
import { Link } from 'react-router-dom'



const Cart = () => {
  const [itemsAgregados] = useContext(CartContext)
  const [cartItems, setCartItems] = useState([])
  
  useEffect(() => {
    const promiseCart = new Promise((resolve, reyect) => {
      resolve(itemsAgregados)
    })
    promiseCart
    .then((res) => {setCartItems(res);
    })
    .catch((error) => {
      console.log(error)
    })
  },)

  return (
    <div className='cart' >
      {cartItems.length !== 0 ? <CartList items={cartItems}></CartList> : 
      <div className='cartDiv' >
        <h2>No hay productos agregados</h2>
        <h3>¡Agrega Productos al carrito!</h3>
        <button> <Link to='/' className='cartLink'>Ir a Productos</Link> </button> 
      </div> }
    </div>
  )
}

export default Cart