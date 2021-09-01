import { NavLink, Link } from 'react-router-dom'
import Button from '../UI/button'
import classes from './header.module.css'
import { useSelector } from 'react-redux'
const Header = () => {

    const totalPrice = useSelector((state) => state.cart.totalCount)

    return (
        <header className={classes.header}>
            <NavLink
                className={classes.link}
                activeClassName={classes.active}
                to="/main"
            >
                Main
            </NavLink>
            <NavLink
                className={classes.link}
                activeClassName={classes.active}
                to="/menu"
            >
                Menu
            </NavLink>
            <Link to='/cart' className={classes.buttonLink}>
                <Button>Cart {totalPrice}</Button>
            </Link>
        </header>
    )
}

export default Header