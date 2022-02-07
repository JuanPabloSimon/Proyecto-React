import React, { useState } from 'react';
import './itemCount.css'

const ItemCount = ({onAdd}) => {

    const  [counter, setCounter] = useState(0);
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
            counter.useState(0)
        }
    }
    
    return ( 
        <div className='addCart'>
            <div className='counter' >
                <button className='decrement' onClick={handlerCounterDown}> - </button>
                <p className='quanity'>{counter}</p>
                <button className='increment' onClick={handlerCounterUp}> + </button>
                <button className='addToCart' onClick={onAdd}> Agregar al carrito </button>
            </div>
        </div>
    );


};

export default ItemCount;
