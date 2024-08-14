function updateClock(){
    const now = new Date();

    let hours = now.getHours().toString().padStart(2,0);
    //do utworzenia 12 godzinnego zegarka jak sie nie podoba mozna to usunac i bedzie normalny 
    const merdiem = hours >=12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    hours = hours.toString().padStart(2,0);
    const miniutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const cont = document.getElementById("clock");

    cont.textContent = `${hours}:${miniutes}:${seconds} ${merdiem}`;
}

setInterval(updateClock,1000);

