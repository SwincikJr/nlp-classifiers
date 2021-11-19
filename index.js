const { v1: Bag1, v2: Bag2 } = require('./src/bagger')
const { v1: Trainer1, v2: Trainer2 } = require('./src/trainer')
const { v1: NaiveBayes1, v2: NaiveBayes2  } = require('./src/classifier')

module.exports = class Classifier {
    constructor(version = 2) {

        if (version == 1) {
            
            this._bag = new Bag1()
            this._trainer = new Trainer1(this._bag)

        } else if (version == 2) {

            this._bag = new Bag2()
            this._trainer = new Trainer2(this._bag)

        } else {

            throw new Error('Versão inválida')
        }

        this._model = null
        this._version = version

    }

    addClassSample(className, phrase) {
        this._bag.addClassSample(className, phrase)
    }

    train() {
        this._model = this._trainer.trainNaiveBayes()
    }

    classify(phrase) {
        if (this._version == 1) return NaiveBayes1(phrase, this._model, this._bag)
        return NaiveBayes2(phrase, this._model, this._bag)
    }
}
