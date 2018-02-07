var Car;

Car = new Object();
Car.brand=new Array;

Car.brand[0] = "Audi";
Car.brand[1]="renault";
Car.buyDate = new Date('2001-03-31');

document.write(Car.brand);
document.write('<br>');
Car.passenger= new Array();
Car.passenger[0]="jean-claude"
Car.passenger[1]="jonny"

Car.luggage= "des bonbons";

document.write(Car.passenger[5]);
document.write('<br>');
document.write("la marque de la voiture est"+'<br>'+Car.brand[1])
