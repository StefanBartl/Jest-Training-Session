// A function that takes a string and returns it reversed.

function reverseString (string){
    if(typeof string !== 'string'){
        // console.log(`The argument ${string} is a ${typeof string}. Only 'strings' are allowed.`);
        return `The argument ${string} is a ${typeof string}. Only 'strings' are allowed.`;
    };
    
    // Split the string into an array like object with "" between values, like ["a", "b", "3", "!"]......
    const splittedString = string.split("");
    // Reverse the string
    const reversedStringArray = splittedString.reverse();
    // FInally join the array like object by every "" together to get a string again
    const result = reversedStringArray.join("");
    // console.log(`Result: ${result}`);
    return result
};
module.exports = reverseString;