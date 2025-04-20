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

const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Hello, my name is John



//DOM manipulation methods

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


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const newArray = array.filter((item)=> item>4);
console.log(newArray)// return the filtered array

const newArray1 = array.slice(0, 5);
console.log(newArray1)// return the sliced array exccluding the last index
const newArray2 = array.slice(5, 10);// return the sliced array excuding the first index
console.log(newArray2)// return the sliced array excuding the first index

const newArray3 = array.reduce((accumulator, currentValue) => accumulator + currentValue);// return the sum of the array elements
console.log(newArray3)// return the sum of the array elements
//explanetion of the reused methods
// filter: creates a new array with all elements that pass the test implemented by the provided function.
// slice: returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// reduce: executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

const newArray4 = array.splice(4, 1, 2);// return the spliced array
console.log(array)
console.log(newArray4)// return the spliced array
const newArray5 = array.splice(1, 1, 9);// return the spliced array
console.log(array)
console.log(newArray5)// return the spliced array

//explanation of splice methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// start: The index at which to start changing the array. If negative, it will begin that many elements from the end.
// deleteCount: An integer indicating the number of elements in the array to remove from start. If deleteCount is omitted, or if its value is equal to or larger than array.length - start, all elements from start to the end of the array will be removed. If deleteCount is 0, no elements will be removed.

// item1, item2, ...: The elements to add to the array, beginning from start. If you don't specify any elements, splice() will only remove elements from the array.
// The elements will be added in the order they are specified.
const months = ["Jan", "March", "April", "June"];
const months2 = months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months2);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

const months3 = months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months3);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

console.log(months)

const newArray6 = array.map((item) => item * 2);// return the mapped array
console.log(newArray6)// return the mapped array

const newArray7 = array.sort((a, b) => b - a);// return the sorted array in descending order
console.log(newArray7)// return the sorted array in descending order


const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

const array2 = ["apple", "banana", "cherry"];
array2.sort();
console.log(array2);

const newArray9 = array.reverse();// return the reversed array
console.log(newArray9)// return the reversed array

const newArray10 = array.join();
console.log(newArray10)// return the joined array
const newArray11 = array.join(" ");// return the joined array with space
console.log(newArray11)// return the joined array with space


const newArray12 = array.toString();// return the string of the array
console.log(newArray12)// return the string of the array

const newArray13 = array.concat([1, 2, 3]);// return the concatenated array
console.log(newArray13)// return the concatenated array

const newArray14 = array.includes(100000);
console.log(newArray14)// return true if the array includes the element

const newArray15 = array.indexOf(100000);
console.log(newArray15)// return the index of the element in the array
const newArray16 = array.lastIndexOf(100000);
console.log(newArray16)// return the last index of the element in the array

const newArray8 = array.sort((a, b) => a - b);// return the sorted array in ascending order
console.log(newArray8)// return the sorted array in ascending order

const newArray17 = array.every((item) => item > 0);
console.log(newArray17)// return true if all elements are greater than 0
const newArray18 = array.some((item) => item > 0);
console.log(newArray18)// return true if some elements are greater than 0
const newArray19 = array.find((item) => item>3);
console.log(newArray19)// return the first element that is greater than 0

const newArray20 = array.findIndex((item) => item);
console.log(newArray20)// return the index of the first element that is greater than 0
const newArray21 = array.fill(5);// return the filled array with 0
console.log(newArray21)// return the filled array with 0

const newArray22 = array.fill( 4);// return the filled array with 0 from index 2 to index 4
console.log(newArray22)// return the filled array with 0 from index 2 to index 4



const newArray23 = array.copyWithin(0, 7, 6);// return the copied array from index 3 to index 6
console.log(newArray23)// return the copied array from index 3 to index 6

const newArray24 = array.entries();// return the entries of the array as a new Array Iterator object
console.log(newArray24)// return the entries of the array as a new Array Iterator object
//write foreach fonction
array.forEach((item, index) => {
  console.log(item, index)// return the item and its index
})


