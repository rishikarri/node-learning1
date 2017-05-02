var EventEmitter = require('events');
module.exports = class Greeter extends EventEmitter {
	constructor() {
		super();
		this.greeting = 'hello world!';
	}

	greet(data) {
		console.log(this.greeting)
		this.emit('greet', data)
	}
}