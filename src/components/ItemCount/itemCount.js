import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../Context/cartContext';

import './itemCount.css'

const ItemCount = ({data}) => {
    
    const  [counter, setCounter] = useState(0);
    const [itemsAgregados, setItemsAgregados] = useContext(CartContext)

    const onAdd = () => {
        const findId = itemsAgregados.find( item => item.id === data.id)

        if (findId) {
            data.cantidad = counter;
            alert('has sumado más ' + data.name + ' - Cantidad total: ' + data.cantidad )
        } else {
            if (counter !== 0) {
                itemsAgregados.push(data)
                data.cantidad = counter;
                alert('Has agregado ' + data.cantidad + ' ' + data.name + 'al carrito')
            } else {
                alert("no se sumaron productos")
            }
            
        }  
    }
    const onDelete = () => {
        const findProduct = itemsAgregados.filter(item => item.id !== data.id)

        setItemsAgregados(findProduct)
        alert('Has eliminado ' + data.name + ' del carrito')
    }

    const handlerCounterUp = () => {
        if (counter < data.stock) {
            setCounter(counter + 1);
        } else {
            alert('Out of Stock')
        }
    }

    const handlerCounterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        } else {
            setCounter(0)
        }
    }


    
    return ( 
            <div className='counter' >
                <button className='decrement' onClick={handlerCounterDown}> - </button>
                <p className='quanity'>{counter}</p>
                <button className='increment' onClick={handlerCounterUp}> + </button>
                <button className='addToCart buttonDetail' onClick={onAdd} > Agregar al carrito </button>
                <button className='deleteOfCart buttonDetail' onClick={onDelete} > Eliminar del carrito</button>
                <Link to='/' className='continue buttonDetail'> Seguir comprando </Link>
                <Link to='/cart' className='finish buttonDetail'> Ir a mi carrito </Link>
            </div>

    );


};

export default ItemCount;
