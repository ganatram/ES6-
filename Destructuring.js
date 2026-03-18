// Destructuring

//Manual de-structuring in vanilla js
/* var fruits = ['apples', 'oranges', 'pineapples'];

var f1 = fruits[0];
var f2 = fruits[1];
var f3 = fruits[2];

for (let i = 0; i < 10; i++) {
  console.log(f2);
} */

// var x = new Array ()
// var x= ''  []   ()

//ES6 Array de-structuring in ES6
var fruits = ['apples', 'oranges', 'pineapples'];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f2);
console.log(f3);
