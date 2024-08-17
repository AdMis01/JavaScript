const arrOfTools = ["rock","paper","scissor"];

const btnC = document.querySelectorAll(".btnC");
const yourScor = document.querySelector(".your-scor");
const compScor = document.querySelector(".comp-scor");
const wynik = document.querySelector(".wynik");
const nrRundy = document.querySelector(".nrRundy");
const pcMove = document.querySelector(".pcMove");

let yourPoint = 0;
let compPoint = 0;
let numerRundy = 0;

btnC.forEach(function(item,index){
    item.addEventListener("click",function(){
        numerRundy++;
        nrRundy.innerText = numerRundy;

        console.log(index);
        const random = Math.floor(Math.random()*3);
        console.log(random);
        if(random === 0){
            pcMove.innerHTML = `<div class="${arrOfTools[index]}"><i class="fas fa-hand-rock"></i></div>`;
        }
        if(random === 1){
            pcMove.innerHTML = `<div class="${arrOfTools[index]}"><i class="fas fa-hand-paper"></i></div>`;
        }
        if(random === 2){
            pcMove.innerHTML = `<div class="${arrOfTools[index]}"><i class="fas fa-hand-scissors"></i></div>`;
        }
        const yourChoose = arrOfTools[index];
        const compChoose = arrOfTools[random];
        console.log(yourChoose);
        console.log(compChoose);

        if(yourChoose === compChoose){
            yourPoint++;
            compPoint++;
            wynik.innerHTML = "Remis";
            yourScor.innerText = yourPoint;
            compScor.innerText = compPoint;
        }
        if((yourChoose === "rock" && compChoose === "scissor")||(yourChoose === "paper" && compChoose === "rock") ||
        (yourChoose === "scissor" && compChoose === "paper")){
            wynik.innerHTML = "Win";
            yourPoint++;
            yourScor.innerText = yourPoint;
        }
        if((compChoose === "rock" && yourChoose === "scissor")||(compChoose === "paper" && yourChoose === "rock") ||
        (compChoose === "scissor" && yourChoose === "paper")){
            compPoint++;
            wynik.innerHTML = "Loss";
            compScor.innerText = compPoint;
        }
        console.log(yourPoint);
        console.log(compPoint);
    })
});
