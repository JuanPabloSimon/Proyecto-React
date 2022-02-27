import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsAgregados, setItemsAgregados] = useState([])

  const onAdd = ( id, name, quantity, price, type, imgUrl) => {
    

    setItemsAgregados([  
      ...itemsAgregados,
      {
        id: id,
        name: name,
        q: quantity,
        price: price,
        type: type,
        imgUrl: imgUrl,
      }
    ]);

    // if (findId) {
    //     itemsAgregados.cantidad = counter;
    //     alert('has sumado más ' + itemsAgregados.name + ' - Cantidad total: ' + itemsAgregados.cantidad )
    // } else {
    //     if (counter !== 0) {
    //         itemsAgregados.push(itemsAgregados)
    //         itemsAgregados.cantidad = counter; 
    //         alert('Has agregado ' + itemsAgregados.cantidad + ' ' + itemsAgregados.name + ' al carrito')
    //     } else {
    //         alert("no se sumaron productos")
    //     }
        
    // }  

}
  const isInCart = (id) => {
    const duplicado = itemsAgregados.find( item => item.id === id)
    if (duplicado) {
      return true;
    } else {
      return false;
    }
  } 

  const onDelete = (id) => {
      setItemsAgregados(itemsAgregados.filter(item => item.id !== id));
  }

  const clearCart = () => {
    setItemsAgregados([])
  }

  return (
    <CartContext.Provider
      value={{
        itemsAgregados,
        setItemsAgregados,
        onAdd,
        onDelete,
        isInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};