import React from 'react'
import CartIcon from './CartIcon'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = () => {

    return (
        <div>
        <div className={classes.button}>
            <CartIcon/>
            <p>Your Cart</p>
            <div className={classes.badge}>
                <p>0</p>
            </div>
        </div>
        
        </div>
    )
}


export default HeaderCartButton