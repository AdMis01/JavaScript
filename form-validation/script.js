const form = document.querySelector("form");
const mail = document.querySelector("#mail");
const pass = document.querySelector("#password");
const dubpass = document.querySelector("#dubPassword");
const uesrName = document.querySelector("#username");
const namein = document.querySelector("#name");
const kodP = document.querySelector("#kodP");
const tel = document.querySelector("#tel");
const adres = document.querySelector("#adres");
const city = document.querySelector("#city");
const woj = document.querySelector("#woj");

const errorMail = document.querySelector(".errorMail");
const passError = document.querySelector(".passError");
const passError2 = document.querySelector(".passError2");
const usernameError = document.querySelector(".usernameError");
const nameError = document.querySelector(".nameError");
const errorkodP = document.querySelector(".errorkodP");
const errorTel = document.querySelector(".errorTel");
const errorAdress = document.querySelector(".errorAdress");
const errorCity = document.querySelector(".errorCity");
const errorWoj = document.querySelector(".errorWoj");

const close = document.querySelector(".close");
const pods = document.querySelector(".pods");
const plist = document.querySelector(".p");
close.addEventListener("click",function(){
    pods.classList.remove("show");
});

let errroCom = [];
let arrOfDoucment= [mail,pass,dubpass,uesrName,namein,kodP,tel,adres,city,woj];
let arrOfError= [errorMail,passError,passError2,usernameError,nameError,errorkodP,errorTel,errorAdress,errorCity,errorWoj];
arrOfDoucment.forEach(function(item,index){
    item.addEventListener("change",function(){
        arrOfError[index].innerHTML = "";
    });
});
const regEmail = /[a-z0-9_.-]+@[a-z0-9_.-]+\.\w{2,4}/g;
const regKodP = /[0-9]{2}-[0-9]{3}/g;
const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
const regTel = /[0-9]{9}/g;

form.addEventListener("submit",function(e){
    const valMail = regEmail.test(mail.value);
    if(!valMail){
        errroCom.push("Nieprawidłowy email");
        errorMail.innerHTML = '<i class="fas fa-exclamation-circle"></i>Nieprawidłowy email';
    }
    const valPass = regPassword.test(pass.value);
    if(!valPass){
        errroCom.push("Nieprawidłowy hasło");
        passError.innerHTML = '<i class="fas fa-exclamation-circle"></i>Powinno mini 8 znaków dużą literę';
    }else if(pass.value !== dubpass.value){
        errroCom.push("Nieprawidłowy email");
        passError2.innerHTML = '<i class="fas fa-exclamation-circle"></i>Hasło sie nie zgadza';
    }
    
    const valKodP = regKodP.test(kodP.value);
    if(!valKodP){
        errroCom.push("Nieprawidłowy email");
        errorkodP.innerHTML = '<i class="fas fa-exclamation-circle"></i>Kod pocztowy np 00-000';
    }
    const valTel = regTel.test(tel.value);
    if(!valTel){
        errroCom.push("Nieprawidłowy email");
        errorTel.innerHTML = '<i class="fas fa-exclamation-circle"></i>Nie prawidłowy numer tel';
    }

    const test = document.querySelectorAll(".test");
    test.forEach(function(item){
        if(item.value === ""){
            const err = item.nextElementSibling;
            errroCom.push("blad");
            err.innerHTML = '<i class="fas fa-exclamation-circle"></i>To pole powinno być uzpełnione';
        }
    });
    if(errroCom.length === 0){
        //form.submit();
        e.preventDefault();
        let newArr = arrOfDoucment.map(function(item){
            return `<li>${item.value}</li>`;
        }).join("");
        pods.classList.add("show");
        plist.innerHTML += newArr;
    }else{
        e.preventDefault();
        errroCom = [];
    }
})