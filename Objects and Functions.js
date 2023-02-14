// Functions (Make all funcions reusable)

// 1) Write a function that console logs 'Hello Wold' with a function declaration and a function expression(use arrow function).
// Invoke each function above the declared function.
// Why isn't one of these funcitons working?

// greet()

// function greet(){
//     console.log('Hello world');
// }

// const greet1 = ()=> console.log('Hello World');
// greet1()

// 2) Write a function to generate a random number
// Function `genRandom()` return a generated random integer number between the provided start and end range.

// function genNumber(start, end) {
//   return Math.round(Math.random() * end) + start;
// }
// console.log(genNumber(1, 10));
// console.log(genNumber(1, 100));
// console.log(genNumber(100, 1000));

// 3) Write a function to find the count of a letter in a string
// Function `letterCount()` return the count of letter in a given string.
// Hint: The function should take in two parameters

// function letterCount(string, char) {
//   let count = 0;
//   string = string.toLowerCase();
//   for (let str of string) {
//     if (str.charAt(str) === char) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(letterCount("connect", "n"));

// 4) Write a function to check if a number is Prime
// Function `checkPrime()` return Boolean value based on whether the number is Prime or not.

// function primeCheck(number) {
//   if (number % 2 !== 0) {
//     return `${true}, its a prime number`;
//   } else {
//     return false;
//   }
// }

// console.log(primeCheck(5));

// 5) Write a function to find the area of a given Rectangle
// Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.

// function area(width, height) {
//     return width * height
// }

// console.log(area(50, 100));

// OBJECT

// Given the follow object;

// const person = {
//   name: "Bob",
//   occupation: "web developer",
//   hobbies: "painting",
//   address:{
//     street: 'Via roma',
//     number: 45
//   },
//   info(){
//     return `${this.name} ${this.occupation}`
//   }
// };

// 1) Make a new copy of the object and change the name and street properties without changing them on the original object
// 2) Make this object uneditable. Now try changing values on the "name" and "street" properties
// 3) Create a method in the object called "info" that returns the name and occupation

// const newPerson = {...person}
// const newPerson = JSON.parse(JSON.stringify(person))
// const newPerson = Object.assign({}, person)

// newPerson.name = 'John'
// newPerson.address.number = 50

// console.log(person);
// console.log(newPerson);

// Object.freeze(person)
// Object.freeze(person.address)

// person.name = 'John'
// person.address.number = 50

// console.log(person);

// console.log(person.info());

// const obj = {
//     foo: { a: "hello", b: "world" },
//     bar: ["string", "string", { xyz: 6 }, 88],
//     qux: [4, 8, 12]
//   };

// // Write some code to replace the value 6 in the following object with 606:

// // console.log(obj.bar[2].xyz = 10);

// const changeValue = obj.bar.filter(x=> x.xyz = 20)
// console.log(changeValue);

// ARRAY

// Given the follow Array object;

const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 201 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
  ];
  
  // Using only array methods,
  
  // 1 Print only items with their price greater than 100
  // 2 Print items with an even number as its price
  // 3 Print if there are items with price less than 100
  // 4 If every item in our array costs more than 100
  // 5 Print out the sum of all the prices
  // 6 Add a new object to the array
  // 7 Remove the first and the last items of the array
  
  const greaterThan100 = items.filter((obj) => obj.price > 100);
  
  // console.log(greaterThan100);
  
  const even = items.filter((even) => even.price % 2 == 0);
  
  // console.log(even);
  
  const some = items.some((some) => some.price > 4);
  
  // console.log(some);
  
  const every = items.every((every) => every.price > 4);
  
  // console.log(every);
  
  const sum = items.reduce((total, current) => total + current.price, 0);
  
  // console.log(sum);
  
  // let newObj = { name: "Phone1", price: 3250 };
  // items.unshift(newObj);
  
  
  
  
  // items.shift()
  // items.pop()
  
  
  // console.log(items);
  
  
  
  
  
  // Remove all unwanted spaces from the following array
  const cleanNames = [" avengers", "   captain_america", "ironman   ", " black panther   "]
  
  
  // console.log(cleanNames);
  
  const trimmed = cleanNames.map(string => string.trim())
  
  console.log(trimmed);