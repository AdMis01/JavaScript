const min = 1;
const max = 10;
const wynik = Math.floor(Math.random()*(max - min -1)) + min;
//console.log(wynik);

let iloscProb = 0;
let dzialanie = true;
let proba;
while(dzialanie){
    proba = window.prompt(`Zgadni liczbę miedzy ${min} a ${max}`);

    proba = Number(proba);

    if(isNaN(proba)){
        window.alert("To co podales to nie numer");
    }else if(proba < min || proba > max){
        window.alert("Podales liczbe z poza przedzialu");
    }else{
        iloscProb++;
        
        if(proba < wynik){
            window.alert("Za mala liczba");
        }else if(proba > wynik){
            window.alert("Za duza liczba");
        }else if(proba === wynik){
            window.alert(`Zgadles twoja ilosc prob to ${iloscProb}`);
            dzialanie = false;
        }
    }

}

