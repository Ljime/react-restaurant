import classes from './NutritionItem.module.css'

const NutritionItem = (props) => {
    return (
        <div className={classes.nutritionItem}>
            <img src={props.info.image} alt='Food'></img>
            <h2>{props.info.title}</h2>
            <p>Calories: {props.info.calories}</p>
            <p>Carbs: {props.info.carbs}</p>
            <p>Fat: {props.info.fat}</p>
            <p>Protein: {props.info.protein}</p>
        </div>
    )
}

export default NutritionItem