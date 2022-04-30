const capitalizeModule = require('./capitalize');

test('Capitalize first letter of a string', () => {
    expect(capitalizeModule("test string")).toBe("Test string");
  });


const reverseStringModule = require('./reverseString');

test('Reverse a given string', ()=>{
    expect(reverseStringModule("Test")).toBe("tseT");
});


// const calculatorModule = require('./calculator');

// test('', ()=>{
//     expect(calculatorModule("")).toBe("");
// });

// const caesarCipherModule = require('./caesarCipher');

// test('', ()=>{
//     expect(caesarCipherModule("")).toBe("");
// });

// const analyzeArrayModule = require('./analyzeArray');

// test('', ()=>{
//     expect(analyzeArrayModule("")).toBe("");
// });