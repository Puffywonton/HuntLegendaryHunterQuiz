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
            <button onClick={handleStart}>Begin Game</button>
        </>
        
    )
}

export default GameMenu