
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// loop for ...
for (let i = 1; i <= numbers.length; i++) {
     // output number
     console.log(i);
}


// it will stop until meets false statement
// always true while loop ...process after execute

// true or false it will execute once a time
// do while loop ...process before execute
     


function submit(value) {
     
     do {
          value = prompt("Enter your age: ");
          if (isNaN(value)) {
               console.error("is not a number", value);    
          }
          
          else if (value === '') {
               console.error("Input value to continue!!!");
          }
          
          else {
               console.log(`Numbers: ${value}`);
          }
     }
          // hit false statement
     // condition
     while (!isNaN(value));     
}





// loop for in ... find index
// for (num in numbers) {
//      // output string
//      console.log(num);
// }


// loop for of ...find array
// const arr = ["Apple", "Banana", "Cherry", "Deam"];
// for (num of arr) {
//      let text = '';
//      console.log(text += `Fruits: ${num}`);
     
// }

