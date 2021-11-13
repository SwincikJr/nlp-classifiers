const { punctuationsRegex } = require("./constants");

exports.cleanPunctuations = phrase => phrase.replace(punctuationsRegex, "")

exports.splitTokens = phrase => phrase.split(' ').filter(t => t !== '').map(t => t.toLowerCase())
