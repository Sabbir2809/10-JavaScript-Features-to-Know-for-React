/*
  Topic: Arrow Function
*/

// no parameter arrow function
const greeting = () => 'Hi, Hello';
console.log(greeting());

// parameter based arrow function
const addTwoNumber = (a, b) => a + b;
console.log(addTwoNumber(2, 2));

// parameter based arrow function
const oddEvenNumber = (number) => {
  if (number % 2 === 0) {
    console.log(`Even Number: ${number}`);
  } else {
    console.log(`Odd Number: ${number}`);
  }
};
oddEvenNumber(0);
