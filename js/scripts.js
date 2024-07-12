// RICHIESTE
const distance = parseInt(prompt("Quanti km vuoi fare?"));
console.log("Distanza:", distance, "km");
const age = parseInt(prompt("Quanti anni hai?"));
console.log("Anni:", age);
document.getElementById('dati').innerHTML = "Hai " + age + " " + "anni e vuoi percorrere " + distance + "km";

// PREZZO BASE
let pricetot = distance * 0.21;
console.log("pricetot:", pricetot.toFixed(2), "€");

// SCONTO
if (age < 18){
    pricetot = pricetot * 0.80;
}

else if (age > 65){
    pricetot = pricetot * 0.60;
}

// PREZZO FINALE
console.log("pricetot:", pricetot.toFixed(2), "€");
document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + pricetot.toFixed(2) + "€";