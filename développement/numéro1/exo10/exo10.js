'use srict'
var listeCourses=new Array();

var produit=[] ;

function addProduit(name)

{
	var name =window.prompt("qu'est ce que tu veux ajouter comme produit?") ;
	listeCourses.push(name);
}
addProduit("banane");
addProduit("banane");
addProduit("kiwi");
console.log(listeCourses);


var name=window.prompt("qu'est ce que tu veux retirer comme produit?")
function removeProduit(name)
{
	listeCourses.splice(name)
}
function removeAllProduit(name)
{

}
function displayProduitListInfo(name)
{
console.log(listeCourses,listeCourses.length);
}

addProduit("bananes");