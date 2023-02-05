/*
  Topic: let, const
  1. Variables declared are block scoped.
  2. All const declarations must be initialized & once initialized, you can't re-assign a new value.
*/

// let
let age;
age = 24; // re-assign
console.log(age);

// const
const fullName = 'Md. Sabbir Hossain'; // not re-assign
console.log(fullName);
