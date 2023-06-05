import { useState } from 'react'
import './App.css'
import QuizCard from './components/QuizCard'
import shuffleArray from './components/shuffleArray'
import hunters from './data/hunters'

function App() {
  const [usedHunters, setUsedHunter] = useState([])
  // const [currentHunterList, setCurrentHunterList] = useState({})
  const [questionNumber, setQuestionNumber] = useState(1)
  const totoShuffledArray = shuffleArray(hunters)


  const selectionOfHunters = () => {
    const shuffledArray = structuredClone(totoShuffledArray)
    console.log('initial array',shuffledArray)
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
    let hunterChoicesArray = shuffleArray([selectedHunter, ...otherChoicesArray])
    return ({selectedHunter, hunterChoicesArray})
  }
  const [currentHunterList, setCurrentHunterList] = useState(selectionOfHunters)

  const handleClick = (e) => {
    e.preventDefault()
    const answerId = e.target.id
    if (answerId === currentHunterList.selectedHunter.id) {
      console.log('you won')
      setUsedHunter([...usedHunters, currentHunterList.selectedHunter])
      setQuestionNumber((prev) => prev + 1)
      console.log(usedHunters)
      setCurrentHunterList(selectionOfHunters)
    } else {
      console.log('you lose')
    }
  }
  console.log(currentHunterList)
  return (
    <>
      <div className="mother">
        <QuizCard data={currentHunterList} onClick={handleClick} questionNumber={questionNumber} />
      </div>
    </>
  )
}

export default App
