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
const newArray8 = array.sort((a, b) => a - b);// return the sorted array in ascending order
console.log(newArray8)// return the sorted array in ascending order

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

const newArray17 = array.every((item) => item > 0);
console.log(newArray17)// return true if all elements are greater than 0
const newArray18 = array.some((item) => item > 0);
console.log(newArray18)// return true if some elements are greater than 0
const newArray19 = array.find((item) => item > 2);
console.log(newArray19)// return the first element that is greater than 0
