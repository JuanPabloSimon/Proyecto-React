import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './itemCount.css'

const ItemCount = ({data}) => {
    const  [counter, setCounter] = useState(0);
    const [prodAdded, setProdAdded] = useState('')
    const stock = 5
    const handlerCounterUp = () => {
        if (counter < stock) {
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

    const onAdd = () => {
        if (counter > 0) {
            setProdAdded(counter + ' ' + data.name)
            console.log(prodAdded)
            setCounter(0)
        } else {
            alert('No agregaste ningun artículo')
        }
    }

    const onDelete = () => {
        setProdAdded('Ningun producto agregado')
        console.log('Producto/s eliminado del carrito: ' + data.name)
        console.log(prodAdded)
    }
    
    return ( 
            <div className='counter' >
                <button className='decrement' onClick={handlerCounterDown}> - </button>
                <p className='quanity'>{counter}</p>
                <button className='increment' onClick={handlerCounterUp}> + </button>
                <button className='addToCart buttonDetail' onClick={onAdd}> Agregar al carrito </button>
                <button className='deleteOfCart buttonDetail' onClick={onDelete}> Eliminar del carrito</button>
                <Link to='/' className='continue buttonDetail'> Seguir comprando </Link>
                <Link to='/cart' className='finish buttonDetail'> Ir a mi carrito </Link>
            </div>
    );


};

export default ItemCount;
