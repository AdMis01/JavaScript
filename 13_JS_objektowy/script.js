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

//inheritance - dziedziczenie 

class Zwierze{
    alive = true;

    eat(){
        console.log(`to zwierze je ${this.name}`)
    }
    sleep(){
        console.log(`to zwierze spi ${this.name}`)
    }
}

class Krolik extends Zwierze{
    name = "Krolik";
    run(){
        console.log(`${this.name} potrafi biegac`);
    }
}

class Ryba extends Zwierze{
    name = "Ryba";
}

const krolik = new Krolik();
const ryba = new Ryba();

krolik.alive = false;
krolik.run();
ryba.eat();
ryba.sleep();

console.log(krolik.alive);

//super - pozwala na dostep do metod rodzica 

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`${this.name} moves at a speed of ${speed}`);
    }
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`${this.name} can swim`);
        super.move(this.swimSpeed);

    }
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`${this.name} can fly`);
        super.move(this.flySpeed);

    }
}

const rabbit = new Rabbit("rabit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("rabit",3,50);

console.log(rabbit.name);
console.log(fish.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();

//getery i setery - pobieranie lub ustawianie wartosci atrybutow

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth >= 0){
            this._width = newWidth;
        }else{
            console.error("width musi byc pozytywnym numerem");
        }
    }
    set height(newHeight){
        if(newHeight >= 0){
            this._height = newHeight;
        }else{
            console.error("height musi byc pozytywnym numerem");
        }
    }
    get width(){
        return this._width.toFixed(1);
    }

    get height(){
        return this._height.toFixed(1);
    }

    get area(){
        return this.width*this.height.toFixed(1);
        //        return this._width*this._height;

    }
}

const rectangle = new Rectangle(3,4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);