import React, {Suspense} from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'
import {Fragment, useEffect, useState} from 'react'
import Spinner from "./components/UI/Spinner";

const Home = React.lazy(() => import('./pages/Home'))
const Menu = React.lazy(() => import("./pages/Menu"))
const NutritionalInformation = React.lazy(() => import("./pages/NutritionalInformation"))
const Cart = React.lazy(() => import("./pages/Cart"))

function App() {
	const [location, setLocation] = useState('')
	const history = useHistory()
	
	useEffect(() => {
		history.listen((location) => {
			setLocation(location)
		})
	}, [history])

  return (
			<Fragment>
				<Header></Header>
				<Suspense fallback={<Spinner></Spinner>}>
					<main>
						<Switch>
							<Route path="/" exact>
								<Redirect to="/main"></Redirect>
							</Route>
							<Route path="/main">
								<Home></Home>
							</Route>
							<Route path="/menu" exact>
								<Menu></Menu>
							</Route>
							<Route path='/menu/:foodID'>
								<NutritionalInformation></NutritionalInformation>
							</Route>
							<Route path='/cart'>
								<Cart></Cart>
							</Route>
							<Route path="*">
								<h1>NOT FOUND 404</h1>
							</Route>
						</Switch>
					</main>
				</Suspense>
				<Footer location={location}></Footer>
			</Fragment>
		)
}

export default App;
