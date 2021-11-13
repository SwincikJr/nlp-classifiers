const Bag = require('./src/bagger')
const classifier = require('./src/classifier')

const bag = new Bag()

bag.addClassSample('boleto', 'Como faço para pegar a segunda via do meu boleto?')
bag.addClassSample('boleto', 'Preciso de outro boleto')
bag.addClassSample('boleto', 'Preciso de um boleto novo')
bag.addClassSample('boleto', '2º via de boleto')
bag.addClassSample('boleto', 'perdi meu boleto')
bag.addClassSample('boleto', 'segunda via de boleto')

bag.addClassSample('comprar', 'gostaria de um novo veículo')
bag.addClassSample('comprar', 'quanto custa um carro?')
bag.addClassSample('comprar', 'quanto sairia um veículo usado?')
bag.addClassSample('comprar', 'quero comprar um carro novo')
bag.addClassSample('comprar', 'qual o preço do veículo?')

bag.train()

const novafrase = 'como posso obter um boleto novo?'

const ranking = classifier.NaiveBayes(novafrase, bag)

console.log(ranking)
