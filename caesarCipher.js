function caesarCipher(string, shift){

    // Declaration of scoped variables
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let resultString = "";
    let alphabetIndex, shiftedIndex, ciphedIndex, ciphedLetter;

    // Check if the first argument is a string
    if(typeof string !== "string"){
        console.log(`The first argument is '${typeof string}', only strings are allowed.`);
        return "Only strings are allowed as first argument";
    };

    // Check if second argument is correct setted and if not assign +1 to it
    if(typeof shift !==  "number") {
        typeof shift === "undefined" 
            ? console.log("The second argument is setted to +1 automatically") 
            : console.log(`The second argument is '${typeof shift}'. Only numbers are allowed. Shift is setted to +1`);
        shift = 1;
    };

    // A larger shift than the alpabeth.length doesnt make any sense at all
    if(shift > alphabet.length || shift < -alphabet.length){
        console.log(`For the second argument (shift) only a maximum value of ${alphabet.length} / ${-alphabet.length} is allowed. Yours have ${shift}. Shift is set to the default value of +1.`);
        shift = 1;
    };

    // Loop trough string
    for(let x = 0; x < string.length; x++){
        // Get the index of string[x] in alphabet 
        alphabetIndex =  alphabet.indexOf(string[x]);
        // Check for punctation: If string[x] is not a letter from the alphabet string, alphabet.indexOf returns -1 and so it is a punctation. Just put it to the string as it is in the else statement.
        if(alphabetIndex !== -1){   
            // Get Index putted together from the shift and the index of the string[x] char in the alphabet
            shiftedIndex = alphabetIndex + shift;

            // If the shifted letter is after the last letter of the alphabet (z), subtract alphabet.length to get to the start of the alphabet
            shiftedIndex > alphabet.length 
                ? ciphedIndex = shiftedIndex - alphabet.length
                : ciphedIndex = shiftedIndex;

            // If the shifted letter is before the first letter of the alphabet (a), add alphabet.length to get to the end of the alphabet
            alphabetIndex + shift < 0
            ? ciphedIndex = shiftedIndex + alphabet.length
            : ciphedIndex = shiftedIndex;

            // If the shifte letter is in between the regular alphabet, leave it as it is and assign it to the ciphedIndex variable
            if(shiftedIndex > 0 && shiftedIndex < alphabet.length)
            ciphedIndex  = shiftedIndex;

            // With the new, correct index get the corresponend letter 
            ciphedLetter = alphabet.charAt(ciphedIndex);

            // Put the letter to the new string
            resultString += ciphedLetter;
        } else {
            // If string[x] is a punctation, add it to the new string as it is
            resultString += string[x];
        };
    };

    return resultString;
};

module.exports = caesarCipher;
