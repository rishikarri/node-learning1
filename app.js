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
// set a variable equal to the results of the function 

// // set greetingssenor to whatever is returned by greet.js - in this case it is the function called greet so we can now call greetingssenor as a function
// const greetingsSenor = require('./greet.js');

// greetingsSenor();

// const person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	greet: function() {
// 		console.log('Hello' + this.firstName + '' + this.lastName);
// 	}
// };

// person.greet();
// console.log(person['firstName']);

// person['pet'] = 'dog'

// console.log(person['pet']);

// class Person {
// 	constructor(firstName, lastName){
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// }

// const travis = new Person('travis', 'scott'); 

// console.log(travis.firstName);

// Person.prototype.greet = () => {
// 	console.log('hello' + this.firstName);
// 	return;
// }

// travis.greet();


// pass by value
function change(b){
	b = 2; 
}

var a = 1; 
change(a);
console.log(a);

// pass by reference 

function changeObj(d) {
	d.prop1 = function() {}
	d.prop2 = {}
}

var c = {}
c.prop1 = {}; 

changeObj(c);
console.log(c);

// when we call change object, the d value points to the same variable that c points to and makes sure that the original object changes because of pass by reference 

