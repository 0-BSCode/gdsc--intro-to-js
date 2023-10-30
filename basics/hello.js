// Basic syntax
console.log("Hello World")

/**
 * Declaring variables
 * - let, var, const
 * - Data types (string, number, boolean)
 * - Naming conventions
 */

// Variable declarations
let name = "John";
const age = 30;
var isStudent = true;

// Data types
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean

// Deep dive into const, let, var
const x = 6;
console.log("x: ", x)
// x = 3;
console.log("x: ", x)

let y = 6;
console.log("y: ", y)
y = 3;
console.log("y: ", y)

let z = 6;
console.log("z: ", z)
z = 3;
console.log("z: ", z)


if (true) {
    var varVariable = 'I am a var';
    let letVariable = 'I am a let';
}

console.log(varVariable); // Outputs: "I am a var"
// console.log(letVariable); // Throws a ReferenceError: letVariable is not defined

/**
 * Objects
 * - What are objects in JavaScript?
 * - Objects as a way to structure and organize data.
 * - Object properties and methods.
 */

// Basic object example
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: true,
};

// Accessing object properties
console.log(person.firstName); // "John"
console.log(person.age); // 30

// Modifying object properties
person.age = 31;

// Adding new properties
person.email = "john@example.com";

// Object methods
let calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
};

console.log(calculator.add(5, 3)); // 8

/**
 * Operators and expressions
 * - Arithmetic operators (+, -, *, /).
 * - Comparison operators (==, ===, !=, !==, >, <, >=, <=).
 * - Logical operators (&&, ||, !).
 * - Working with expressions.
 */

// Arithmetic operators
let a = 5;
let b = 3;
let sum = a + b;
let product = a * b;

// Comparison operators
console.log(a > b); // true
console.log(a === b); // false

// Logical operators
let hasCoffee = true;
let hasDonut = false;
console.log(hasCoffee && hasDonut); // false

/**
 * Conditional statements
 * - Writing and using **`if`** statements.
 * - Introducing **`else`** for alternative paths.
 * - Nested conditionals.
 * - Ternary operators
 */

let score = 85;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

// Ternary operators
score >= 90 ? console.log("A") : score >= 80 ? console.log("B") : console.log("C")

/**
 * Loops
 * - Using **`for`** loops for repetitive tasks.
 * - Using **`while`** loops for dynamic situations.
 * - Loop control statements (break, continue).
 */

// For loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}

/**
 * Functions
 * - Defining and calling functions (keyword, variable, arrow).
 * - Function parameters and return values.
 * - The importance of functions in code organization and reusability.
 */

let newPerson = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
};

// Function declaration
// function greetPerson(person) {
//     return "Hello, " + person.firstName + " " + person.lastName + "!";
// }

// Function expression
// const greetPerson = function(person) {
//     return "Hello, " + person.firstName + " " + person.lastName + "!";
// };

// Arrow function
const greetPerson = (person) => "Hello, " + person.firstName + " " + person.lastName + "!";

// Function call
let message = greetPerson(newPerson);
console.log(message); // Hello, Alice Smith!

/**
 * Arrays
 * - Creating arrays.
 * - Accessing and modifying array elements.
 * - Looping through arrays.
 * - Array methods like push, pop, shift, and unshift.
 * - Array methods like map and filter
 */

// Array creation
let todoList = [
    { title: "Buy groceries", dueDate: "2023-10-30" },
    { title: "Finish project", dueDate: "2023-11-05" },
    { title: "Exercise", dueDate: "2023-10-29" },
];

// Accessing array elements
console.log(todoList[2])
console.log(todoList[0].title); // "Buy groceries"
console.log(todoList[1].dueDate); // "2023-11-05"

// Adding elements to an array
todoList.push({ title: "New todo!", dueDate: "2023-11-30" });

/**
 * Handling User Input
 * - Introduction to prompt and alert.
 * - Getting user input and displaying output.
 */

// Prompt for user input
let userInput = prompt("Enter your name");
console.log("Hello, " + userInput + "!");

/**
 * Events and Event Handlers
 * - Introduction to DOM (Document Object Model).
 * - Adding event listeners to HTML elements.
 * - Responding to user interactions.
 */

// HTML button element with id="myButton"
let button = document.getElementById("myButton");

// Event listener
button.addEventListener("click", function() {
    alert("Button clicked!");
});