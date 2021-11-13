const tokenizer = require("../tokenizer")
const { probabilityOfClassGivedTokenizedPhrase } = require("./naiveBayes")

module.exports = {
    NaiveBayes(phrase, bag) {
        
        const tokenizedPhrase = tokenizer(phrase)

        const input = bag._vocabulary.map(token => {
            const indexOfTokenOnPhrase = tokenizedPhrase.indexOf(token)
            return indexOfTokenOnPhrase > -1 ? 1 : 0
        })
        
        let probabilities = Object.getOwnPropertyNames(bag._documents).map(className => {
            return {
                className,
                probability: probabilityOfClassGivedTokenizedPhrase(
                    className, 
                    input, 
                    bag._documents,
                    bag._totals
                )
            }
        })

        return probabilities.sort((a, b) => { 
            if (a.probability < b.probability) return 1;
            if (a.probability > b.probability) return -1;
            return 0;
        })
    }
}
