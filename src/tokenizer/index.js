const { cleanPunctuations, splitTokens } = require("./functions")

module.exports = phrase => {
    const phraseWithoutPunctuation = cleanPunctuations(phrase)
    return splitTokens(phraseWithoutPunctuation)
}
