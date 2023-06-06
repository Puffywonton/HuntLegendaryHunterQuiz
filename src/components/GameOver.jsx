import Button from "./Button"

/* eslint-disable react/prop-types */
const GameOver = (props) => {
    const handleButton = (e) => {
        e.preventDefault()
        props.setBeginGame(false)
    }

    return (
        <>
            <div>GAME OVER</div>    
            <div>your final score is {props.score}</div>
            <Button onClick={handleButton} name="Back To Start" />
        </>
    )
}

export default GameOver