// // magic string - a string that has some special meaning in our code - this is bad because we can't find errors as easily - let's make them variables 
// const Emitter = require('events');
// const eventConfig = require('./config.js').events;

// // grabbing emitter - you simply just need to grab them from events 


// const emtr = new Emitter();

// emtr.on(eventConfig.GREET, () => {
// 	console.log('somewhere someoene said hello');
// })

// emtr.on(eventConfig.GREET, () => {
// 	console.log(' it is lit')
// })

// emtr.emit('greet');

var person = {
	firstname: '',
	lastname: '', 
	greet: function() {
		return this.firstname; 
	}
}

// I want this to be the prototype of some other objects that I construct - i am just building the object that I want to be the prototype

// when i'm done I will have an empty object who's prototype is person
var john = Object.create(person);

john.lastname = 'doe';
john.firstname = 'john';

console.log(john.greet());