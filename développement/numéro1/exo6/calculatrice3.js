'use strict'
var numberOne;
var numberTwo;
var operateur;
var result;


numberOne=window.prompt("quel est le premier nombre de votre operation")
numberTwo=window.prompt("quel est le deuxieme nombre de votre operation?")
operateut=window.prompt("quelle est l' operation mathematique que vous voulez effectuer?")

numberOne=parseFloat(numberOne);
numberTwo=parseFloat(numberTwo);
switch(operateur)
{
  case '+':
  case 'addition':
   result=numberOne+numberTwo;
   breack;


   case '/':
   case 'division':
    if(numberTwo != 0)
    {
      result = numberOne / numberTwo;
    }
    else
    {
      	document.write("arrete de faire le fou");
    }
    break;
    
  default:
    document.write("oublie les math");
    break;
}

if( isNaN(result) )
{
  document.write("vous n'avez pas saisi un nombre ");
}















