'use strict';
var canvas;
var ctx;
var isClick=false;

function init()
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	ctx.strokeStyle = 'blue';
	ctx.strokeRect(10,10, 40,40);
	ctx.strokeRect(50,50, 50, 50);
	ctx.fillStyle = "green";
	ctx.fillRect(100,100, 80, 40);
	ctx.fillStyle = "blue";
	ctx.fillRect(100, 140, 80, 40);
	ctx.strokeStyle= "red";
	ctx.strokeRect(100, 140, 80, 40);
}


function move(event)
{
	if(isClick)
	{	
		var rect= canvas.getBoundingClientRect();
		var pos = { x: event.clientX, y: event.clientY };
		ctx.fillStyle = 'black';
		ctx.fillRect(pos.x, pos.y, 10, 10);	
	}
 {
	isClick = true;
}

function clickUp()
{
	isClick = false;
}

document.addEventListener("DOMContentLoaded", init);

document.addEventListener("mousemove", move);
document.addEventListener("mousedown", clickDown);
document.addEventListener("mouseup", clickUp);