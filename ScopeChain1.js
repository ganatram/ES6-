var color = 'blue'; // 'red'

function changeColor() {
  // SCA [changeColor(),window{}]

  var anotherColor = 'red'; // 'blue'

  function swapColors() {
    // SCA [swapColors(),changeColor(),window{}]
    var tempColor = anotherColor; // 'red'

    anotherColor = color;

    color = tempColor;
  }

  swapColors();
}
changeColor();

console.log('color is now ' + color); // ? 'red'
