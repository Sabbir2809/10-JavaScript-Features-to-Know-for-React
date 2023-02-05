/*
  Topic: Destructuring Assignment
  1. It is a feature that it possible to extract values from arrays or objects with ease.
*/

// object
const fullName = {
  first: 'Sabbir',
  last: 'Hossain',
};

const { first, last } = fullName;
const { first: f, last: l } = fullName;
console.log(first, last);
console.log(f, l);

// array
const info = ['Sabu', 'Male', 24, 'A+', '192-15-2809'];

const [nickName, , age, , id] = info;
console.log(nickName, age, id);
