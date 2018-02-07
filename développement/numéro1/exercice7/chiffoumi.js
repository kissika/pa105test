'use strict'
var computer;
var player;
var random;
var pierre;
var ciseau;
var feuille;

  player=window.prompt("chosissez entre pierre,ciseau,feuille");
random=Math.random();
if ( random<(1/3))
	{
		computer="pierre"


}
else if( random(<2/3))
{

	computer="feuille"
}
else 
{
	computer="ciseau"
}

document.write("l'ordinateur a choisi"+computer);
if(computer== player)
{
	document.write("égalité, vous avez choisi la méme chose")
}
else
{
	switch(computer)

		{
			case "ciseau:
		      if(player=="pierre")
		      {
		      	document.write("le joueur a gagné");
		      }
		      else
		      {
		      	document.write("l'ordinateur a gagné")
		      }
		      break;
		      