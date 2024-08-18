//callback hell

function task1(callback){
    setTimeout(() => {
        console.log("task 1 complete");
        callback();
    },2000);
}
function task2(callback){
    setTimeout(() => {
        console.log("task 2 complete");
        callback();
    },1000);}
function task3(callback){
    setTimeout(() => {
        console.log("task 3 complete");
        callback();
    },3000);}
function task4(callback){
    setTimeout(() => {
        console.log("task 4 complete");
        callback();
    },1500);}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                console.log("all task completerd");
            });
        })
    })
});

//promies - asynchroniczne operacje gwarantuje na zwrocenie wartosci

//async - makes a function return a promies
//await - makes an async function wait for a promise

function wyprowadzanie(callback){

    return new Promise((resolve,reject) =>{
        setTimeout(() => {

            const przejscie = true;
            if(przejscie){
                resolve("wyprowadzeni");
            }else{
                reject("nie wyprowadzone");
            }

        },1500);
    });
}

function czyszczenie(callback){


    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const myjumyju = true;
            if(myjumyju){

                resolve("czyszczenie");
            }else{
                reject("nie czyszczone");
            }
        },2500);
    });
}

function smieci(callback){

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const smie = true;
            if(smie){
                resolve("smieci");
            }else{
                reject("nie smieci");
            }
        },500);
    });
}
/*
wyprowadzanie(() =>{
    czyszczenie(() =>{
        smieci(() =>{
            console.log("wszystko zrobione");
        });
    });
});
*/

//to jest do tego powyzej dziala

/*
wyprowadzanie().then(value => {
    console.log(value);
    return czyszczenie();
}).then(value =>{
    console.log(value);
    return smieci();
}).then(value => {
    console.log(value);
    console.log("skonczone");
}).catch(error => console.error(error));
*/

async function doChores() {
    try{
        const owy = await wyprowadzanie();
        console.log(owy);
        
        const czysz = await czyszczenie();
        console.log(czysz);
    
        const sm = await smieci();
        console.log(sm);
    }catch(error){
        console.error(error);
    }

}

doChores();

//JSON - JAVASCRIPT OBJECT NOTATION kazdy plik to jeden dlugo plik string
//tutaj dajemy je od razu do stringa
const names=`["Jan","Michal","Zbigniew","Krzysztof"]`;
const person = `{
    "name": "Jan",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["gotowanie","jedzenie","prowadzenie"]
}`;
const people = `[{
    "name": "Jan",
    "age": 30,
    "isEmployed": true
},{
    "name": "Michal",
    "age": 54,
    "isEmployed": false
},{
    "name": "Zbigniew",
    "age": 72,
    "isEmployed": false
},{
    "name": "Krzysztof",
    "age": 23,
    "isEmployed": true
}]`;
const jsonString = JSON.stringify(names);//do przekonwertowania json do stringa
console.log(jsonString);


const parseDataNames = JSON.parse(names);//przehodzi do tablicy
const parseDataPerson = JSON.parse(person);//przehodzi do obiektu
const parseDataPeople = JSON.parse(people);//przehodzi do obiektu

//pobranie pliku

fetch("people.json").then((respone) => {
    return respone.json()
}).then(value => 
    console.log(value)
);
fetch("people.json").then((respone) => {
    return respone.json()
}).then(value => 
    value.forEach(value => console.log(value))
);