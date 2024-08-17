//eventListener - dodawanie jakis opcji mozliwosci do elementow na stronie:
//click, mouseover, mouseout ...

const myBox = document.getElementById("myDiv");
/*
function changeColor(event){
    event.target.style.background = "tomato";
    event.target.textContent = "klikniete";
 }

//myBox.addEventListener("click",changeColor);
myBox.addEventListener("click",() =>{
    myBox.style.background = "tomato";
    myBox.textContent = "klikniete";

    //mozna natomiast dac z tym event.target ktore oddnosi sie do tego elementu przy ktorym zostalo uzyte
});
*/
//key events
/*
document.addEventListener("keydown",(event) => {
    //console.log(event);
    console.log(event.key);

});
*/
const boxEmo = document.getElementById("testBox");

document.addEventListener("keydown",(event) => {
    boxEmo.textContent = "😂";
    boxEmo.style.backgroundColor = "blue";
});

document.addEventListener("keyup",(event) => {
    boxEmo.textContent = "😁";
    boxEmo.style.backgroundColor = "lightcoral";
});

const moveAmout = 100;
let x = 0;
let y = 0;
document.addEventListener("keydown",(event) => {
    console.log("weszlo");
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                console.log("weszlo1");
                y -= moveAmout;
                break;
                case "ArrowDown":
                    y += moveAmout;
                    console.log("weszlo2");
                break;
            case "ArrowLeft":
                console.log("weszlo3");

                x -= moveAmout;
                break;
            case "ArrowRight":
                console.log("weszlo4");

                x += moveAmout;
                break;
        }
        console.log(x + " " + y);

    }
    boxEmo.style.top = `${y}px`;
    boxEmo.style.left = `${x}px`;
});

//NodeList = statczne kolekcje skladajace sie z elementow HTML

let buttons = document.querySelectorAll(".btn");

buttons.forEach((element) =>{
    element.style.backgroundColor = "green";
    element.textContent += "🙌";
});


buttons.forEach((btn) => {
    btn.addEventListener("click",event => {
        event.target.style.backgroundColor = "tomato";
        //        btn.style.backgroundColor = "tomato";

    })
});

//dodawnie  elementu do nodeList

const newButton = document.createElement("button");

newButton.textContent = "btn5";
newButton.classList = "btn";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".btn1");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.target.remove();
        buttons = document.querySelectorAll(".btn1");//i przez to usuwane sa z listy nodelist
        console.log(buttons);
    })
});


//classList - mozliwosc modyfikowania jakie classy posiada element

const myButton = document.getElementById("myButton");
//add dodawanie do listy class
myButton.classList.add("enabled");
//usuwanie z listy klass
myButton.classList.remove("enabled");
/*
myButton.addEventListener("mouseover",(element) => {
    element.target.classList.add("hover");
});

myButton.addEventListener("mouseout",(element) => {
    element.target.classList.remove("hover");
});
*/
myButton.addEventListener("mouseover",(element) => {
    element.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout",(element) => {
    element.target.classList.toggle("hover");
});

myButton.classList.add("enabled");
myButton.addEventListener("click",(element) => {

    if(element.target.classList.contains("disabled")){
        element.target.textContent = "👍";
    }else{
        element.target.classList.replace("enabled","disabled");
    }

});