import React, {useContext} from 'react'
import './cartItem.css'
import { CartContext } from '../../Context/cartContext'

const CartItem = ({item}) => {
  const {onDelete} = useContext(CartContext)
  

  return (
    <div className='cartItem'>
        <h2> {item.name} </h2>
        <img  className='imgProdCart' src={item.imgUrl} alt={item.name} ></img>
        <p className='text'> Cantidad: {item.q}</p>
        <p className='text'> Valor por unidad: ${item.price} </p>
        <h4> Valor Total: ${item.price * item.q} </h4>
        <button className='buttonCart' onClick={() => onDelete(item.id)}> Eliminar Productos</button>
    </div>
  )
}

export default CartItem;