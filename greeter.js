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


// jasmine-node is a tool that helps us write automated tests - automatically teest my software as i build it 
// the above is a dev dependency - i don't need it for the app to run but i do need it as a developer 

// npm install -g nodemon - globally install this module - don't download this module into the nodemodules folder for this particular app
// but rather put it in a location so that npm can access it from any point in my computer 


// --save-dev - this is now a development dependency
// learned that you need babel to be able to compile the new spread operator 
//also learned how to use redux logic 
// 75% done through udemy course
// node essentially takes the v8 engine out of javascript and allows you to run it on a machine
// basically you are able to use javascript to run serverside technology when previously it could only be run in a browser