function returnInt(){
	return 16;
}

function multiply(nombre){
	
	return nombre*3;
}

function addZ(toto,b){
	
	var b="Z"
	return toto+b
}
function biggest(nombre1,nombre2){
	var big;
 if (nombre1>nombre2) {
 return big=nombre1
 }
 else return big=nombre2

}
function bigWord(c,d){
var e;
if (c.length<d.length) {
	return e=d;
}

else if (d.length=c.length){

    return e=c;
}
}
function prime(salaire,bonus){
 if(bonus==true) {
     salaire=salaire*10;
     return "£"+salaire;
 }
 else if(bonus==false) {
 	return"£"+salaire;
 }

}
function populate(number) {
	var tab=new Array();
	for(var i=0;i<number;i++){
		tab[i]=i;

	}
	return tab;	



}
function nbDiviseur(number3){
	var j=2;

	for (var i=1;i<=number3;i++){
		if(number3%i == 0){
			j++;
		}
   
   return j;
}


}


	




