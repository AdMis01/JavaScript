const zmniejsz = document.getElementById("zmn");
const zresetuj = document.getElementById("res");
const powieksz = document.getElementById("pow");
const numerek = document.getElementById("poleNumer");

let liczba = 0;

zmniejsz.onclick = function(){
    liczba--;
    numerek.textContent = liczba;
}

zresetuj.onclick = function(){
    liczba = 0;
    numerek.textContent = liczba;
}

powieksz.onclick = function(){
    liczba++;
    numerek.textContent = liczba;
}