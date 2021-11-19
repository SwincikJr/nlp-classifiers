exports.probabilityOfClassGivedTokenizedPhraseV1 = (className, input, documents, totals) => {
    
    const p = totals.totalOfDocuments[className] / totals.totalOfFrequences

    let productory = 1

    input.map((value, index) => {
        if (value) {
            const probabilityOfClassGivedToken = 
                documents[className][index]
                / totals.totalOfTokens[index]
    
            const probabilityOfToken =
                totals.totalOfTokens[index]
                / totals.totalOfFrequences
    
            productory *= ((probabilityOfClassGivedToken * probabilityOfToken) / p)
        }
    })

    return p * productory
}

exports.probabilityOfClassGivedTokenizedPhraseV2 = (className, input, totals) => {
    
    let p = totals[className].pClass

    input.map((value, index) => {
        p *= totals[className].pTokens[index][value]
    })

    return p
}
