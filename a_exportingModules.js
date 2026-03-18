export var color = 'red';
export let name = 'Nicholas';
export const magicNumber = 7;

export function sum(num1, num2) {
  return num1 + num2;
}

export class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}

// all ES6 bindings are wrapped into a container (Module)
