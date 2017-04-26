var greet = require('./greet1');
var greet2 = require('./greet2.js').greet;

// because I replaced exports with a function, what we'll do is call that function because the variable is pointing at it 

greet2();