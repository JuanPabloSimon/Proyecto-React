import React, {createContext, useState} from 'react'

export const CartContext = createContext() ;

const initialState = [];

export const CartProvider = ({children}) => {

    const [itemsAgregados, setItemsAgregados] = useState(initialState)
    const [amount, setAmount] = useState(initialState)

    
    return <CartContext.Provider value={[itemsAgregados, setItemsAgregados, amount, setAmount ]}>{children}</CartContext.Provider>
}