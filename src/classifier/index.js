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
    v1(phrase, model, bag) {
        
        const input = normalizeInput(phrase, bag)
        
        let probabilities = Object.getOwnPropertyNames(model.documents).map(className => {
            return {
                className,
                probability: probabilityOfClassGivedTokenizedPhraseV1(
                    className, 
                    input, 
                    model.documents,
                    model.consolidated
                )
            }
        })

        return probabilities.sort((a, b) => { 
            if (a.probability < b.probability) return 1;
            if (a.probability > b.probability) return -1;
            return 0;
        })
    },

    v2(phrase, model, bag) {
        const input = normalizeInput(phrase, bag)
        let probabilities = Object.getOwnPropertyNames(model).map(className => {
            return {
                className,
                probability: probabilityOfClassGivedTokenizedPhraseV2(
                    className, 
                    input,
                    model
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
