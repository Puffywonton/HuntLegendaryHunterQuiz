import { useState } from 'react'
import './App.css'
import QuizCard from './components/QuizCard'
import shuffleArray from './components/shuffleArray'
import hunters from './data/hunters'
import ScoreBoard from './components/ScoreBoard'
import GameOver from './components/GameOver'

function App() {
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [usedHunters, setUsedHunters] = useState([])
  const [questionNumber, setQuestionNumber] = useState(1)

  const selectionOfHunters = () => {
    const shuffledArray = structuredClone(shuffleArray(hunters))
    let selectedHunter
    let found = ""
    const otherChoicesArray = []
    while (found != undefined) {
        if (selectedHunter != undefined && otherChoicesArray.length < 3) {
            otherChoicesArray.push(selectedHunter)
        }
        selectedHunter = shuffledArray.shift()
        found = usedHunters.find(element => element.name === selectedHunter.name)
    }
    while (otherChoicesArray.length < 3) {
        let tempHunter = shuffledArray.shift()
        otherChoicesArray.push(tempHunter)
    }
    setUsedHunters([...usedHunters, selectedHunter])
    let hunterChoicesArray = shuffleArray([selectedHunter, ...otherChoicesArray])
    return ({selectedHunter, hunterChoicesArray})
  }
  const [currentHunterList, setCurrentHunterList] = useState(selectionOfHunters)

  const handleClick = (e) => {
    e.preventDefault()
    const answerId = e.target.id
    if (answerId === currentHunterList.selectedHunter.id) {
      console.log('you won')
      setScore((prev) => prev + 1)
      if (questionNumber > 5) {
        setGameOver(true)
      }
      setQuestionNumber((prev) => prev + 1)
      setCurrentHunterList(selectionOfHunters)
      console.log('usedHunters', usedHunters)
    } else {
      console.log('not correct answer')
    }
  }
  return (
    <>
      <div className="mother">
        {!gameOver && <ScoreBoard score={score} />}
        {!gameOver && <QuizCard data={currentHunterList} onClick={handleClick} questionNumber={questionNumber} />}
        {gameOver && <GameOver score={score} />}
      </div>
    </>
  )
}

export default App
