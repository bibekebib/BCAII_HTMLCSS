//     //   document.getElementById("main").innerHTML = " <br> Hello, JavaScript!";
//     document.getElementById("main").style.color = "red";
//     document.getElementById("main").style.fontSize = "50px";
//     // document.getElementById("main").innerText =4 + 6;
//     // console.log(4 + 6), console.log(4 - 6), console.log(4 * 6), console.log(4 / 6);
//     // console.log(4 - 6);
//     // console.log(4 * 6);
//     // console.log(4 / 6);
//     // console.log(4 % 3);
//     // console.log(4 ** 3);

// // var x = 6;
// // let x = 6;
// // const pi = 3.14;

// // Number 
// var x = 10;
// console.log(typeof x);


// // String
// var FName = "John";
// console.log(typeof FName);

// // Boolean
// var isAdult = true;
// console.log(typeof isAdult);

// // null
// var y = null;
// console.log(typeof y);

// // undefined
// var z;
// console.log(typeof z);

// // Array

// // cars.splice(1, 0, "Audi", "Mustang", "Toyota", "Honda");
// // console.log(cars);

// // console.log(cars);

// // // indexing in js
// // console.log(cars[2]);

// // cars.push("Audi");
// // console.log(cars);

// // cars.pop();
// // console.log(cars);

// // console.log(cars.length);
// // console.log('this is it')
// // console.log(cars)
// // console.log(cars.pop([2]));
// // console.log(cars);

// // cars.splice(2, 1);
// // console.log(cars);
// var cars = ["BMW", "Volvo", "Saab", 'Ford'];
// // For Loop in JS
// console.log('For Loop Output')
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// // while loop in js

// let j = 0;
// console.log('While loop output')
// while(j<cars.length){
   
//     console.log(cars[j])
//     j++
// }

// Do while loop in js

// let k = 0;
// console.log('Do while loop output')
// do{
//     console.log(cars[k])
//     k++
// }
// while(k<cars.length)

// IF else in js

// let age = 18; 
// let hasVoterID = true
// if (age > 18  ) {
//     if (hasVoterID == True){
//         console.log('You can vote');
//     }
//     else{
//         console.log('You cannot vote');
//     }
//     // console.log('You can vote');
// }

// else if (age < 18) {
//     console.log('You cannot vote');
// }
// if (age > 18) {
//     console.log('You are an adult');
// } else if (age < 18) {
//     console.log('You are not an adult');
// }
// else{
//     console.log('You are 18');
// }

// Wap a if else condition to check if someone can vote or not,
// use multiple conditions, like age > 18, age < 18, age = 18, age <0, age > 100 , hasVoterID = True, hasVoterID = False


// age > 20 ? console.log('You are an adult') : console.log('You are not an adult');


// Functions in Js
// Types of Funtions

// 1. Named Function

function add(a, b) {
    console.log(a + b);
}

add(4, 6);

// 2. Anonymous Function

var sub = function (a, b) {
    console.log(a - b);
}

sub(6, 4);

// 3. Arrow Function

var mul = (a, b) => {
    console.log(a * b);
}

mul(4, 6);

// Returning from an function

function div(a, b) {
    return a / b;
}
var result = div(4, 6);
console.log(result);

// Wap a function to check if a number is even or odd
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

evenOdd(6);

// Wap a function to find the factorial of a number

function factorial(num) {
    var fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    console.log(fact);
}
factorial(5);

// Wap a function to find the sum of a number

function sum(num) {
    var sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}
sum(5);

// wap a function to find the greatest number of an array

function greatest(arr) {
    var max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
greatest([1, 2, 3, 4, 5,15, 6, 7, 8, 9, 10]);

// wap a function to find the smallest number of an array

function smallest(arr) {
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
smallest([1, 2, 3, 4, 5,0, 6, 7, 8, 9, 10]);

// Objects in Js

var person = {
    name: 'John',
    age: 25,
    city: 'New York',
    isAdult: true,
    hobbies: ['Reading', 'Writing', 'Coding'],
    add : function(a, b){
        console.log(a+b);
    },
    greet : function (){
        console.log('Hello', person.name);
    }
}
person.greet();
person.add(4,6);