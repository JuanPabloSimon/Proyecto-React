import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../Context/cartContext';

import './itemCount.css'

const ItemCount = ({data}) => {
    const {itemsAgregados, onAdd, isInCart, onDelete} = useContext(CartContext) 
    const [ counter, setCounter] = useState(0)
    const addToCart = (q) => { 
        if (isInCart(data.id)) {
            const duplicado = itemsAgregados.find(item => item.id === data.id)
            // const deleteId = duplicado.splice(1,1)
            duplicado.cantidad = counter
            console.log(itemsAgregados)
            setCounter(0)
        } else {
            if (counter !== 0) {
                    onAdd(
                    data.id,
                    data.name,
                    q,
                    data.price,
                    data.type,
                    data.imgUrl,
                    )
            } 
        }
    } 

    const evitarVacio = () => {
        if (counter > 0) {
            return true
        } else {
            return false
        }
    }

    const hayStock = (numero, stock) =>{
        if( numero < stock) {
            return true;
        } else {

            return false;
        }
    }
    
    const handlerCounterUp = (numero, valor) => {
        if (numero >= 0 && hayStock(numero, data.stock)) {
            numero = numero + valor;
        } else {
            console.log(data.stock)
            alert('Out of Stock')
        }
        return numero;
    }

    const handlerCounterDown = (numero, valor) => {
        if (numero > 0) {
            numero = numero - valor;
        } else {
            setCounter(0);
        }
        return numero;
    }

    
    
    return ( 
            <div className='counter' >
                <button className='decrement' onClick={() => setCounter(handlerCounterDown(counter, 1))}> - </button>
                <p className={evitarVacio() ? 'quantity' : 'quantityError'} >{counter}</p>
                <button className='increment' onClick={() => setCounter(handlerCounterUp(counter, 1))}> + </button>
                <button className='addToCart buttonDetail' onClick={() => addToCart(counter)} > Agregar al carrito </button>
                <button className='deleteOfCart buttonDetail' onClick={() => onDelete(data.id)} > Eliminar del carrito</button>
                <Link to='/' className='continue buttonDetail'> Seguir comprando </Link>
                <Link to='/cart' className='finish buttonDetail'> Ir a mi carrito </Link>
            </div>

    );
};

export default ItemCount;
