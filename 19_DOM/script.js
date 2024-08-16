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

//nextElementSibling

const liss = document.getElementById("liTest");
const rodzenstwo = liss.nextElementSibling;
rodzenstwo.style.backgroundColor = "pink";