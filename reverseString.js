function reverseString (string){
    const splittedString = string.split("");
    // console.log(`Splitted string: ${splittedString}`);
    const reversedStringArray = splittedString.reverse();
    // console.log(`Reversed string array: ${reversedStringArray}`);
    const result = reversedStringArray.join("");
    // console.log(`Result: ${result}`);
    return result
};

module.exports = reverseString;