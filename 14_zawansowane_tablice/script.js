//destructuring - rozpraszanie 

//zamiana wartosci dwoch zmiennych sposob 1

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

//sposob 2 zamiana wartosc w tablicy 

const colory = ["red","yellow","black","blue","brown"];
[colory[0],colory[3]] = [colory[3],colory[0]];

console.log(colory);

//przypisywanie elementow tablicy do zmiennych sposob 3

const [firstColor,secondColor,thirdColor,...extraColors] = colory;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// przypisywanie obiektu do zmiennych sposob 4

const person1 = {
    firstName: "ad",
    lastname: "mus",
    age: 30,
    job: "it",
}

const person2 = {
    firstName: "da",
    lastname: "sum",
    age: 3,
}

//const {firstName,lastname,age,job = "brak pracy"} = person1;
const {firstName,lastname,age,job = "brak pracy"} = person2;

console.log(firstName);
console.log(lastname);
console.log(age);
console.log(job);

// sposob 5

function displayPerson({firstName,lastname,age,job = "brak pracy"}){
    console.log(`name: ${firstName,lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person3 = {
    firstName: "ad",
    lastname: "mus",
    age: 30,
    job: "it",
}

const person4 = {
    firstName: "da",
    lastname: "sum",
    age: 3,
}

displayPerson(person3);
displayPerson(person4);

//nested objects - zagniezdzone obiekty

const person = {
   fullName: "zbigniew kowaliski",
   age: 30,
   isStudent: true,
   hobbies: ["granie","programowanie","gotowanie"],
   address:{
    street: "123 zakopane",
    city: "321 poznan",
    county: "Polska"
   } 
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.address.county);

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person10 = new Person("kowal",30,"123 poznan","warszawa","zakopane");
const person11 = new Person("ski",33,"456 cierocin","mediolan","gdansk");

console.log(person10.name);
console.log(person10.age);
console.log(person10.address.street);
console.log(person10.address.city);
console.log(person10.address.country);

//array of objects - tablice z obiektami

const fruits = [
    {name: "apple",color: "red",calories: 95},
    {name: "banana",color: "yellow",calories: 195},
    {name: "orange",color: "orange",calories: 45},
    {name: "dragon fruit",color: "red",calories: 395}
];

//console.log(fruits[0].name);

fruits.push({name: "coconut",color: "white",calories: 150});

console.log(fruits);

fruits.pop();

console.log(fruits);

//fruits.splice(1,2);

console.log(fruits);

fruits.forEach( (element) => {
    console.log(element)
});

const nameFruits = fruits.map((element) => {
    return element.name;
});

console.log(nameFruits);

const yellowFruits = fruits.filter((element) => {
    return element.color === "yellow"
});

console.log(yellowFruits);

const maxFruit = fruits.reduce((max,fruit) =>{ 
    return fruit.calories > max.calories ? fruit : max
});

console.log(maxFruit);

//sort() - metoda ktora sortuje lexicograhic (alphabet + number + symbole)

let numery = [1,7,4,2,8,9,10,7,3,5];

//numery.sort(); nie sortuje od najmniejszej do najwiekszej

numery.sort((a,b) => a - b); //sortowanie od najmniejszej do najwiekszej
numery.sort((a,b) => b - a); //sortowanie od najwiekszej do najmnijejsze

console.log(numery);

const people = [
    {name: "ad", age: 30, gpa: 3.0},
    {name: "wz", age: 37, gpa: 1.0},
    {name: "sr", age: 15, gpa: 5.5},
    {name: "gh", age: 77, gpa: 2.5}
];

//people.sort((a,b) => { return a.age - b.age});
people.sort((a,b) => { return a.age.toLocaleString(b.age)});//sortuje po imieniu po stringu 

console.log(people);

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

//cards.sort(() => {return Math.random() - 0.5}); // sortuje to randomowo

//console.log(cards);

//Fisher-Yates algorytm 
shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]]; 
    }
}


//Date objects 

//const date = new Date();
//Date(year,month,day,hour,minute,second,ms)
//const date = new Date(2024, 9, 11);
//const date = new Date("2024-01-02");
//const date = new Date(0);
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const miniute = date.getMinutes();
const second = date.getSeconds();
const dayOfWeed = date.getDay();

date.setFullYear(2030);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(4);
date.setSeconds(6);
console.log(date);

const date1 = new Date("2023-12-31");
const date2 = new Date("2023-10-31");
//const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy new year!");
}

//Closure - funkcja zdefiniowana w innej funkcji 

function outer(){

    let message = "hello";

    function inner(){
        console.log(message);
    }
    inner();
}

outer();

function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    
    }

    function getCount(){
        return count;
    }

    return {increment,getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());

//setTimeOut() - jest to funkcja ktora opoznia dzialanie jakis rzeczy po czasie 

function sayHello(){
    window.alert("hello");
}

setTimeout(sayHello(),3000);

setTimeout(function(){console.log("inter")},3000);

setTimeout(() => { console.log("siema strzalkowa")},3000);

const timeOutId = setTimeout(() => window.alert("hello do wyczyszczenia"),4000);

clearTimeout(timeOutId);

let timeId;

function startTimer(){
    timeId = setTimeout(() => {console.log("nacisniety przycisk")},4000);
}

function clearTimer(){
    clearTimeout(timeId);
    console.log("skasowano");
}