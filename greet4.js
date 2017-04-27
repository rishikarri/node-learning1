function Greetr() {
	this.greeting = "Hello World I am a greeter !";
	this.greet = function() {
		console.log(this.greeting)
	}
}

// give back the constructor itself 
module.exports = Greetr;