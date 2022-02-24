import React, {createContext, useState} from 'react'

export const CartContext = createContext() ;

const initialState = [];

export const CartProvider = ({children}) => {

    const [itemsAgregados, setItemsAgregados] = useState(initialState)
    // var amount = useState(0)
    

    
    return <CartContext.Provider value={[itemsAgregados, setItemsAgregados]}>{children}</CartContext.Provider>
}