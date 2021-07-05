import classes from './MenuItem.module.css'
import { Link, useRouteMatch } from 'react-router-dom'
import Button from '../UI/button'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/CartSlice'

const MenuItem = (props) => {
    const match = useRouteMatch()
    const dispatch = useDispatch()

    const addItemHandler = () => {
        dispatch(cartActions.addItemToCart({
            id: props.id,
            image: props.image,
            price: props.price,
            title: props.title,
            count: 1
        }))
    }
    return (
        <div className={classes.menuItem}>
            <img src={props.image} alt='Food'></img>
            <div className={classes.textContainer}>
                <h2>{props.title}</h2>
                <h3>${props.price}</h3>
                <Link to={`${match.path}/${props.id}`}>
                    <Button>Nutritional Information</Button>
                </Link>
            </div>
            <div className={classes.buttonContainer}>
                <Button onClick={addItemHandler}>Add To Cart</Button>
                {/* <img className={classes.imgAnimation} src={props.image} alt='Food'></img> */}
            </div>
        </div>
    )
}

export default MenuItem