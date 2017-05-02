var fs = require('fs');

// this deals with the file system 

// I can read the text file now - we are dealing with files on our operating system 

// takes a few parameters, first thing it takes is the location of the file 
// __dirname gives me the path to the directory that the code i'm writing lives in 

// looking at the file, will read the binary data and then will use the encoding to determine what the 0s and 1s mean
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8')
console.log(greet)
// var greet = fs.readFileSync('./greet.txt')