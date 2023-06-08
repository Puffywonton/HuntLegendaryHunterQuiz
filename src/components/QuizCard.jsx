/* eslint-disable react/prop-types */
import classes from './QuizCard.module.css'

const QuizCard = (props) => {
    const answers = props.data.hunterChoicesArray.map((answer) => {
        return (
            <li onClick={props.onClick} className={classes.option} key={answer.id} id={answer.id}>{answer.name}</li>    
        )
    })

    return (
        <div className={classes.card}>
          <img
            src={props.data.selectedHunter.url}
            className={classes.image}
            alt="A Random Legendary Hunter"
          />
          <div className={classes.question}>Question {props.questionNumber}/{props.numberOfQuestions} -- Who is this hunter?</div>
            <ul className={classes.optionContainer}>
                {answers}
            </ul>          
        </div>           
    )
}

export default QuizCard