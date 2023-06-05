import { useState } from 'react'
import './App.css'
import QuizCard from './components/QuizCard'
import shuffleArray from './components/shuffleArray'
import hunters from './data/hunters'
import ScoreBoard from './components/ScoreBoard'
import GameOver from './components/GameOver'
import RoundResult from './components/RoundResult'

function App() {
  const [modalMessage, setModalMessage] = useState('')
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
        if (selectedHunter != undefined && otherChoicesArray.length < 3) { //I don't want to waste possible wrong answers
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


  const handleModal = (message) => {
    setModalMessage(message)
    document.getElementById('toto').showModal()
    setTimeout(() => {
      document.getElementById('toto').close()
    }, "1000")
  }

  const handleClick = (e) => {
    e.preventDefault()
    const answerId = e.target.id
    
    if (answerId === currentHunterList.selectedHunter.id) {
      console.log('you won')
      handleModal('you won')
      setScore((prev) => prev + 1)
    } else {
      handleModal('you suck')
      console.log('not correct answer')
    }
    if (questionNumber > 5) { // MODIFY THIS ONCE I HAVE MORE COMPLETE DATA !!!
      setGameOver(true)
    } else {
      setQuestionNumber((prev) => prev + 1)
      setCurrentHunterList(selectionOfHunters)
    }
  }

  return (
    <>
      <div className="mother">
        {!gameOver && <ScoreBoard score={score} />}
        {!gameOver && <QuizCard data={currentHunterList} onClick={handleClick} questionNumber={questionNumber} />}
        {gameOver && <GameOver score={score} />}
        <RoundResult message={modalMessage} />
      </div>
    </>
  )
}

export default App
