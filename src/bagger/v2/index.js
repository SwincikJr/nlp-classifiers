const tokenizer = require('../../tokenizer')

class Bag {
    constructor() {

        this._vocabulary = []

        this._documents = {}

        this._totals = {}

    }

    _normalizePreviousSamples(start, end) {
        Object.getOwnPropertyNames(this._documents).map(className => {
            this._documents[className].map(document => {
                for(let i = start; i < end; i++) document.push(0)
            })
        })
    }

    addClassSample(className, phrase) {

        if (!this._documents[className]) this._documents[className] = []

        const tokenized = tokenizer(phrase)

        const notInVocabulary = tokenized
            .filter((token, index) => {
                return this._vocabulary.indexOf(token) == -1
                    && tokenized.indexOf(token) == index
            })

        const oldVocabularyLength = this._vocabulary.length

        this._vocabulary = this._vocabulary.concat(notInVocabulary)

        const newVocabularyLength = this._vocabulary.length

        if (newVocabularyLength > oldVocabularyLength)
            this._normalizePreviousSamples(oldVocabularyLength, newVocabularyLength)

        const newDocument = []

        this._vocabulary.map(token => {
            if (tokenized.indexOf(token) > -1) newDocument.push(1)
            else newDocument.push(0)
        })

        this._documents[className].push(newDocument)

        return null
    }

    _getTotalOfDocuments() {
        return Object.getOwnPropertyNames(this._documents).reduce((previous, current) => {
            return previous + this._documents[current].length 
        }, 0)
    }

    _addOneSomething() {
        Object.getOwnPropertyNames(this._documents).map(className => {
            this._documents[className].push(this._vocabulary.map(_ => 0))
            this._documents[className].push(this._vocabulary.map(_ => 1))
        })
    }

    train() {

        this._addOneSomething()

        const totalOfDocuments = this._getTotalOfDocuments()

        Object.getOwnPropertyNames(this._documents).map(className => {

            const totalOfClass = this._documents[className].length

            const pClass = totalOfClass / totalOfDocuments

            const pTokens = []

            this._vocabulary.map((_, index) => {

                // t = 1
                const totalOfTokenOccourence = 
                    this._documents[className].filter(document => document[index] == 1).length

                const probabilityOfTokenGivedClass = totalOfTokenOccourence / totalOfClass

                // t = 0
                const complement = 1 - probabilityOfTokenGivedClass

                pTokens.push([complement, probabilityOfTokenGivedClass])
            })

            this._totals[className] = {
                pClass,
                pTokens
            }
        })
    }
}

module.exports = Bag
