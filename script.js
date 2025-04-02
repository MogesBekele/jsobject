const header = document.querySelector('header');

let object = {
  name: 'moges',
  age: 28,
  emial:'mogesbekele32@gmail.com',
  address: {
    city: 'Addis Ababa',
    country: 'Ethiopia'
  },
  hobbies: ['reading', 'traveling', 'coding'],
}
const fruits = {Bananas:300, Oranges:200, Apples:500};

const myMap = new Map(Object.entries(fruits));

console.log(myMap)


console.log(Object.keys(object))// return the keys values from the object array 
console.log(Object.entries(object)) //return the array of the objects
console.log(Object.values(object)) // return the values of the object


