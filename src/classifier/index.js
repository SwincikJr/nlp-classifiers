const tokenizer = require("../tokenizer")
const { probabilityOfClassGivedTokenizedPhraseV1, probabilityOfClassGivedTokenizedPhraseV2 } = require("./naiveBayes")

const normalizeInput = (phrase, bag) => {
    const tokenizedPhrase = tokenizer(phrase)
    return bag._vocabulary.map(token => {
        const indexOfTokenOnPhrase = tokenizedPhrase.indexOf(token)
        return indexOfTokenOnPhrase > -1 ? 1 : 0
    })
}

module.exports = {
    NaiveBayesV1(phrase, bag) {
        
        const input = normalizeInput(phrase, bag)
        
        let probabilities = Object.getOwnPropertyNames(bag._documents).map(className => {
            return {
                className,
                probability: probabilityOfClassGivedTokenizedPhraseV1(
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
    },

    NaiveBayesV2(phrase, bag) {
        const input = normalizeInput(phrase, bag)
        let probabilities = Object.getOwnPropertyNames(bag._totals).map(className => {
            return {
                className,
                probability: probabilityOfClassGivedTokenizedPhraseV2(
                    className, 
                    input,
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
