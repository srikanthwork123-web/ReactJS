//destructuring assignment in JavaScript allows you to unpack values from arrays or properties from objects into distinct variables. 
// This can make your code more concise and easier to read.

//Basic Destructuring
console.log('Basic Destructuring');
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

//Skipping Values
console.log('Skipping Values');
const colors = ["red", "green", "blue"];
const [first, , third] = colors;
console.log(first); // red
console.log(third); // blue

console.log('');
//Default Values
console.log('Default Values');
const [x = 1, y = 2, z = 3] = [10, 20];
console.log(x); // 10
console.log(y); // 2
console.log(z); // 3


console.log('');
//Swapping Variables
console.log('Swapping Variables');
let d = 50;
let e = 100;
[d, e] = [e, d];
console.log(d); // 100
console.log(e); // 50

//2. Object Destructuring
//Basic Example
console.log('');
console.log('Basic Object Destructuring');
const person = {
  name: "John",
  age: 25
};
const { name, age } = person;
console.log(name); // John
console.log(age);  // 25


//{} - single object
//[{},{}] - single array
//[[], []] - multiple array



//Renaming Variables
console.log('');
console.log('Renaming Variables Destructuring');
const person1 = {
  name1: "John",
  age1: 25
};
const { name1: fullName, age1: years } = person1;
console.log(fullName); // John
console.log(years);    // 25

//Default Values
console.log('');
console.log('Default Values');
const user = {
  name2: "Alice"
};
const { name2, country = "India" } = user;
console.log(name2);    // Alice
console.log(country); // India

//Nested Object Destructuring
console.log('');
console.log('Nested Object Destructuring');
const employee = {
  id: 101,
  address: {
    city: "Hyderabad"
  }
};

const {
  address: { city, state="Andhra Pradesh" }
} = employee;

console.log(city);  // Hyderabad
console.log(state); // Andhra Pradesh

//3. Destructuring vs Normal Access
//Without Destructuring
const person2 = {
  fname: "John",
  Person_age: 25
};

const fname = person2.fname;
const Person_age = person2.Person_age;

//With Destructuring
const { fname: name3, Person_age: age3 } = person2;

//Destructuring undefined causes error
//const { a20 } = undefined; // Error
//Safe way:
const { a21 } = person2 || {};



const person = {
  greet() {
    console.log("Hello");
  }
};
const user = {
  name: "John"
};
// Set prototype
user.__proto__ = person;

console.log(user.name); // John

user.greet(); // Hello
