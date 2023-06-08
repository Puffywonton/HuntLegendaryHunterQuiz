import { useState } from 'react'
import './App.css'
import QuizCard from './components/QuizCard'
import ScoreBoard from './components/ScoreBoard'
import GameOver from './components/GameOver'
import RoundResult from './components/RoundResult'
import GameMenu from './components/GameMenu'
import quizQuestionsGenerator from './logic/quizQuestionsGenerator'

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [modalMessage, setModalMessage] = useState({})
  const [numberOfQuestions, setNumberOfQuestions] = useState(1)
  const [beginGame, setBeginGame] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const questions = quizQuestionsGenerator(numberOfQuestions)
  const questionNumber = activeQuestion + 1
  
  const loadNextQuestion = () => {
    if (questionNumber > numberOfQuestions - 1) {
      setGameOver(true)
    } else {
      setActiveQuestion((prev) => prev + 1)
    }
  }

  const handleModal = (message, color) => {
    setModalMessage({ message: message, color: color })
    document.getElementById('toto').showModal()
    setTimeout(() => {
      document.getElementById('toto').close()
    }, "1250")
  }

  const handleAnswerClick = (e) => {
    e.preventDefault()
    const answerId = e.target.id
    console.log("you clicked", answerId)
    let message
    let color
    if (answerId === questions[activeQuestion].selectedHunter.id) {
      message = 'You Were Correct'
      color = 'white'
      setScore((prev) => prev + 1)
    } else {
      message = 'You Were Wrong'
      color = 'red'
    }
    handleModal(message, color)
    loadNextQuestion()
  }

  return (
    <>
      <div className="mother">
        {!beginGame && <GameMenu setActiveQuestion={setActiveQuestion} setBeginGame={setBeginGame} setNumberOfQuestions={setNumberOfQuestions} setGameOver={setGameOver} setScore={setScore}/>}
        {!gameOver && beginGame ? <ScoreBoard score={score} /> : ''}
        {!gameOver && beginGame ? <QuizCard key={questionNumber} data={questions[activeQuestion]} numberOfQuestions={numberOfQuestions} questionNumber={questionNumber} onClick={handleAnswerClick} /> : ''}
        {gameOver && beginGame ? <GameOver score={score} setBeginGame={setBeginGame} /> : ''}
        <RoundResult data={modalMessage} />
      </div>
    </>
  )
}

export default App
