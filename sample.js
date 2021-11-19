// const Classifier = require('./index')

// const classifier = new Classifier(1)

// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t1")
// classifier.addClassSample("c1", "t2")

// classifier.addClassSample("c2", "t1")
// classifier.addClassSample("c2", "t1")
// classifier.addClassSample("c2", "t1")
// classifier.addClassSample("c2", "t2")
// classifier.addClassSample("c2", "t2")
// classifier.addClassSample("c2", "t3")
// classifier.addClassSample("c2", "t3")
// classifier.addClassSample("c2", "t3")
// classifier.addClassSample("c2", "t3")
// classifier.addClassSample("c2", "t3")
// classifier.addClassSample("c2", "t3")

// classifier.addClassSample("c3", "t1")
// classifier.addClassSample("c3", "t3")
// classifier.addClassSample("c3", "t3")
// classifier.addClassSample("c3", "t3")
// classifier.addClassSample("c3", "t3")
// classifier.addClassSample("c3", "t3")


// classifier.train()

// const ranking = classifier.classify("t1 t3")

// console.log(ranking)



////////////////////////////////////////////////////
// const Classifier = require('./index')

// const classifier = new Classifier()

// classifier.addClassSample("1", "t1")
// classifier.addClassSample("2", "t2")

// classifier.train()

// const ranking = classifier.classify("t1")

// console.log(ranking)

///////////////////////////////////////////////////////////////////////




const Classifier = require('./index')

const classifier1 = new Classifier(1)

classifier1.addClassSample('boleto', 'Como faço para pegar a segunda via do meu boleto?')
classifier1.addClassSample('boleto', 'Preciso de outro boleto')
classifier1.addClassSample('boleto', 'Preciso de um boleto novo')
classifier1.addClassSample('boleto', '2º via de boleto')
classifier1.addClassSample('boleto', 'perdi meu boleto')
classifier1.addClassSample('boleto', 'segunda via de boleto')

classifier1.addClassSample('comprar', 'gostaria de um novo veículo')
classifier1.addClassSample('comprar', 'quanto custa um carro?')
classifier1.addClassSample('comprar', 'quanto sairia um veículo usado?')
classifier1.addClassSample('comprar', 'quero comprar um carro novo')
classifier1.addClassSample('comprar', 'qual o preço do veículo?')

classifier1.train()

const novafrase1 = 'como posso obter um boleto novo?'

const ranking1 = classifier1.classify(novafrase1)
console.log('V1:')
console.log(ranking1)

/////////////////////////////////////////////////////////////////

const classifier2 = new Classifier()

classifier2.addClassSample('boleto', 'Como faço para pegar a segunda via do meu boleto?')
classifier2.addClassSample('boleto', 'Preciso de outro boleto')
classifier2.addClassSample('boleto', 'Preciso de um boleto novo')
classifier2.addClassSample('boleto', '2º via de boleto')
classifier2.addClassSample('boleto', 'perdi meu boleto')
classifier2.addClassSample('boleto', 'segunda via de boleto')

classifier2.addClassSample('comprar', 'gostaria de um novo veículo')
classifier2.addClassSample('comprar', 'quanto custa um carro?')
classifier2.addClassSample('comprar', 'quanto sairia um veículo usado?')
classifier2.addClassSample('comprar', 'quero comprar um carro novo')
classifier2.addClassSample('comprar', 'qual o preço do veículo?')

classifier2.train()

const novafrase2 = 'como posso obter um boleto novo?'

const ranking2 = classifier2.classify(novafrase2)

console.log('V2:')
console.log(ranking2)