import hunters from "../data/hunters"
import classes from './QuizCard.module.css'
import shuffleArray from "./shuffleArray"


//1. import all hunters (i need to add more hunters)


//2. randomly select 4 (my current data list gives me four)
const selectionOfHunters = () => {
    const shuffledArray = shuffleArray(hunters)
    const selectionArray = shuffledArray.slice(0, 4);
    return(selectionArray)
}
//3. randomly pick 1 (for the correct answer)
//4. remember the correct answer somewhere
//      and add the name with the 3 other names for the possible answers
const QuizCard = () => {
    const selectionArray = selectionOfHunters()
    const correctAnswer = selectionArray[Math.floor(Math.random()*4)]
    console.log(correctAnswer, 'selected')
    
    const answerArray = shuffleArray(selectionArray)
    console.log("shuffled", answerArray)

    const answers = answerArray.map((answer) => {
        return (
            <button className={classes.option} key={answer.id} id={answer.id}>{answer.name}</button>    
        )
    })
    console.log('answers', answers)

    return (
        <div className={classes.card}>
          <img
            src={correctAnswer.url}
            className={classes.image}
            alt="A Legendary Hunter"
          />
          <div className={classes.question}>Question #1 -- Who is this hunter?</div>
            <div className={classes.optionContainer}>
                {answers}
            </div>          
        </div>            
    )
}

export default QuizCard