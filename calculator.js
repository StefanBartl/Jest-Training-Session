// A calculator object that contains functions for the basic operations: add, subtract, divide, 
//and multiply. Each of these functions should take two numbers and return the correct calculation.

// Test for valid number arguments rather than strings, null, undefined...
const validArguments = (a, b)=>{
    if(typeof a !== 'number'  || typeof b !== 'number'){
        return false;
    } else {
        return true;
    };
};

const add  = (a, b)=>{
  if(validArguments(a, b)){
      return a + b;
  };
  return "Only numbers as arguments are allowed.";
};

const subtract = (a, b)=>{
    if(validArguments(a, b)){
        return a - b;
    };
    return "Only numbers as arguments are allowed.";
};

const multiply = (a, b)=>{
    if(validArguments(a, b)){
        return a * b;
    };
    return "Only numbers as arguments are allowed.";
};

const divide = (a, b)=>{
    if(validArguments(a, b)){
        return a / b;
    };
    return "Only numbers as arguments are allowed.";
};

// Create the calculator object with the 4 functions
const calculator = {
    add,
    subtract,
    multiply,
    divide
};

module.exports = calculator;