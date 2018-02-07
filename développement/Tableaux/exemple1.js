// Déclaration de deux variables.
var daySunday;
var weekDays;
var annee;
var moisannee;


// Affectation d'un tableau vide à une variable.
weekDays = new Array();     // syntaxe longue

// La syntaxe raccourcie est : weekDays = [];


// Affectation de valeurs au tableau.
weekDays[0] = 'Lundi';
weekDays[1] = 'Mardi';
weekDays[2] = 'Mercredi';
weekDays[3] = 'Jeudi';
weekDays[4] = 'Vendredi';
weekDays[5] = 'Samedi';
weekDays[6] = 'Dimanche';

// Affectation d'une valeur à la variable.
daySunday = 6;


/*
 * Affichage du contenu d'une partie du tableau directement dans la page HTML.
 *
 * La variable daySunday est utilisée comme un indice dans le tableau weekDays.
 */
document.write('Le premier jour de la semaine est le ' + weekDays[0] + ' ');
document.write('et le dernier jour de la semaine est le ' + weekDays[daySunday] + '.');
moisannee= new Array();
moisannee[0]='Janvier'
moisannee[3]='Février'
moisannee[4]='Mars'
moisannee[5]='Avril'
moisannee[6]='Mai'
moisannee[7]='Juin'
moisannee[8]='Juillet'
moisannee[9]='Aout'
moisannee[10]='Septembre'
moisannee[11]='Octobre'
moisannee[10]='Novembre'
moisannee[11]='Décembre'
