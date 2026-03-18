//xxxxxxxxxxxxx
//xxxxxxxxxx

function abc() {
  // function declaration hoisting !

  console.log('abc executed');
}

abc();

xyz = function () {
  // function expression // referencing

  console.log('xyz executed');
};

xyz();

xyz = null; // de-referencing

xyz();
