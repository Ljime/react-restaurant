import classes from './Cart.module.css'
import { useSelector } from "react-redux"
import CartItem from "../components/menu/CartItem"
import SummaryItem from '../components/menu/SummaryItem'
import Button from '../components/UI/button'

const Cart = () => {
    
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const items = useSelector((state) => state.cart.items)

    const cartItems = items.map((item) => {
        return (
            <CartItem key={item.id} title={item.title}
                    id={item.id}
                    image={item.image}
                    price={item.price} 
                    count={item.count}></CartItem>            
        )
    })

    const summaryItems = items.map((item) => {
        return (
            <SummaryItem key={item.id} id={item.id}
                         title={item.title} 
                         count={item.count}
                          price={item.price}></SummaryItem>
        )
    })

    return (
        <div className={classes.cart}>
            <div className={classes.cartList}>
                {cartItems}
            </div>
            <div className={classes.summary}>
                <h2>Summary</h2>
                {summaryItems}
                <h1>Total Price: ${totalPrice}</h1>
                <Button>Order</Button>
            </div>
        </div>
    )
}

export default Cart