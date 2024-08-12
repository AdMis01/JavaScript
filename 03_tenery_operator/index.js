//Oby dwa dają ten sam wynik w tym przypadku komunikat

let wiek = 16;
let komunikat = "";

if(wiek > 12){
    komunikat = "do gimbazy";
}else{
    komunikat = "do podstawówki";
}

console.log(komunikat);

let komunikatWarunku = wiek > 12 ? "do gimbazy" : "do podstawówki";

console.log(komunikatWarunku);