function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var shape = document.querySelector(".shape");
var width = randomNumber(100, 500);
var height = randomNumber(100, 500);

shape.style.width = width + "px";
shape.style.height = height + "px";