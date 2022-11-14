
import React, { useState } from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {
    const [addItems,setAddItems] = useState([])
    
    const addItemToCartHandler=(item)=>{
        let hasItem = false;
        const newArray =[...addItems]
        newArray.forEach((product,index)=>{
            if(product.id===item.id){
                hasItem=true;
                newArray[index].quantity=Number(newArray[index].quantity)+Number(item.quantity)
            }
        })
        if(hasItem){
            setAddItems(newArray)
        }
        else{
            setAddItems((prevItems)=>{
                       
                return [...prevItems,item]
            })
        }
    }

    const removeItemFromCartHandler=(id)=>{
        let hasItem = false;
        const newArray =[...addItems]
        newArray.forEach((product,index)=>{
            if(product.id===id && product.quantity===1){
                hasItem=true;
              const temp=  newArray.splice(index,1)
              setAddItems(temp)
            }
            else if(product.id===id){
                hasItem=true;
                newArray[index].quantity=Number(newArray[index].quantity)-1
            }
        })
        if(hasItem){
            setAddItems(newArray)
        }
        else{
            setAddItems((prevItems)=>{
                       
                return [...prevItems]
            })
        }
    }


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
