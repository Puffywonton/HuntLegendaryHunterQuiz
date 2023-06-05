/* eslint-disable react/prop-types */
import classes from './QuizCard.module.css'

const QuizCard = (props) => {
    // console.log("test", props)
    // console.log("props", props.data.hunterChoicesArray)
    // console.log("props", props.data.selectedHunter)
    
    const answers = props.data.hunterChoicesArray.map((answer) => {
        return (
            <button onClick={props.onClick} className={classes.option} key={answer.id} id={answer.id}>{answer.name}</button>    
        )
    })

    return (
        <div className={classes.card}>
          <img
            src={props.data.selectedHunter.url}
            className={classes.image}
            alt="A Legendary Hunter"
          />
          <div className={classes.question}>Question #{props.questionNumber} -- Who is this hunter?</div>
            <div className={classes.optionContainer}>
                {answers}
            </div>          
        </div>           
    )
}

export default QuizCard