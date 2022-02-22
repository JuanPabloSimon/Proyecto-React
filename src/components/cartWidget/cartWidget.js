import React, { useContext} from 'react'
import img from '../assets/carrito.png'
import 'animate.css';
import { CartContext } from '../../Context/cartContext';
import './cartWidget.css'

const CartWidget = () => {
    const [itemsAgregados] = useContext(CartContext)
    return (
        <img src={img} alt='imagen-carrito' className={itemsAgregados.length !== 0 ? 'negro' :   'azul' }  />
  )
}

export default CartWidget

// 'animate__animated animate__swing'