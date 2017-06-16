// var EventEmitter = require('events');

// module.exports = class Greeter extends EventEmitter {
// 	constructor() {
// 		super();
// 		this.greeting = 'hello world!';
// 	}

// 	greet(data) {
// 		console.log(this.greeting)
// 		this.emit('greet', data)
// 	}
// 	sayHello() {
// 		console.log('hello');
// 	}
// }

// function addition(a, b) {
// 	return a + b; 
// }

const addition = (a,b) => {
	return a + b; 
}

console.log(addition(5,5));