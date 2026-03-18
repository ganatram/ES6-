//xxxxxxxxxxxxx
//xxxxxxxxxx

function abc() {
  // function declaration hoisting ! - anti-pattern
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

// javascript has 'shared architecture'

// how do you protect our identifiers

// namespace

// ES6 - Bindings (export & import statements)
