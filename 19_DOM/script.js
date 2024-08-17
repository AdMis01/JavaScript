//DOM - DOCUMENT OBJECT MODEL

// element selectors 

//document.getElementById - zwraca jeden konkretny elemnet 

const myHeading = document.getElementById("myH1");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

//document.getElementsByClassName - zwraca grupe elementow
//jest jednak ograniczone co do jakich funkcji mozna uzywac

const fruits = document.getElementsByClassName("fruit");

fruits[0].style.backgroundColor = "yellow";

for(let fruit of fruits){
    fruit.style.backgroundColor = "red";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

//document.getElementsByTagName() - pobiera liste elementow po ich tagu

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let element of h4Elements){
    element.style.backgroundColor = "purple";
}

for(let element of liElements){
    element.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach((element) => {
    element.style.backgroundColor = "red";
});

//documnet.querySelector() - pobiera pierwszy element

const firstElement = document.querySelector("li");

firstElement.style.backgroundColor = "pink";

//document.querySelector() - pobiera wszystkie elementy i zwraca NODELIST czyli mozna na nich uzywac metody

const owoce = document.querySelectorAll(".fruit");

owoce.forEach((element) => {
    element.style.color = "green";
})

//DOM navigation 

//.firstElementChilds - pierwsze dziecko elementu

const testowanie = document.getElementById("doTestowania");

const firstChild = testowanie.firstElementChild;
firstChild.style.backgroundColor = "brown";
//mozna z guerySelectAll zeby pare pierwszych dzieci zmienic


//.lastElementChild

const lastChild = testowanie.lastElementChild;

lastChild.style.backgroundColor = "orange";

const ulElement = document.querySelectorAll("ul");

ulElement.forEach((element) => {
    const kid = element.lastElementChild;
    kid.style.backgroundColor = "green";
});

//.nextElementSibling

const liss = document.getElementById("liTest");
const rodzenstwo = liss.nextElementSibling;
rodzenstwo.style.backgroundColor = "pink";

//.previousElementSibling

const poprzednieRodzenstwie =liss.previousElementSibling;
poprzednieRodzenstwie.style.backgroundColor = "red";

//.parentElement

const rodzic = liss.parentElement;
rodzic.style.border = "2px solid black";

//.children

const listaDoDzieciakow = document.getElementById("doTestowania");
const dzieciaki = listaDoDzieciakow.children;

Array.from(dzieciaki).forEach((element) => {
    element.style.color = "white";

});

//dodawanie i zmienianie elementow HTML
//tworzenie nowego elementu

const newH1 = document.createElement("h1");

//dodawanie atrybutow i wlasciwosci

newH1.textContent = "Lubie programowac";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
//dodawanie elementu

//document.body.append(newH1);//dodawanie na koniec dokumentu
//document.body.prepend(newH1);//dodawanie na poczatek dokumentu

document.getElementById("box1").append(newH1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1,box2);

//mozna jeszcze za posrednictwem elementu

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1,boxes[0]);


//usuwanie elementu HTML

//document.body.removeChild(newH1);//dziela jak znajdzuje sie bezposrednio w body

document.getElementById("box1").removeChild(newH1);


