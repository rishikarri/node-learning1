// function Greetr() {
// 	this.greeting = "Hello World I am a greeter !";
// 	this.greet = function() {
// 		console.log(this.greeting)
// 	}
// }

// give back the constructor itself 


class Greetr{
	constructor() {
		this.greeting = "Hello world I am greet number 5";
		this.greet = () => {
			console.log(this.greeting);
		}
	}
}

module.exports = Greetr;