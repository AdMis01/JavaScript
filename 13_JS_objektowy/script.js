//Programowanie objektowe w JS

//objekty

const osoba = {
    firstName: "Adam",
    lasName: "Ogien",
    age: 69,
    employed: true,
    sayHello: function(){console.log("Witam zadajesz mi pytanie")},
    sayHello2: () => {console.log("Witam zadajesz mi pytanie")},
}

console.log(osoba.firstName);
console.log(osoba.lasName);
console.log(osoba.age);
console.log(osoba.employed);
osoba.sayHello();

// THIS - odwoluje sie do obiektu w ktorym sie znajudje 

const osoba1 = {
    name: "imie",
    food: "pizza",
    sayHello: function(){console.log(`hello ${this.name}`);},
}

osoba1.sayHello();

//konstruktor twworzenie obiektow 

function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`samochod ${this.model}`)}
}

const car1 = new Car("Ford","Mustang",2024,"red");
const car2 = new Car("Dodge","Challanger",2024,"black");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

//class - klasy es6

class Produkt{
    constructor(nazwa,cena){
        this.nazwa = nazwa;
        this.cena = cena;
    }

    wyswietlProdukt(){
        console.log(`produkt: ${this.nazwa}`);
        console.log(`cena: ${this.cena}`);
    }
    obliczCene(podatek){
        return (this.cena + (this.cena * podatek)).toFixed(2);
    }
}

const produkt1 = new Produkt("Koszulka",20);
produkt1.wyswietlProdukt();
const pod = 0.05;
const obliczonaCena = produkt1.obliczCene(pod);
console.log(`Cena z podatkiem ${obliczonaCena}`);

//static - to co jest statyczne np zmienna nalezy bardziej do classy niz do obiektu

class MathUtil{
    static PI = 3.14159;
    static getDiameter(promien){
        return promien * 2;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10)); 