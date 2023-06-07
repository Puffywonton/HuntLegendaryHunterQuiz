import { useState } from 'react'
import './App.css'
import QuizCard from './components/QuizCard'
import shuffleArray from './components/shuffleArray'
import hunters from './data/hunters'
import ScoreBoard from './components/ScoreBoard'
import GameOver from './components/GameOver'
import RoundResult from './components/RoundResult'
import GameMenu from './components/GameMenu'

function App() {
  const [modalMessage, setModalMessage] = useState({})
  const [numberOfQuestions, setNumberOfQuestions] = useState(6)
  const [beginGame, setBeginGame] = useState(false)
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

  const loadNextQuestion = () => {
    if (questionNumber > numberOfQuestions) {
      setGameOver(true)
    } else {
      setQuestionNumber((prev) => prev + 1)
    }
    setCurrentHunterList(selectionOfHunters)    
  }

  const handleModal = (message, color) => {
    setModalMessage({ message: message, color: color })
    document.getElementById('toto').showModal()
    setTimeout(() => {
      document.getElementById('toto').close()
      loadNextQuestion()
    }, "1250")
  }

  const handleAnswerClick = (e) => {
    e.preventDefault()
    const answerId = e.target.id
    if (answerId === currentHunterList.selectedHunter.id) {
      handleModal('You Are Correct', 'white')
      setScore((prev) => prev + 1)
    } else {
      handleModal('You Are Wrong', 'red')
    }
  }

  return (
    <>
      <div className="mother">
        {!beginGame && <GameMenu setQuestionNumber={setQuestionNumber} setBeginGame={setBeginGame} setNumberOfQuestions={setNumberOfQuestions} setGameOver={setGameOver} setScore={setScore} setUsedHunters={setUsedHunters} />}
        {!gameOver && beginGame ? <ScoreBoard score={score} /> : ''}
        {!gameOver && beginGame ? <QuizCard key={questionNumber} data={currentHunterList} onClick={handleAnswerClick} questionNumber={questionNumber} /> : ''}
        {gameOver && beginGame ? <GameOver score={score} setBeginGame={setBeginGame} /> : ''}
        <RoundResult data={modalMessage} />
      </div>
    </>
  )
}

export default App
