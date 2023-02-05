/*
  Topic: Nullish Coalescing Operator
  1. Helps you fallback to a default value if a value is null or undefined.
*/

const name = 0;
const useName = name ?? 'Guest';
console.log(useName);
