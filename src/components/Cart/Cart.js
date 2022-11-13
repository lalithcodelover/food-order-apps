import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'

const Cart = (props) => {

const cartCtx = useContext(CartContext)
const cartItems= <ul>{cartCtx.items.map((item)=>{return <li key={item.id}>{item.name}</li>})}</ul>

return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$25.55</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
            </Modal>
    )
}

export default Cart