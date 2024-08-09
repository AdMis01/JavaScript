//callback function przekazywanie jednej funkcji jako argument do innej funkcji

function pierwsza(argument_do_wypolania){
    console.log("pierwsza funkcja");
    argument_do_wypolania(druga);
}

function druga(){
    console.log("druga funkcja");

}

function trzecia(argument_do_drugiej){
    console.log("trzecia funkcja");
    argument_do_drugiej();
}

pierwsza(trzecia)

 //forEach()

 let tablica = [1,2,3,4,5];

 tablica.forEach(function(element_tablicy){
    console.log(element_tablicy);
 });

tablica.forEach(potega);
tablica.forEach(wyswietl);

function potega(element,index,tab){
    tab[index] = element * element;
}

function wyswietl(elementy){
    console.log(elementy);
}


