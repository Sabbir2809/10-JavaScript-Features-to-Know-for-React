/*
  Topic: Optional Chaining
  1. Represented by (?.) and provides a safe way to access nested object properties, even if an intermediate property doesn't exist.
*/

// object
const person = {
  name: 'Sabbir Hossain',
  details: {
    age: 24,
    address: {
      city: 'Dhaka',
    },
  },
};
console.log(person?.details?.address?.city);

// array
const data = {
  name: 'Sabu',
  favoriteLanguage: [
    {
      firstLanguage: 'JavaScript',
    },
    {
      secondLanguage: 'C++',
    },
  ],
};
console.log(data?.favoriteLanguage?.[0]?.firstLanguage);
