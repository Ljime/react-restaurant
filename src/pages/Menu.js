import classes from './Menu.module.css'
import { Fragment, useRef, useState } from 'react'
import Button from '../components/UI/button'
import useHttp from '../components/hooks/useHttp'
import MenuItem from '../components/menu/MenuItem'
import Spinner from '../components/UI/Spinner'

const Menu = () => {
    const [menuArray, setMenuArray] = useState([])
    const searchInput = useRef();
    const countInput = useRef();

    const applyMenu = (data) => {
      const menu = [];

      for (const item in data.menuItems) {
        menu.push({ id: data.menuItems[item].id,
                    title: data.menuItems[item].title,
                    image: data.menuItems[item].image,
                    price: ((Math.random() * 30) + 1).toFixed(2) });
      }

      setMenuArray(menu);
    }

    const {status, sendRequest: getMenu} = useHttp(applyMenu)

    const menuSubmitHandler = (event) => {
        event.preventDefault()
        getMenu(
            `https://api.spoonacular.com/food/menuItems/search?query=${searchInput.current.value}&number=${countInput.current.value}&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`, {}
            )
        }
        
        return (
            <Fragment>
            <div className={classes.banner}>

            </div>
            <section className={classes.menu}>
                <form onSubmit={menuSubmitHandler} className={classes.inputContainer}>
                    <div className={classes.searchContainer}>
                        <input ref={searchInput} className={classes.search} type='text' placeholder='Search Our Menu'></input>
                    </div>
                    <div className={classes.countContainer}>
                        <input defaultValue='1'ref={countInput} className={classes.count} placeholder='Count' type='number' min='1' step='1'></input>
                    </div>
                    <Button className={classes.submitButton}>Submit</Button>
                </form>
                <div className={!status ? classes.meals : classes.mealsPadding}>
                    {status === 'pending' && <Spinner></Spinner>}
                    {status === 'success' &&  menuArray.map((item) => {
                       return <MenuItem key={item.id} id={item.id} title={item.title} image={item.image} price={item.price}></MenuItem>
                    })}
                    {status === 'error' && <h1>ERROR!</h1>}
                </div>
            </section>
        </Fragment>
    )
}

export default Menu