//callback function przekazywanie jednej funkcji jako argument do innej funkcji

function pierwsza(argument_do_wypolania){
    console.log("pierwsza funkcja");
    argument_do_wypolania(druga);
}

function druga(){
    console.log("druga funkcja");

}

function trzecia(argument_do_drugiej){
    console.log("trzecia funkcja");
    argument_do_drugiej();
}

pierwsza(trzecia)

 //forEach()

 let tablica = [1,2,3,4,5];

 tablica.forEach(function(element_tablicy){
    console.log(element_tablicy);
 });

tablica.forEach(potega);
tablica.forEach(wyswietl);

function potega(element,index,tab){
    tab[index] = element * element;
}

function wyswietl(elementy){
    console.log(elementy);
}

//.map() - zwraca nowa tablice po przejsciu funkcji

const numerki = [1,2,3,4,5];

const podwojone = numerki.map(podwoj);

const rozmiary = numerki.map(function(e){
    return e + e;
})

console.log(podwojone);
console.log(rozmiary);

function podwoj(elem){
    return Math.pow(elem,2);
}

//.filter() - zwraca przefiltrowana tablice i zwraca konkrete elementy ktore chcemy

let numer = [1,2,3,4,5];

let evenNumbers = numer.filter(isEven);

let miniLiczba4 = numer.filter(function(el){
    return el >= 4;
});

console.log(evenNumbers);  
console.log(miniLiczba4);  

function isEven(element){
    return element % 2 === 0;
}

//.reduce() - zwraca wartosci z tablicy do jedenj wartosci 

const ceny = [15,5,30,55,60];

const wszystko = ceny.reduce(suma);
const maksimum = ceny.reduce(max);

console.log(wszystko.toFixed(2)+" $");
console.log(maksimum);

function suma(kontener,element){
    return kontener + element;
}

function max(kontener,element){
    return Math.max(kontener,element); 
}

//function declaration

function deklarowana(){
    console.log("komunikat1");
}

deklarowana();

//function expressions
let komunikat = function(){
    console.log("komunikat2");
}

komunikat();

setTimeout(deklarowana,3000);

setTimeout(function(){
    console.log("przekazywanie calej funkcji jako ");
},3000);

const imiona = ["adam","ewa"];

const imi = imiona.map(function(element){
    return element.toUpperCase();
});

console.log(imi);

//arrow functions - funkcja strzalkowa dobra do stosowania do funkcji co wykona sie tylko raz

const hello = () => {
    console.log("hello");
}
const witam = (imie) => {
    console.log(`siema ${imie}`);
}

hello();
hello("Adam");

setTimeout(() => {
    console.log("arrow function");
},3000);

const squ = numerki.filter((element) => {
    return element % 2 === 0;//jak jest tylko jedna linia to nie potrzeba dawac return
});

console.log(squ);