/* eslint-disable react/prop-types */
import classes from './ScoreBoard.module.css'

const ScoreBoard = (props) => {
    return (
        <span className={classes.score} >
            SCORE {props.score}
        </span>    
    )
}

export default ScoreBoard