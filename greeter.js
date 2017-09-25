const objA = {
  a: 1,
  b: 2,
  c: 3,
}

const objB = {
	a: 2,
}

// return { ...state, visibilityFilter: action.filter }

function createObject () {
  return { ...objA, b:'djiso' };
}

console.log(createObject());

const a = [1, 21]; 
const b = [1, 21]; 

// learned that you need babel to be able to compile the new spread operator 
//also learned how to use redux logic 
// 75% done through udemy course