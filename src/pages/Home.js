import classes from './Home.module.css'
import { Fragment } from 'react'
import Button from '../components/UI/button'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <Fragment>
            <section className={classes.intro}>
                <div className={classes.titleContainer}>
                    <h1>React Restaurant</h1>
                    <h2>The Only Restaurant You'll Ever Need</h2>
                </div>
                <Link to='/menu'>
                    <Button className={classes.introButton}>
                        Order Now
                    </Button>
                </Link>
            </section>
            <div className={classes.divider}></div>
            <section className={classes.chef}>
                <h1>Why You Should Choose Us</h1>
                <div className={classes.fact_1}>
                    <h2>1</h2>
                </div>
                <div className={classes.fact_2}>
                    <h2>2</h2>
                </div>
                <div className={classes.fact_3}>
                    <h2>3</h2>
                </div>
            </section>
        </Fragment>
    )
}

export default Home