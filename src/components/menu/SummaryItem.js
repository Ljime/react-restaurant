import classes from './SummaryItem.module.css'

const SummaryItem = (props) => {
    return (
        <div className={classes.summaryItem}>
            <p>{props.title} - x{props.count} ${props.price}</p>
        </div>
    )
}

export default SummaryItem