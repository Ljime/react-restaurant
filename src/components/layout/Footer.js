import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
const Footer = (props) => {

    return (
        <Fragment>
        {props.location.pathname === '/cart' ? <div></div> : 
        <footer className={classes.footer}>
            <div className={classes.links}>
                <ul>
                    <Link to='/main'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                </ul>
            </div>
            
            <div className={classes.copyright}>
                <p>React Restaurant Copyright TM All Rights Reserved</p>
            </div>
        </footer>
        }
        </Fragment>
        
    )
}

export default Footer