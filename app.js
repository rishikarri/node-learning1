var EventEmitter = require('events');

var util = require('util');

function Greeter() {
	this.greeting = 'hello world!';
}

// any objects created using greeter constructor, should also have all eventemitter prototype's methods and properties
util.inherits(Greeter, EventEmitter);




// emit is coming from the fact that greeter is from the event emitter
Greeter.prototype.greet = function(data) {
	console.log(this.greeting); 
	this.emit('greet', data);
}

// emit is coming from the fact that greeter is also and event emitter

var greeter1 = new Greeter();

greeter1.on('greet', function(data) {
	console.log('someone greeted!' + data);
})

greeter1.greet('tony');

