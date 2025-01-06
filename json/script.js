let dane = `{
    "user": {
        "name": "Jan",
        "username": "Kowalski",
        "age": 43,
        "languages": ["JavaScript","Java"],
        "address": {
            "city": "Krk"
        }
    }
}`;

let obj = JSON.parse(dane);
console.log(obj);
console.log(obj.user.name);

let car = {
    brand: "Ford",
    model: "Mustang",
    colors: ["red","green"],
    engine: {
        type: "v8"
    }
}

let carJson = JSON.stringify(car);
console.log(carJson);
console.log(carJson);

fetch("https://www.swapi.tech/api/films/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err))