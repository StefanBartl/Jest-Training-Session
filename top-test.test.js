// ! === Testing capitlize strings  ====
const capitalizeModule = require('./capitalize');

test('Capitalize first letter of a string', () => {
    expect(capitalizeModule("test string")).toBe("Test string");
  });

// ! === Testing reverse strings  ====
const reverseStringModule = require('./reverseString');

test('Reverse a given string', ()=>{
    expect(reverseStringModule("Test")).toBe("tseT");
});

// ! === Testing ordinary calculator functions  ====
const calculatorModule = require('./calculator');

test('Add two numbers together', ()=>{
    expect(calculatorModule.add(2, 4)).toBe(6);
});

test('Subtract two numbers from each other', ()=>{
  expect(calculatorModule.subtract(4, 2)).toBe(2);
});

test('Mulitply two numbers', ()=>{
  expect(calculatorModule.multiply(4, 2)).toBe(8);
});

test('Divide two numbers', ()=>{
  expect(calculatorModule.divide(6, 2)).toBe(3);
});

// ! === Testing to ceasar cipher strings  ====
const caesarCipherModule = require('./caesarCipher');

test('A caesarCipher function that takes a string and returns it with each character “shifted”.', ()=>{
   expect(caesarCipherModule("abc", 1)).toBe("bcd");
});

// ! === Testing analyze arrays with numbers  ====
const analyzeArrayModule = require('./analyzeArray');

test('An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.', () => {
  expect(analyzeArrayModule([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});