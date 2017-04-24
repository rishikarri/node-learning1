// the code inside greet.js is protected - app.js cannot get go get functions within greet js

var greet = () => {
	console.log('hi');
}

// a place to put things that I want to make available to anything else that uses this module
// this module is exposing the greet function

module.exports = greet; 
