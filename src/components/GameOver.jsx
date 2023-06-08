import Button from "./Button"
import classes from "./GameOver.module.css"
/* eslint-disable react/prop-types */
const GameOver = (props) => {
    const handleButton = (e) => {
        e.preventDefault()
        props.setBeginGame(false)
    }

    return (
        <>
            <h1>GAME OVER</h1>    
            <span className={classes.scorespan}>your final score is {props.score}</span>
            <Button onClick={handleButton} name="Back To Start" />
        </>
    )
}

export default GameOver