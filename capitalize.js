function capitalize (string) {
    const firstLetter = string[0];
    // console.log(`First letter: ${firstLetter}`);
    const firstLetterCapitalized = firstLetter.toUpperCase();
    // console.log(`First letter capitalized: ${firstLetterCapitalized}`);
    const result = firstLetterCapitalized + string.slice(1);
    // console.log(`Result: ${result}`);
    return result
};
module.exports = capitalize;