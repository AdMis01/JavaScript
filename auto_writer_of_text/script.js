const text = 'My viewers on Twitch are the best in the world :)';
let nie = document.querySelector('.nie');
let index = 0;
let btn = document.getElementById('btn');
btn.onclick = function(){
    clearInterval(zmienna);
}
function writeText(){
    nie.innerText = text.slice(0,index);
    index++;
    if(index > text.length - 1){
        index = 0;
    }
}
let zmienna = setInterval(writeText,100);
console.log(zmienna);