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


console.log(Object.keys(object))
console.log(Object.entries(object)) //return the array of the objects


