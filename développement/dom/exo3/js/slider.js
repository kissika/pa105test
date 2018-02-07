'use strict';
 var photosArray=[];
 photosArray=[
	{path:"images/1.jpg",figcaption:"lapin sur un toit" },          
	{path:"images/2.jpg",figcaption:"toto sur un toit" },
	{path:"images/3.jpg",figcaption:"tata sur un toit" },
	{path:"images/4.jpg",figcaption:"lapon sur un toit" },
	{path:"images/5.jpg",figcaption:"tapon sur un toit" },
	{path:"images/6.jpg",figcaption:"rapin sur un toit" },
	{path:"images/7.jpg",figcaption:"sapin sur un toit" },
	{path:"images/8.jpg",figcaption:"dapin sur un toit" },
	{path:"images/9.jpg",figcaption:"fapin sur un toit" },
	{path:"images/10.jpg",figcaption:"mapin sur un toit" }
 ];

 var chemin = document.getElementById('recup');
 var arriere = document.getElementById('slider-previous');
 var lecture = document.getElementById('slider-toggle');
 
 var suivant = document.getElementById('slider-next');
 var hasard = document.getElementById('slider-random');

 function enarriereclick()
 {
 console.log(5+4)
 };
 function enavantclick()
 {
  
 };
 function suivantclick()
 {

 };
 function hasardclick()
 {

 }
 arriere = arriere.addEventListener('click',enarriereclick);
 
 lecture = lecture.addEventListener('click',enavantclick);
 suivant = suivant.addEventListener('click',suivantclick);
 hasard = hasard.addEventListener('click',hasardclick);
 
 


 
 /*chemin.setAttribute("src","images/4.jpg");*/
