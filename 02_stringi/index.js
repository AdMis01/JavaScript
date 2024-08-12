//Prace na stringu

let tekst = "kowalski";

console.log(tekst.charAt(0));
// daje litere która znajduje sie na pierwszym miejscu k

console.log(tekst.indexOf("w"));
// daje miejsce występowania litery w od początku 2

console.log(tekst.lastIndexOf("k"));
// daje miejsce litery k dzie występuje od końca 6

console.log(tekst.length);
// zwraca długość słowa 8

console.log(tekst.trim());
//usuwa spacje biale znaki

console.log(tekst.toLowerCase());
// ustawia wszystkie znaki na mala litere

console.log(tekst.toUpperCase());
// ustawia wszystkie znaki na duze litery

let wynik1 = tekst.startsWith(" ");
// sprawdzamy czy nasze slowo zaczyna sie od spacji jak tak to true
console.log(wynik1);

let wynik2 = tekst.endsWith(" ");
// sprawdzamy czy nasze slowo konczy sie od spacji jak tak to true
//false
console.log(wynik2);

let wynik3 = tekst.includes("a");
//zwraca prawde jezeli dany znak znajduje sie we stringu lub false jak nie 
//true
console.log(wynik3);

let numer1 = "123-456-789";
numer1 = numer1.replaceAll("-",":");
//znajduje wszystkie myslniki i zamienia je na dwukropek
//123:456:789
console.log(numer1);

let numer2 = "123-456-789";
numer2 = numer2.padStart(15,"0");
//dodaje od poczatku zera az nasz string bedzie mial w sumie 15 znakow
//0000123-456-789
console.log(numer2);

let numer3 = "123-456-789";
numer3 = numer3.padStart(12,"0");
//dodaje do koncza zera az nasz string bedzie mial w sumie 12 znakow
//123-456-7890
console.log(numer3);

let usinanie = "test ucinania";

let pierwszyCzlon = usinanie.slice(0,4);
//usunianie podajemy argument poczatku i konca do ktorego ma uciac
// test
console.log(pierwszyCzlon)

let drugiCzlono = usinanie.slice(5,13);
// ucinania
console.log(drugiCzlono)

let odTylu = usinanie.slice(-1);
// a 
console.log(odTylu)


