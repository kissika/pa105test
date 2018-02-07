'use strict'
const Tva=20;
var montantHT;
var montantTTC;
var montantTva;
var pourcentageRemise;
var demandeRemise;





montantHT= ( window.prompt("quel est le montant de votre achat?"));

demandeRemise=window.prompt("souhaitez-vous une remise?");


if( demandeRemise == 'oui'|| demandeRemise =='yes')
{pourcentageRemise=parseFloat( window.prompt("quel est le pourcentage de la remise?"));
	montantHT=montantHT-(montantHT* pourcentageRemise/100);


}
montantTva= montantHT*Tva/100;
montantTTC=montantHT+montantTva;

if(demandeRemise == 'oui' || demandeRemise == 'yes')
{
    document.write('<p>Une remise de ' + pourcentageRemise + '% a été appliquée sur le montant HT.</p>');
}
else
{
    document.write("<p>Aucune remise n'a été appliquée.</p>");
}