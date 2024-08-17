const slider = document.querySelector(".menu");
const btnToggles = document.querySelectorAll(".container-hamburger");
const nav = document.querySelector('.nav-slider');
const moveUp = document.querySelector('.moveUp');

const header = document.getElementById('header');
const home = document.querySelector('.home');
const aboutUs = document.querySelector('.about-us');

const inputText = document.getElementById('inputText');
let massege ='Witam , Jestem AdMis i chciał bym zostać Front-End Developerem';
let index = 0;
window.addEventListener('DOMContentLoaded',function(){
    setInterval(function(){
        if(index < massege.length)
        inputText.innerHTML += massege.charAt(index);
        index++;
        if(index>= massege.length){
            clearInterval
        }
    },100);
})

btnToggles.forEach(function(btn){
    btn.addEventListener('click',function(){
        slider.classList.toggle('active');
        nav.classList.toggle('active');
    });
});

const first = header.clientHeight;
const second = home.clientHeight;
const three = aboutUs.clientHeight;

let zmienna = first + second;
let zmienna2 = zmienna + three;

window.addEventListener('scroll',function(e){
    if (window.pageYOffset >= 1) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");   
    }
    if (window.pageYOffset >= 40) {   
        moveUp.classList.add("sho")
    } else {
        moveUp.classList.remove("sho");
    }
    
});


moveUp.addEventListener('click',function(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
