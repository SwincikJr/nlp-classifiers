const tokenizer = require("../../tokenizer")

class Bag {

    constructor() {
        this._vocabulary = []
        this._collection = {}
    }

    addClassSample(className, phrase) {
        
        const tokenizedPhrase = tokenizer(phrase)

        const classSamples = this._collection[className]

        this._collection[className] = classSamples ? classSamples.concat(tokenizedPhrase) : tokenizedPhrase

        tokenizedPhrase.map(token => {
            if (!this._vocabulary.find(v => v === token))
                this._vocabulary.push(token)
        })
    }
}

module.exports = Bag
