function generujHaslo(dlugoscHasla,zawMaLi,zawDuLi,zawLicz,zawSymb){
    
    const maleLitery = "abcdefghijklmnopqrstuvwxyz";
    const duzeLitery = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const liczby = "0123456789";
    const symbole = "!@#$%^&*()_-=+";

    let pozwolenia = "";
    let hasloGen = "";

    pozwolenia += zawMaLi ? maleLitery : "";
    pozwolenia += zawDuLi ? duzeLitery : "";
    pozwolenia += zawLicz ? liczby : "";
    pozwolenia += zawSymb ? symbole : "";

    if(dlugoscHasla <= 0){
        return `Haslo musi zawierac chociaz 1 znak`;
    }

    if(pozwolenia.length === 0){
        return `Nie wybrales zadnych kryteriow do utworzenia hasla`;
    }

    for(let i = 0; i < dlugoscHasla; i++){
        const wybieranieRandomowe = Math.floor(Math.random() * pozwolenia.length);
        hasloGen += pozwolenia[wybieranieRandomowe];
    }
    console.log(pozwolenia);
    
    return hasloGen;
}

const dlugosc = 12;
const zawieraMaleLitery = true;
const zawieraDuzeLitery = true;
const zawieraLiczby = true;
const zawieraSymbole = true;


const haslo = generujHaslo(dlugosc,zawieraMaleLitery,zawieraDuzeLitery,zawieraLiczby,zawieraSymbole);

console.log(`Wygenerowane haslo to: ${haslo}`);