"use Strict"
const taux_de_tva= 20;
var montantHT=100;
var montantTVA=0;
var TTC=null;
montantHT=window.prompt("saisir le montant HT");
montantHT=parseFloat(montantHT).toFixed(2);
montantTVA=montantHT*taux_de_tva/100;
montantTTC=montantHT+montantTVA
document.write(montantTTC+"€")
