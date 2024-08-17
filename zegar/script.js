const miniut = document.querySelector(".miniut");

const conTime = document.querySelector(".conTime");
const kom = document.querySelector(".kom");
const btnCon = document.querySelector(".btnCon");
function inputy(){
    conTime.innerHTML = `
    <div>
    <input type="number" class="inputHour" value="0">
    <input type="number" class="inputMin" value="0">
    <input type="number" class="inputSec" value="0"></div>`;
}
function btnZat(){
    btnCon.innerHTML =`<button type="button" class="przerwi">Zatrzymaj</button>`;
}
function btnWzn(){
    btnCon.innerHTML =`<button type="button" class="wznow">Wznów</button>`;
}
inputy();
btnZat();

const zaczni = document.querySelector(".zaczni");

function licznie(czas){
    const przerwi = document.querySelector(".przerwi");
    let wGodzinach = Math.floor(czas / (60 * 60));
    czas -= wGodzinach * 60 * 60;
    let wMinut = Math.floor(czas / 60);
    czas -= wMinut * 60;
    let wSec = czas;
    if(wMinut === 0 && wGodzinach > 0){
        wMinut = 60;
        wGodzinach--;
    }
    if(wSec === 0 && wMinut > 0){
        wSec = 59;
        wMinut--;
    }
    let ogolnyCzas = wGodzinach + wMinut + wSec;
    if(ogolnyCzas === 0){
        kom.innerHTML = `<p class="error">Podaj czas ile ma trwać stoper</p>`;
    }else{
        const interwaZmienna = setInterval(function(){
            
            przerwi.addEventListener("click",function(){
                clearInterval(interwaZmienna);
                btnWzn();
                const wznow = document.querySelector(".wznow");
                wznow.addEventListener("click",function(){
                    btnZat();
                    licznie(ogolnyCzas - 2);

                });
            });
            if(wMinut === 0 && wGodzinach > 0){
                wMinut = 60;
                wGodzinach--;
            }
            if(wSec === 0 && wMinut > 0){
                wSec = 59;
                wMinut--;
            }
            wSec--;
            let nowaGodzina = wGodzinach;
            let nowaMinuta = wMinut;
            let nowaSecond = wSec;
            if(nowaGodzina < 10){
                nowaGodzina = "0"+ wGodzinach;
            }
            if(nowaMinuta < 10){
                nowaMinuta = "0"+ wMinut;
            }
            if(nowaSecond < 10){
                nowaSecond = "0"+ wSec;
            }
            conTime.innerHTML = `${nowaGodzina}:${nowaMinuta}:${nowaSecond}`;
            if(wSec === 0 && wMinut === 0 && wGodzinach === 0){
                inputy();
                kom.innerHTML = `<p>Koniec czasu</p>`;
                clearInterval(interwaZmienna);
            }
        },1000);
    }
}

zaczni.addEventListener("click",function(){
    const inputHour = parseInt(document.querySelector(".inputHour").value);
    const inputMin = parseInt(document.querySelector(".inputMin").value);
    const inputSec = parseInt(document.querySelector(".inputSec").value);
    kom.innerHTML = "";
    let inputHourInSec = 60 * 60 * inputHour;
    let inputMinInSec = 60 * inputMin;
    let czas = inputHourInSec + inputMinInSec + inputSec;
    
    licznie(czas);
    
});
setInterval(function(){
    const curentDate = new Date();
    let hours = curentDate.getHours();
    let minut = curentDate.getMinutes();
    let secund = curentDate.getSeconds();
    if(secund<10){
        secund = "0" + secund;
    }
    if(minut<10){
        minut = "0" + minut;
    }
    if(hours<10){
        hours = "0" + hours;
    }
    miniut.innerHTML = `${hours}:${minut}:${secund}`;
},1000)
