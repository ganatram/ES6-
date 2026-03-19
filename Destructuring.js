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

// Array de-structuring in ES6
/* var fruits = ['apples', 'oranges', 'pineapples'];
const [f1,f2,f3] = fruits;
console.log(f1);
console.log(f2);
console.log(f3); */

// Object de-structuring in ES6

/* const smoothie = {
  fats: ['avocado', 'peanut butter', 'greek yogurt'],
  liquids: ['almond milk'],
  greens: ['spinach', 'brocoli', 'cucumber'],
  fruits: ['blueberry', 'pineapple', 'guava'],
};

const { fats,greens } = smoothie;


console.log(fats);
console.log(greens);

console.log(fats[1]);
console.log(greens[1]); */

// mixed de-structuring in ES6

/* let node = {
  type: 'identifier',
  name: 'foo',
  loc: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 1,
      column: 4,
    },
  },
  range: [0, 3],
};

let {
  loc: { start },
  range: [startIndex],
} = node;

console.log(start.line); // 1
console.log(start.column); // 1
console.log(startIndex); // 0 */ */

// Destructuring with Spread operator in ES6
/* const a = [10, 20, 30, 40, 50];
const b = [60, 70, 80, 90, 100];
const c = [...a, ...b, 110, 120]; */

// Destructuring with Rest operator in ES6

/* function xyz(v1,v2,v3,...remaining){
  console.log(arguments.length); 
  console.log(arguments[2])// 10150 
  console.log(v3)// 15 
  console.log(remaining); // 20,25,30 


}
xyz(5,10,15,20,25,30) ;  */

/* function abc(x, y, z, ...xyz) {
  console.log(x); // 10
  console.log(y); // 20

  console.log(...xyz); // 40,50,60,70
}
abc(10, 20, 30, 40, 50, 60, 70);
 */
