
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
  Returns a random floating point number between minimum value and maximum value
  For example, calling randomFloat(0, 1);
  will return a random floating between 0.0 and 1.0.
  Source: https://stackoverflow.com/questions/9724404/random-floating-point-double-in-inclusive-range
*/
function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}

var shape = document.querySelector(".shape");
var width = randomNumber(100, 500);
var height = randomNumber(100, 500);

shape.style.width = width + "px";
shape.style.height = height + "px";