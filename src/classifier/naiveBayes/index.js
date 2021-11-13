exports.probabilityOfClassGivedTokenizedPhrase = (className, input, documents, totals) => {
    
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
