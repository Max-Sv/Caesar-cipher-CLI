
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const ENCRYPTION = 'encode';

const getAlgorithm = (text, shift, action = ENCRYPTION) => {
    if (action !== ENCRYPTION) {
        shift *= -1;
    }
    return text.split('').map(symbol => {
        const lowerCaseOfSymbol = symbol.toLowerCase();
        const index = ALPHABET.indexOf(lowerCaseOfSymbol);
        if (index !== -1) {
            const isLowerCase = symbol === lowerCaseOfSymbol? true: false;
            let shiftedIndex = (index + shift) % ALPHABET.length;
            if (shiftedIndex < 0) {
                shiftedIndex += ALPHABET.length;
            }
            let newSymbol = ALPHABET[shiftedIndex];
            if (!isLowerCase) {
                newSymbol = newSymbol.toUpperCase();
            }
            return newSymbol;
        } else {
            return symbol;
        }
    }).join('');
};

module.exports = {getAlgorithm};