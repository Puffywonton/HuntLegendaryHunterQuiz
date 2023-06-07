import Button from "./Button"
import classes from "./GameMenu.module.css"

/* eslint-disable react/prop-types */
const GameMenu = (props) => {
    //need to add number of questions

    const handleStart = (e) => {
        e.preventDefault()
        props.setScore(0)
        props.setQuestionNumber(1)
        props.setUsedHunters([])
        props.setGameOver(false)
        props.setBeginGame(true)
    }

    return (
        <div className={classes.container}>
            <div className={classes.titlecontainer}>
                <h1 className={classes.title}>HUNT SHOWDOWN</h1>
                <h2 className={classes.subtitle}>Legendary Hunter Quiz</h2>
            </div>
            <Button onClick={handleStart} name="Begin Game" />
        </div>      
    )
}

export default GameMenu