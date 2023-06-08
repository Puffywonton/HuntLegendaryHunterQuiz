import shuffleArray from "../components/shuffleArray.js"
import hunters from "../data/hunters.js"

const quizQuestionsGenerator = (numberOfQuestions) => {
    const usedHuntersArray = []
    const outputArray = []
    let n = 0
    while (n < numberOfQuestions) {
        let shuffledArray = structuredClone(shuffleArray(hunters))
        let selectedHunter
        let found = ""
        const otherChoicesArray = []
        while (found != undefined) {
            if (selectedHunter != undefined && otherChoicesArray.length < 3) { //I don't want to waste possible wrong answers
                otherChoicesArray.push(selectedHunter)
            }
            selectedHunter = shuffledArray.shift()
            found = usedHuntersArray.find(element => element.name === selectedHunter.name)
        }
        while (otherChoicesArray.length < 3) {
            let tempHunter = shuffledArray.shift()
            otherChoicesArray.push(tempHunter)
        }
        usedHuntersArray.push(selectedHunter)
        let hunterChoicesArray = shuffleArray([selectedHunter, ...otherChoicesArray])
        outputArray.push({selectedHunter, hunterChoicesArray})
        n++
    }
    return(outputArray)
}

export default quizQuestionsGenerator