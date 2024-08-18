const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;
let interCalId = null;

//initializeSlider();

document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){


    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");

        interCalId = setInterval(nextSlide,2000);
    }
    
    

}

function showSlide(index){
    
    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(interCalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}