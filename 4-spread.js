/*
  Topic: Spread Syntax
  1. It is represented by three dots(...) & usually works on a collection of values or an iterable to be more precise.
*/

// array copy
const firstPart = ['1', '9', '2'];
const middlePart = ['1', '5'];
const arrCopy = [...firstPart, ...middlePart, '2', '8', '0', '9'];
console.log(arrCopy);

// object copy
const obj = {
  fullName: 'Md. Sabbir Hossain',
  age: 24,
  gender: 'Male',
};
const objCopy = { ...obj, varsity: 'DIU' };
console.log(objCopy);
