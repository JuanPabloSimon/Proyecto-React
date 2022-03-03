import React, { useContext}  from 'react'
import CartList from '../../components/CartList/cartList'
import { CartContext } from '../../Context/cartContext'
import './cart.css'
import { Link } from 'react-router-dom'
import FinishPurchase from '../Finish/finishPurchase'



const Cart = () => {
  const {itemsAgregados} = useContext(CartContext)
  
  for (const item of itemsAgregados){
    // itemsAgregados.forEach(() => {
    //     console.log(itemsAgregados[0].id)
    //     console.log("ayuda")
    //   }
    //   )
    console.log(item.name + ' ' + item.q)
  }
    // const total = () => {
    //   const cantProd = itemsAgregados.forEach(itemsAgregados.cantidad => {
        
    //   });
    // }

  return (
    <div className='cart' >
      {itemsAgregados.length !== 0 ? 
       <div>
      <CartList items={itemsAgregados}></CartList>
      <hr style={{marginBottom: 0}}></hr>
      <FinishPurchase></FinishPurchase>
      </div>
      : 
      <div className='cartDiv' >
        <h2>No hay productos agregados</h2>
        <h3>¡Agrega Productos al carrito!</h3>
        <button> <Link to='/products' className='cartLink'>Ir a Productos</Link> </button> 
      </div> }
    </div>
  )
}

export default Cart