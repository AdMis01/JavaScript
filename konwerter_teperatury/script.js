const textBox = document.getElementById("textBox");
const fahrenheit = document.getElementById("fahrenheit");
const celsjusze = document.getElementById("celsjusze");
const przycisk = document.getElementById("przycisk");
let wynik = document.getElementById("wyniki");

let temperatura;
przycisk.onclick = function(){
    if(fahrenheit.checked){
        temperatura = Number(textBox.value);
        temperatura = temperatura * 9 / 5 + 32;
        wynik.textContent = temperatura.toFixed(1) + "°F";
        
    }else if(celsjusze.checked){
        temperatura = Number(textBox.value);
        temperatura = (temperatura - 32) * (5/9);
        wynik.textContent = temperatura.toFixed(1) + "°C";
    }else{
        wynik.textContent = "Zaznacz na co chcesz przekonwertować";
    }
}