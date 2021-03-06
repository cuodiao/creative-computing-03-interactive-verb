/*
  Returns a random whole number between minimum value and maximum value

  For example, calling randomNumber(0, 255);
  will return a random whole number between 0 and 255.

  Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
*/
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
var width = randomNumber(200, 200);
var height = randomNumber(200, 200);

shape.style.width = width + "px";
shape.style.height = height + "px";

function hslColor(h, s, l) {  
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}
var scale = randomFloat(0.1,0.99)
shape.style.scale = "(" + scale + ")";




var h = randomNumber(0,359);

shape.style.background = hslColor(h,50,50);

var h = randomNumber(0,359);

shape.style.borderColor = hslColor(h,50,50);

var container = document.querySelector(".content");

container.style.background = hslColor(h,30,90);

var s = randomNumber(1,99);

shape.style.background = hslColor(h,s,50);

var s = randomNumber(1,99);

shape.style.borderColor = hslColor(h,s,50);

var container = document.querySelector(".content");

container.style.background = hslColor(h,s,90);