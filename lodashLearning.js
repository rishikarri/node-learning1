//let's learn some lodash 
var _ = require('lodash');

var people = [
	{name: 'Frank', age: 30},
	{name: 'Susan', age: 10},
	{name: 'Bill', age: 22},
	{name: 'Carol', age: 52},
	{name: 'Stephanie', age: 22},
	{name: 'Kyle', age: 68},
	{name: 'Hank', age: 22},
]

// lodash a helpful set of utilities to quickly iterate and create iterables

var result = _(people).filter({age: 22}).value();

// console.log(_.add(3, 4))


// => 9

function cube(n) {
  return n * n * n;
}

var addSquare = _.flow([_.add, cube]);
console.log(addSquare(1, 2));



console.log(result);