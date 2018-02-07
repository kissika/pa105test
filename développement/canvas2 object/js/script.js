'use strit'
var maConsole = {
	log: function(text)
	{
		console.log(text);

	},
	clear: function()
	{
	 console.clear();	
	},
	table: function()
	{
	console.table(tab);
	

	},
	count: function(label)
	{

	console.count(label);
	},



};
maConsole.log ("toto");
maConsole.clear();
maConsole.table();
maConsole.count("alice");
var maConsole=console;
function Pencil()
{
 this.fillStyle=
 this.strokeStyle=

}
/*pencil.prototype.Draw= function(x,y,width,height)
function Pencil()
{
	this.fillStyle = "green";
	this.strokeStyle = "red";*/
}

Pencil.prototype.Draw = function(x, y, width, height)
{
	ctx.fillStyle = this.fillStyle;
	ctx.fillRect(x, y, width, height);
}


var boiteACrayons = [];

for(var i = 0; i < 2000; i++)
{
	boiteACrayons.push(new Pencil());
}