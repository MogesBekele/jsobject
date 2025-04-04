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
const fruit = {Bananas:300, Oranges:200, Apples:500};

const myMap = new Map(Object.entries(fruit));

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];
console.log(myMap)// return the map object
console.log(Object.keys(object))// return the keys values from the object array
console.log(Object.entries(object)) //return the array of the objects
console.log(Object.values(object)) // return the values of the object

// Create an Array
const vegetable = [
  {name:"apples", quantity:300},
  {name:"bananas", quantity:500},
  {name:"oranges", quantity:200},
  {name:"kiwi", quantity:150}
];

// Callback function to Group Elements
function myCallback({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by Quantity
const result = Object.groupBy(vegetable, myCallback);

console.log(result);// the result

const myObj = Object.fromEntries(fruits);
console.log(myObj) // return the object from the array


const button = document.getElementById("button");

const changeColor = () => {
  const h1Element = document.getElementById("h1");

  if (h1Element) {
  
    h1Element.style.color = "blue";
  } else {
    h1.style.color = "blue";
  }
};

if (button) {
  button.addEventListener("click", changeColor);
} else {
  console.error("Element with ID 'button' not found.");
}

const paragraph = document.getElementsByTagName("p");

paragraph[0].style.color = "red";
paragraph[1].style.color = "blue";
paragraph[2].style.color = "green";
