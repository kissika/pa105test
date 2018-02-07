'use strict';

var rectangle;
var button;

function onClickButton()
{
  rectangle.classList.toggle("hide");
}
function onRectangleOver()
{
	rectangle.classList.toggle('important');
}
function onRectangleOut()
{
	rectangle.classList.toggle('double');
}


button = document.getElementById("toggle-rectangle");
rectangle = document.querySelector(".rectangle");

button.addEventListener('click', onClickButton);
rectangle.addEventListener('mouseover', onRectangleOver);
console.log(onRectangleOver);
rectangle.addEventListener('mouseout', onRectangleOut);
console.log(onRectangleOver);