const { v1: Bag1, v2: Bag2 } = require('./src/bagger')
const classifier = require('./src/classifier')

const bag1 = new Bag1()

bag1.addClassSample('boleto', 'Como faço para pegar a segunda via do meu boleto?')
bag1.addClassSample('boleto', 'Preciso de outro boleto')
bag1.addClassSample('boleto', 'Preciso de um boleto novo')
bag1.addClassSample('boleto', '2º via de boleto')
bag1.addClassSample('boleto', 'perdi meu boleto')
bag1.addClassSample('boleto', 'segunda via de boleto')

bag1.addClassSample('comprar', 'gostaria de um novo veículo')
bag1.addClassSample('comprar', 'quanto custa um carro?')
bag1.addClassSample('comprar', 'quanto sairia um veículo usado?')
bag1.addClassSample('comprar', 'quero comprar um carro novo')
bag1.addClassSample('comprar', 'qual o preço do veículo?')

bag1.train()

const novafrase1 = 'como posso obter um boleto novo?'

const ranking1 = classifier.NaiveBayesV1(novafrase1, bag1)
console.log('V1:')
console.log(ranking1)







const bag2 = new Bag2()

bag2.addClassSample('boleto', 'Como faço para pegar a segunda via do meu boleto?')
bag2.addClassSample('boleto', 'Preciso de outro boleto')
bag2.addClassSample('boleto', 'Preciso de um boleto novo')
bag2.addClassSample('boleto', '2º via de boleto')
bag2.addClassSample('boleto', 'perdi meu boleto')
bag2.addClassSample('boleto', 'segunda via de boleto')

bag2.addClassSample('comprar', 'gostaria de um novo veículo')
bag2.addClassSample('comprar', 'quanto custa um carro?')
bag2.addClassSample('comprar', 'quanto sairia um veículo usado?')
bag2.addClassSample('comprar', 'quero comprar um carro novo')
bag2.addClassSample('comprar', 'qual o preço do veículo?')

bag2.train()

const novafrase2 = 'como posso obter um boleto novo?'

const ranking2 = classifier.NaiveBayesV2(novafrase2, bag2)

console.log('V2:')
console.log(ranking2)
