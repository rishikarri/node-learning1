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



// javascript engine will be pickier about the things it lets you and doesn't let you do 
// this means that it is a constructor - a creater of objects

class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname,
		this.lastname = lastname
	}

	greet() {
		console.log(`Hello ${this.firstname} ${this.lastname} it is lit!`)
	}
}

var tscott = new Person('travis', 'scott');

tscott.greet();

// anything you add to the object inside the constructor works like a function constructor and adds it to each object created
// and any other methods you put inside the class are automatically put on the prototype and then you can add methods

// es6 classes - a new way to build objects - doesn't change anything under the hood - so it is syntactic sugar - syntactic sugar is a feature that only changes how you type something, but nothing changes under the hood

'use strict';

// emitter

var Greeter = require('./greeter.js');


// Greeter is an extension of Event Emitter - EVentEmtiter is the prototype of Greeter



// exporting the class itself

const greeter1 = new Greeter();

greeter1.on('greet', function(data){
	console.log('someone greeted ' + data)
})

greeter1.greet('hi')

// Buffer is a feature that is globally available to javascript

var buf = new Buffer('Hello', 'utf8');

// I have asked the buffer to take this string and convert it to binary data
// take this, use the unicode character set 
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON())

buf.write('wo');
console.log(buf.toString());

var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);


// view is letting  me work with binary data in an easier way - letting me put in normal binary numbers 
// a view is a typedarray - a way for me to deal with teh binary data in the buffer
// when I read from the array, I am reading from the buffer which converts the binary data into any structure that we want
// Int32 - an integer stored with 32 0s and 1s 
// the above is storing 64 bits of data
// this is not coming from node, this is coming from the v8 javascript engine
// a byte is 8 bits

function greet(callback){	
	const data = {
		name: 'Travis Scott',
	}

	const data2 = {
		name: 'rishi'
	}
	callback(data2)
	console.log('hello');

	
	callback(data);
}

greet(function(data){
	console.log('it is lit');
	console.log(data.name)
})


var fs = require('fs');
var zlib = require('zlib');

// gzip - an algorithm for compressing files

// highWaterMark: how big we want to make our chunks to be
var readable = fs.createReadStream(__dirname + '/greet.txt', {
	encoding: 'utf8',
	highWaterMark: 100
	
});

// the stream will fill up a buffer with contents
// if the contents are smaller than the buffer, you get all the data
// if it's bigger then you get portions of the file and then a data event is emitted until it finishes the file 

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk){
	console.log(chunk);
	writable.write(chunk);
})

// this creates a readable and writable tranfrer stream
// creating a compressed file but it is a stream
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')

var gzip = zlib.createGzip();
// readable is the source, writable is the destination. sets up the event listener to listen for the chunk of data 
readable.pipe(writable);

// gzip will return a readable stream which i can pipe to my writable compressed stream
readable.pipe(gzip).pipe(compressed)