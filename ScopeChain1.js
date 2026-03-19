var color = 'blue';

var x = 300;

function changeColor() {
  // SCA [changeColor(),window{}]

  var anotherColor = 'red';

  var x = 200;

  function swapColors() {
    //

    function alert() {
      console.log('alert on leave today');
    }

    alert('hi'); // [swapColors(),changeColor(),window]

    var x = 100;

    console.log(x); // SCA [swapColors(),changeColor(),window{}]

    var tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
  }

  swapColors();
}
changeColor();

console.log('color is now ' + color);
