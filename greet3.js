function Greetr() {
	this.greeting = "Hello World SF!";
	this.greet = function() {
		console.log(this.greeting)
	}
}


module.exports = new Greetr