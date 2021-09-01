import { Fragment, useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useHttp from '../components/hooks/useHttp'
import NutritionItem from "../components/menu/NutritionItem"
import Spinner from "../components/UI/Spinner"
const NutritionalInformation = () => {
    const [nutritionInfo, SetNutritionInfo] = useState({})
    const params = useParams()
    const {foodID} = params
    
    const applyNutritionInfo = useCallback((data) => {
        const {image, title, nutrition} = data
        const {calories, carbs, fat, protein} = nutrition
        const info = {image, title, calories, carbs, fat, protein}

        SetNutritionInfo(info)
    }, [])

    const {status, sendRequest} = useHttp(applyNutritionInfo)

    useEffect(() => {
        sendRequest(`https://api.spoonacular.com/food/menuItems/${foodID}?apiKey=${process.env.REACT_APP_FOOD_API_KEY}`, {})
    }, [foodID, sendRequest])

    return (
        <Fragment>
            {status === 'pending' && <Spinner></Spinner>}
            {status === 'success' && <NutritionItem info={nutritionInfo}></NutritionItem>}
            {status === 'error' && <h1>Unable to fetch data</h1>}
        </Fragment>
    )
}

export default NutritionalInformation