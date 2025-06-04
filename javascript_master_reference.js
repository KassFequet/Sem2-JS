// JavaScript Master Reference with Explanations

// ===========================
// DATA TYPES
// ===========================
const string = "Hello"; // Textual data
const number = 42; // Numeric data
const boolean = true; // true or false
const array = [1, 2, 3]; // List of values
const object = { key: "value" }; // Key-value pairs
const func = function() { return "Hi"; }; // Traditional function
const arrowFunc = () => "Hi"; // Arrow function (shorter syntax)
const nil = null; // Intentional absence of value
const undef = undefined; // Variable declared but not assigned

// ===========================
// VARIABLES & DECLARATIONS
// ===========================

// Declare a variable (function scoped or globally scoped)
var oldStyle = "I can be re-declared and updated";

// Declare a block-scoped variable (ES6+)
let mutable = "I can be updated but not re-declared";

// Declare a constant (ES6+)
const constant = "I cannot be updated or re-declared";

// Reassigning variables
mutable = "Updated value"; // Allowed
// constant = "New value"; // Error: assignment to constant variable

// Variable hoisting example
console.log(hoistedVar); // undefined (hoisted declaration, no value yet)
var hoistedVar = 5;

// let and const are not hoisted in the same way and will cause ReferenceError if accessed before declaration

// Best practice: prefer 'const' by default, use 'let' if variable needs to change, avoid 'var'

// ===========================
// CONTROL STRUCTURES
// ===========================
if (condition) {
  // Executes if condition is true
} else if (otherCondition) {
  // Executes if otherCondition is true
} else {
  // Executes if no conditions are true
}

switch (value) {
  case 1:
    break; // Executes if value === 1
  default:
    break; // Executes if no cases match
}

for (let i = 0; i < 10; i++) {} // Loop with counter

while (condition) {} // Repeats while condition is true

do {
} while (condition); // Executes once, then repeats while true

// ===========================
// FUNCTIONS
// ===========================
function add(a, b) {
  return a + b; // Adds two numbers
}

const multiply = (a, b) => a * b; // Multiplies two numbers

// ===========================
// ARRAY METHODS
// ===========================
array.forEach(item => console.log(item)); // Runs a function on each element
const mapped = array.map(item => item * 2); // Transforms each element
const filtered = array.filter(item => item > 1); // Filters elements by condition
const reduced = array.reduce((acc, curr) => acc + curr, 0); // Reduces array to single value
const found = array.find(item => item === 2); // Finds first matching element
const includes = array.includes(2); // Checks if array contains value
const some = array.some(item => item > 2); // Checks if any item meets condition
const every = array.every(item => item > 0); // Checks if all items meet condition
const index = array.indexOf(2); // Gets index of item
const concat = array.concat([4, 5]); // Merges two arrays
const flat = [[1], [2]].flat(); // Flattens nested arrays
const sort = array.sort(); // Sorts items (as strings by default)
const reverse = array.reverse(); // Reverses the order
const splice = array.splice(1, 1); // Removes/replaces elements
const slice = array.slice(0, 2); // Extracts a portion of the array

// ===========================
// OBJECT METHODS
// ===========================
Object.keys(object); // Returns keys of the object
Object.values(object); // Returns values of the object
Object.entries(object); // Returns [key, value] pairs
Object.assign({}, object); // Clones or merges objects
Object.hasOwnProperty("key"); // Checks if object has a property
Object.freeze(object); // Prevents modifications
Object.seal(object); // Prevents adding/removing properties

// ===========================
// STRING METHODS
// ===========================
string.length; // Gets number of characters
string.toUpperCase(); // Converts to uppercase
string.toLowerCase(); // Converts to lowercase
string.includes("H"); // Checks if string contains substring
string.indexOf("H"); // Gets position of substring
string.slice(0, 3); // Extracts part of the string
string.replace("H", "J"); // Replaces part of the string
string.split(" "); // Splits string into array
string.trim(); // Removes whitespace
string.startsWith("H"); // Checks if string starts with value
string.endsWith("o"); // Checks if string ends with value
string.charAt(0); // Gets character at index

// ===========================
// MATH & DATE
// ===========================
Math.random(); // Returns random number between 0 and 1
Math.floor(4.9); // Rounds down
Math.ceil(4.1); // Rounds up
Math.round(4.5); // Rounds to nearest integer
Math.max(1, 5, 10); // Returns highest number
Math.min(1, 5, 10); // Returns lowest number
Math.abs(-10); // Returns absolute value
Math.sqrt(9); // Returns square root
Math.pow(2, 3); // Raises to power
Math.trunc(4.9); // Removes decimal part

const now = new Date(); // Current date and time
now.getFullYear(); // Gets current year
now.getMonth(); // Gets current month (0–11)
now.getDate(); // Gets day of the month
now.getDay(); // Gets day of the week
now.getHours(); // Gets hour
now.getMinutes(); // Gets minutes
now.getSeconds(); // Gets seconds

// ===========================
// DOM MANIPULATION
// ===========================
document.getElementById("id"); // Selects element by ID
document.querySelector(".class"); // Selects first element matching CSS selector
document.querySelectorAll("div"); // Selects all elements matching selector
const div = document.createElement("div"); // Creates a new div element
div.textContent = "Hello"; // Sets text inside element
document.body.appendChild(div); // Adds element to page
document.body.removeChild(div); // Removes element from page
div.setAttribute("class", "box"); // Sets an attribute
div.classList.add("highlight"); // Adds a class
div.classList.remove("highlight"); // Removes a class
div.classList.toggle("active"); // Toggles a class

// ===========================
// EVENT LISTENERS
// ===========================
button.addEventListener("click", () => {
  console.log("Clicked!"); // Runs code when button is clicked
});

button.removeEventListener("click", handler); // Removes event listener

// ===========================
// PROMISES & ASYNC/AWAIT
// ===========================
fetch("/api")
  .then(res => res.json()) // Parses JSON from response
  .then(data => console.log(data)) // Uses the data
  .catch(err => console.error(err)); // Catches any errors

async function fetchData() {
  try {
    const res = await fetch("/api"); // Waits for fetch
    const data = await res.json(); // Parses JSON
    console.log(data); // Uses the data
  } catch (err) {
    console.error(err); // Handles errors
  }
}

// ===========================
// CLASSES
// ===========================
class Person {
  constructor(name) {
    this.name = name; // Sets name property
  }

  greet() {
    return `Hello, my name is ${this.name}`; // Method to greet
  }

  static species() {
    return "Human"; // Static method for class-level info
  }
}

const user = new Person("Kass"); // Creates a new Person
console.log(user.greet()); // Calls greet method
console.log(Person.species()); // Calls static method
