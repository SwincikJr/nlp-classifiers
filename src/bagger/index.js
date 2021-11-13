const tokenizer = require("../tokenizer")

class Bag {

    constructor() {
        this._vocabulary = []
        this._documents = {}
        this._collection = {}
        this._totals = null
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

    calculateTotals() {

        let totalOfFrequences = 0
        const totalOfTokens = new Array(this._vocabulary.length)
        const totalOfDocuments = {}

        Object.getOwnPropertyNames(this._collection).map(className => {
            totalOfDocuments[className] = 0
            this._documents[className].map((frequence, index) => {
                totalOfFrequences += frequence
                totalOfDocuments[className] += frequence
                totalOfTokens[index] = (totalOfTokens[index] || 0) + frequence
            })
        })

        this._totals = {
            totalOfFrequences,
            totalOfTokens,
            totalOfDocuments
        }
    }

    train() {
        this._vocabulary.map((token, index) => {
            Object.getOwnPropertyNames(this._collection).map(className => {
                if (!this._documents[className]) this._documents[className] = new Array(this._vocabulary.length)
                this._documents[className][index] = this._collection[className].filter(t => t === token).length + 1
            })
        })

        this.calculateTotals()
    }
}

module.exports = Bag
