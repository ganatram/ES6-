const coffee = {};
const noCream = { cream: false };
const noSugar = { sugar: false };

Object.assign(coffee, noCream);
console.log(coffee); // {cream:false}

Object.assign(coffee, noSugar);
console.log(coffee); // {cream:false,sugar:false}

const coffeeWithSugar = Object.assign({}, coffee, { sugar: true });

coffeeWithSugar; // {cream:false,sugar:true}
