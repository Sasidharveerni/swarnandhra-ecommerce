// Javascript basics

// Data types in javascript

// let, const(current versions), var (old syntax)

let collegeName = "Swarnandhra"

collegeName = "RVRJC"

console.log(collegeName) // it will work

// print() in python, console.log() in javascript

// const collegeName1 = "Swarnandhra"

// collegeName1 = "RVRJC"

// console.log(collegeName) // it won't work

// if you declare const datatype you should not re-declare or e-assign another value

// Conditional Statements

let paymentSuccess = false

// if(paymentSuccess === true) {
//     alert("You have completed your payment!")
// } else {
//     alert("Please complete the payment!")
// }

// Nested If-else

if(typeof paymentSuccess === 'string') { // typeof variableName
    console.log("The payment variable is a string")
}  else if(typeof paymentSuccess === 'boolean') {
    console.log("The payment variable is boolean")
} else {
    console.log("The variable is either float/double or not defined")
}

// Arithemetic operations : +, -, /, *

console.log(4/2) // prints 2
console.log(4%2) // prints 0 - reminder

// ==, >, <, >=, <= (In Javascript you have to use === to compare the values)

// for(int i = 0; i < 10; i++) {

// }

for(let i = 0; i < 10; i++) {
    console.log(i)
}

let x = 7
while(x < 10) {
   console.log(x) //7, 8, 9
   x++;
}

// Arrays in Javascript

// collection of items, that item could be anything - objects, image links, etc.,

// int[] arr = {1, 2, 3, 4}; - Java
// arr = [1, 2, 3, 4] - python

const arr = [1, 2, 3, 4];
console.log(arr)


// Array methods in javascript

// functions

// old syntax

// function collectFees() {
//     console.log("Your fees have been collected")
// } // function declaration

//function calling

// collectFees()
// i = 1;
// while(i < 3) {
//     collectFees()
//     i++;
// }

// New Syntax

const collectFees = () => {
    console.log("Your fees have been collected")
}

collectFees()

// How to pass arguments in javascript

const sendReminder = (text) => {
    console.log(text)
}

sendReminder("Hello SCET student!")

let text = "Some message"

sendReminder(text)

// arr.forEach((ele, ind) => {
//     console.log(ele)
// })


// DOM, Events, Objects

// 1. Write a even-odd identifier function
// 2. print only even numbers
// 3. perform all arithmetic operations on 2 numbers
// 4. print the type of the input value
// 5. Sorting in Javascript - Bubble sort