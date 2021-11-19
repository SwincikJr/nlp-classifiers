class Trainer {

    constructor(bag) {
        this._bag = bag
    }

    _addOneSomething() {
        Object.getOwnPropertyNames(this._bag._collection).map(className => {
            this._bag._collection[className].push(this._bag._vocabulary.map(_ => 0))
            this._bag._collection[className].push(this._bag._vocabulary.map(_ => 1))
        })
    }

    _getTotalOfCollections() {
        return Object.getOwnPropertyNames(this._bag._collection).reduce((previous, current) => {
            return previous + this._bag._collection[current].length 
        }, 0)
    }

    trainNaiveBayes() {

        const consolidated = {  }

        this._addOneSomething()

        const totalOfDocuments = this._getTotalOfCollections()

        Object.getOwnPropertyNames(this._bag._collection).map(className => {

            const totalOfClass = this._bag._collection[className].length

            const pClass = totalOfClass / totalOfDocuments

            const pTokens = []

            this._bag._vocabulary.map((_, index) => {

                // t = 1
                const totalOfTokenOccourence = 
                    this._bag._collection[className].filter(document => document[index] == 1).length

                const probabilityOfTokenGivedClass = totalOfTokenOccourence / totalOfClass

                // t = 0
                const complement = 1 - probabilityOfTokenGivedClass

                pTokens.push([complement, probabilityOfTokenGivedClass])
            })

            consolidated[className] = {
                pClass,
                pTokens
            }
        })

        return consolidated
    }
}

module.exports = Trainer