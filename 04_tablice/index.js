let tablica = ["zero","jeden","dwa","trzy"];

tablica.push("cztery"); // dodaje na koniec tablicy
tablica.pop(); // usuwa od konca talicy
tablica.unshift("ponizej zera"); // dodaje na poczatek tablicy
tablica.shift(); // usuwa od poczatku tablicy

let dlugosc_tablicy = tablica.length;
//zwraca dlugosc tablicy
let miejsce = tablica.indexOf("jeden");
//zwraca miejsce na ktorym sie znajduje albo -1 jak nie wystepuje

tablica.sort();
//sortowanie alfabatyczne
tablica.sort().reverse();
//sortowanie do dodanie reverse to od konca 

for(let i = 0;i < tablica.length; i++){
    console.log(tablica[i]);
}

for(let tab of tablica){
    console.log(tab);
}

//console.log(tablica[0]);
//console.log(tablica[1]);
//console.log(tablica[2]);
//console.log(tablica[3]);
//console.log(tablica[4]);

//spread rozszerza tablice / tworzy wieksza tablicy z wielu elementow

let numery = [1,2,3,4,5];
let maks = Math.max(...numery);
let mini = Math.min(...numery);

let tekst = "sprawdzenie";
let kazdaLitera = [...tekst].join("-");
console.log(kazdaLitera); 

let polaczona = [...numery,...tablica,"200"];

console.log(polaczona);

//rest parameter laczy elementy w jedna tablice

function wyswietalnie(...elementy){
    console.log(elementy);
}

const food1 = "jeden";
const food2 = "dwa";
const food3 = "trzy";
const food4 = "cztery";
const food5 = "piec";

wyswietalnie(food1,food2,food3,food4,food5);
