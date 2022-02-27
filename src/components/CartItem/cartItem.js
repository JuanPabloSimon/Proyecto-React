import React, {useContext} from 'react'
import './cartItem.css'
import { CartContext } from '../../Context/cartContext'

const CartItem = ({item}) => {
  const {itemsAgregados, setItemsAgregados} = useContext(CartContext)

  const onDelete = () => {
    const findProduct = itemsAgregados.filter(itemId => itemId.id !== item.id)

    setItemsAgregados(findProduct)
}

  return (
    <div className='cartItem'>
        <h2> {item.name} </h2>
        <img  className='imgProdCart' src={item.imgUrl} alt={item.name} ></img>
        <p className='text'> Cantidad: {item.cantidad}</p>
        <p className='text'> Valor por unidad: ${item.price} </p>
        <h4> Valor Total: ${item.price * item.cantidad} </h4>
        <button className='buttonCart' onClick={onDelete}> Eliminar Productos</button>
    </div>
  )
}

export default CartItem;