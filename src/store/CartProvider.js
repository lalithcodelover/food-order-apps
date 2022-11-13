
import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
    const [addItems,setAddItems] = useState([])
    
    const addItemToCartHandler=(item)=>{
        setAddItems((prevItems)=>{
            return [...prevItems,item]
        })
    }

    const removeItemFromCartHandler=(id)=>{}


const cartContext={
    items:addItems,
    totalAmount:0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    
}

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    
  )
}

export default CartProvider