// list ot array method which are used frequently
// 1. Array.from() - Creates a new array instance from an array-like or iterable object.
// 2. Array.isArray() - Determines whether the passed value is an Array.
// 3. Array.of() - Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// 4. Array.prototype.concat() - Merges two or more arrays and returns a new array without changing the existing arrays.
// 5. Array.prototype.copyWithin() - Copies part of an array to another location in the same array and returns it without modifying its size.
// 6. Array.prototype.entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// 7. Array.prototype.every() - Tests whether all elements in the array pass the test implemented by the provided function. Returns a Boolean value.
// 8. Array.prototype.fill() - Fills all the elements of an array from a start index to an end index with a static value. It returns the modified array.

// 9. Array.prototype.filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// 10. Array.prototype.find() - Returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
// 11. Array.prototype.findIndex() - Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.
// 12. Array.prototype.flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// 13. Array.prototype.flatMap() - Creates a new array by applying a given function to each element of an array (like map) and then flattening the result.
// 14. Array.prototype.forEach() - Executes a provided function once for each array element.




// tutor on data fetching in js
// give me free access to the internet and I will fetch data from the internet and display it on the page
// fetch('https://jsonplaceholder.typicode.com/posts')

const searchData = document.getElementById("api-title");
const bodyData = document.getElementById("api-body");

const fetchData = async ()=>{
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    if (data) {
      
      searchData.innerHTML = data.map(item => `<h2>${item.title}</h2>`).join('');
      bodyData.innerHTML = data.map(item => `<p>${item.body} </p>`).join('');
      bodyData.style.display = "block";
      searchData.style.display = "block";
    }
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}



//function method example
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(2, 3)); // 6
console.log(divide(6, 3)); // 2

//object method example


// arrow function example
const square = (x) => x * x;
console.log(square(5)); // 25

// higher order function example
// A higher-order function is a function that either:

// Takes one or more functions as arguments, or

// Returns a function as its result.

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;

const higherOrderFunction = (fn1, fn2) => (x) => fn1(fn2(x));// This function takes two functions as arguments and returns a new function that applies both functions to a given value.
const result1 = higherOrderFunction(addOne, multiplyByTwo)(5);// This will first multiply 5 by 2, then add 1 to the result

const subtractOne = (x) => x - 1;
const divideByTwo = (x) => x / 2;

const result2 = higherOrderFunction(subtractOne, divideByTwo)(8);
console.log(result2); // Output: 3 (8 / 2 - 1)

console.log(result1); // 11 (5 * 2 + 1)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]


// Promise example
const myPromise = new Promise((resolve, reject) => {
  const success = fetch('https://jsonplaceholder.typicode.com/posts')
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});

myPromise.then((response)=>{
  console.log(response);
})
.catch((error)=>{
  console.error(error);
})
 

// async/await example
const fetchDataAsync = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
};
fetchDataAsync(); // Call the async function to fetch data

// generator example
function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generator = generatorFunction();
console.log(generator.next().value); // Output: Hello

console.log(generator.next().value); // Output: World



// setTimeout example

// setInterval example
setInterval(() => {
  console.log("This message is displayed every 3 seconds.");
}, 3000); // 3000 milliseconds = 3 seconds
// clearInterval example
const intervalId = setInterval(() => {
  console.log("This message is displayed every 3 seconds.");
}, 3000); // 3000 milliseconds = 3 seconds
setTimeout(() => {
  clearInterval(intervalId); // Stops the interval after 10 seconds
  console.log("Interval cleared.");
}, 10000); // 10000 milliseconds = 10 seconds


// class example
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks loudly.`);
  }
}
const dog = new Dog("Buddy");
dog.speak(); // Output: Buddy makes a noise.
dog.bark(); 


// Output: Buddy barks loudly.

//closure method
function closure() {
  let count = 0; // A variable defined in the outer function
  return function() {
    count++;// Increment the count variable
    console.log(count); // Access the count variable from the outer function
  };
};

const counter = closure(); // Create a closure instance
counter(); // Output: 1
counter(); // Output: 2



























