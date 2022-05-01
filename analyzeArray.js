//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

function analyzeArray(arr){
    
    // Check array for other types than numbers
    arr.forEach(element => {
       if(typeof element !== 'number'){
           // console.log(`The element ${element} is a ${typeof element}. Only 'number' are allowed.`);
           return `The element ${element} is a ${typeof element}. Only 'number' are allowed.`;
       }; 
    });
    
   // Calculate total
   let arrTotal = 0;
   arr.forEach(element => {
      arrTotal += element; 
   });
   // Calculate average 
    averageValue = arrTotal / arr.length;
    // Calculate min
    minValue = Math.min(...arr);
    // Calculate max
   maxValue = Math.max(...arr);
   // Get length
   arrLength = arr.length;

    result =  {
        average: averageValue,
        min: minValue,
        max: maxValue,
        length: arrLength
    }

    console.log(result);
    return result
};
module.exports = analyzeArray;