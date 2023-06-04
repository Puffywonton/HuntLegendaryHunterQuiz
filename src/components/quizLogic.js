const getRandomInt = () => {
    return Math.floor(Math.random() * 4);
}


const quizLogic = (array) => {
    //pick a hunter for question
    const correctAnswer = array[getRandomInt]
    return(correctAnswer)
    //pick 3 other possible answer + 1 real answer (the hunter in question)



}

export default quizLogic