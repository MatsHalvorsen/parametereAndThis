/* Skriv en funksjon som tar imot to parametere og returnerer summen av dem. Test funksjonen med ulike tall. */

function sumNum(a,b) {
    return a + b
    //let sum = a + b;
}
console.log(sumNum(2,5))

/*Lag et enkelt objekt med en metode som skriver ut verdien av this i konsollen. Kall metoden fra både objektet
 selv og fra et annet område (for eksempel fra den globale konteksten) for å se hvordan this oppfører seg forskjellig.*/
 const cars = {
    brand: "fiat",
    model: "500",
    color: "white",
    myMethod: function(){
    console.log(this.model)}
 }

 cars.myMethod();

/* Lag en HTML-side med en knapp. Legg til en hendelseshåndterer for klikk på knappen ved hjelp av JavaScript. 
Innenfor hendelseshåndteringsfunksjonen, bruk this til å endre tekstinnholdet i knappen når den klikkes. */ 
function changeText() {
    this.innerHTML = "howdy partner"
}

document.getElementById('fun').addEventListener('click', changeText);

/* Lag et objekt som representerer en bil. Legg til metoder for å endre bilens farge og hastighet. 
Disse metodene skal ta imot parametere for farge og hastighet, og oppdater objektets egenskaper med disse verdiene. 
Test objektet ved å endre bilens farge og hastighet ved hjelp av metodene. */

const car = {
    color: "red",
    speed: 0,

    changeColor: function(newColor) {
        this.color = newColor;
    }, 

    changeSpeed: function(newSpeed) {
        if (newSpeed >= 0) {
            this.speed = newSpeed;
        }
    }
}

car.changeColor("blue");
console.log(car)

car.changeSpeed(69);
console.log(car)