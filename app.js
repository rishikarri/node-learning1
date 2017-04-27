// var greet = require('./greet1');
// var greet2 = require('./greet2.js').greet;
// var greet3 = require('./greet3.js');

// // because I replaced exports with a function, what we'll do is call that function because the variable is pointing at it 



// // var greet4 = require('./greet4');
// // var grtr = new greet4(); 
// // grtr.greet();


// var greet5 = require('./greet5.js');

// var grtr = new greet5(); 
// grtr.greet();


const greet6 = require('./greet6.js');

var greeter = new greet6('english');

greeter.greet();