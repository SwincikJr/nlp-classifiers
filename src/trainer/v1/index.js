class Trainer {
    
    constructor(bag) {
        this._bag = bag
    }

    _totalize(documents) {
        
        let totalOfFrequences = 0
        const totalOfDocuments = {}
        const totalOfTokens = new Array(this._bag._vocabulary.length)

        Object.getOwnPropertyNames(this._bag._collection).map(className => {
            totalOfDocuments[className] = 0
            documents[className].map((frequence, index) => {
                totalOfFrequences += frequence
                totalOfDocuments[className] += frequence
                totalOfTokens[index] = (totalOfTokens[index] || 0) + frequence
            })
        })

        return {
            totalOfFrequences,
            totalOfTokens,
            totalOfDocuments
        }
    }

    trainNaiveBayes() {

        const documents = { } 

        this._bag._vocabulary.map((token, index) => {
            Object.getOwnPropertyNames(this._bag._collection).map(className => {
                if (!documents[className]) documents[className] = new Array(this._bag._vocabulary.length)
                documents[className][index] = this._bag._collection[className].filter(t => t === token).length + 1
            })
        })

        const consolidated = this._totalize(documents)

        return { documents, consolidated }
    }
}

module.exports = Trainer
