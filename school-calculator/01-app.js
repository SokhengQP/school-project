/* 
Implicit type changed the data type follow to data value;

TypeScript is to specified JavaScript's Data Type     
     Data Types && Data Structure:
*/     

let num1 = "10";
let num2 = 100;

const sum = num1 - num2;
const multiply = num1 * num2;
const divide = num2 / num1;

console.log(`Sum: ${sum} \nMultiply: ${multiply} \nDivide: ${divide}`);

// Primitive Value (any variable that declare using keyword [const])


const obj = {
     st : 'apple',
     nd: 'cherry',
     rd: ["UFC", "Ballandor"]
};


// Destructuring Array object
const { st, nd, rd } = obj;
console.log(st, nd, rd[0], rd[1]);

// Get Data from input
function fetchData() {
     let myH2 = document.querySelector('.myH2');
     let values = document.querySelector('.getData').value;
     myH2.innerHTML = `My text: ${values}`;
}

