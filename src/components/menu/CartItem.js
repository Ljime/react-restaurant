import classes from './CartItem.module.css'
import Button from "../UI/button"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/CartSlice'

const CartItem = (props) => {
    const dispatch = useDispatch()

    const incrementItem = () => {
        dispatch(cartActions.incrementItem({id: props.id, price: props.price}))
    }

    const decrementItem = () => {
        dispatch(cartActions.decrementItem({ id: props.id, price: props.price }))
    }
    return (
        <div className={classes.cartItem}>
            <img src={props.image} alt='Food'></img>
            <div className={classes.textContainer}>
                <h2>{props.title}</h2>
                <h3>${props.price}</h3>
            </div>
            <div className={classes.countContainer}>
                <h2>x{props.count}</h2>
                <Button onClick={decrementItem}>-</Button>
                <Button onClick={incrementItem}>+</Button>
            </div>
        </div>
    )
}

export default CartItem