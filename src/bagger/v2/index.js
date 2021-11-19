const tokenizer = require('../../tokenizer')

class Bag {
    constructor() {
        this._vocabulary = []
        this._collection = {}
    }

    _normalizePreviousSamples(start, end) {
        Object.getOwnPropertyNames(this._collection).map(className => {
            this._collection[className].map(document => {
                for(let i = start; i < end; i++) document.push(0)
            })
        })
    }

    addClassSample(className, phrase) {

        if (!this._collection[className]) this._collection[className] = []

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

        this._collection[className].push(newDocument)
    }
}

module.exports = Bag
