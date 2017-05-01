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


var name = 'John Doe';

var greet = 'Hello ' + name; 

// backtick signals template literal

var greet2 = `Hello ${ name }`;

console.log(greet2);

// in the case of node it is supported because i have hte latest version of node 




var obj = {
	name: 'Rishi Karri',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

// this keyword will point to the object itself so I can get the .name property 

obj.greet();

obj.greet.call({
	name: 'Jane Doe'
})

obj.greet.apply({
	name: 'Travis Scott'
})

// so you can borrow a function and give it a new object to use the this statement
// this will invoke the function just like the parantheses does, but the difference is that whatever I point to call will invoke what the this keyword points to




// emitter
var EventEmitter = require('events');

var util = require('util');

function Greeter() {
	EventEmitter.call(this);
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
