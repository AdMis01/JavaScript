const elemetny = document.querySelectorAll(".hidden");

const widocznosc = new IntersectionObserver((wejscia) =>{
    wejscia.forEach((wejscie) =>{
        console.log(wejscie);
        if(wejscie.isIntersecting){
            wejscie.target.classList.add("show");
        }else{
            wejscie.target.classList.remove("show");
        }
    });
});

elemetny.forEach((elem) => {
    widocznosc.observe(elem);
});