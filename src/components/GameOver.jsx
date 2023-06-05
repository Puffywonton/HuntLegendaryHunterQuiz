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
            <button onClick={handleButton}>Back To Start</button>
        </>
    )
}

export default GameOver