'use strict'
var photos = document.querySelectorAll('#photo-list li');
function onClickPhoto()
{
	this.classList.toggle("selected");
}
console.log(this);
for(var i=0;i<= photos.length;i++){

	photos.addEventListener('click',onClickPhoto);
}
