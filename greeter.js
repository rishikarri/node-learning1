const objA = {
  a: 1,
  b: 2,
  c: 3,
}

// return { ...state, visibilityFilter: action.filter }

function createObject () {
  return { ...objA, b:'djiso' };
}

console.log(createObject());

// learned that you need babel to be able to compile the new spread operator 