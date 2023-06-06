import Button from "./Button"

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
        <>
            <div>GAME MENU</div>   
            <Button onClick={handleStart} name="Begin Game" />
        </>
        
    )
}

export default GameMenu