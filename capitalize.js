// A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize (string) {
    if(typeof string !== 'string'){
        // console.log(`The argument ${string} is a ${typeof string}. Only 'strings' are allowed.`);
        return `The argument ${string} is a ${typeof string}. Only 'strings' are allowed.`;
    };

    // Get the first letter of the string
    const firstLetter = string[0];
    // Capitalize it
    const firstLetterCapitalized = firstLetter.toUpperCase();
    // Slice the first letter from the string away and than add firstLetterCapitalized and the sliced string together
    const result = firstLetterCapitalized + string.slice(1);
    // console.log(`Result: ${result}`);
    return result
};
module.exports = capitalize;