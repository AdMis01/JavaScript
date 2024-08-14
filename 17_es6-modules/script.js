import {PI, getCirc,getObszar,getObjetosc} from './mathUtil.js';
//es6 modul jest do dodatkowy plik ktory mozna zaimportowac do innego pliku JS

console.log(PI);

const obwod = getCirc(10);
const area = getObszar(10);
const objetosc = getObjetosc(10);

console.log(obwod);
console.log(area);
console.log(objetosc);

//synchoniczne - wywoluje sie po koleji linia po lini

//asynchroniczne - callbacks promises async/await wiele oparacji ktore moga byc wykonywane bez czekania


//Error object - tworzenie swoich wlasnych error ktore moga nadal odpalic aplikacje 

try{
    console.log(x);

    //network errors
    //promies rejection
    //security errors

}catch(error){
    console.error(error);
    //console.log(error);
}finally{
    //close files
    //close connections
    //release resources

    console.log("to zawsze sie wykona");

}

console.log("to juz jest po wykrywaniu problemu");


try{
    const dividend = Number(window.prompt("enter a dividend:"));
    const divisor = Number(window.prompt("enter a divisor:"));

    if(divisor == 0){
        throw new Error("You cant divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);

}catch(error){
    console.error(error);
}
