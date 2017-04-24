// var a = 1; 
// var b = 2; 
// var c = a + b; 

// // logs data values to the browser console which helps when you are trying to figure out what is going with your program 
// // console.log()
// console.log('***')
// console.log(c);
// console.log(b);
// console.log('***')
// // this will output the value to the command line window 

// a normal funcction statement
// function greet() {
// 	console.log('hi fatty catty how you doing');
// }

// greet(); 


// // functions are first calss - means we can pass them around like variables 
// // we are goin gto give this function another function

// function logGreeting(fn) {
// 	fn();
// 	fn();
// }

// logGreeting(greet);

// // functions in javascript are objects - special objects -  can use a function like any other type of variable
// // rather than run the function, i'm going to give it the function, and then it is going to invoke it using fn 

// // a function expression
// // variable points to it - 
// var greetMe = function() {
// 	console.log('hi rishi');
// }

// var greetTravisScott = () => {
// 	console.log('hi travis scott');
// }

// greetTravisScott();
// pass to require the location of teh module you wish to import 
// node grabs this file and then executed the javascript file 

require('./greet.js');