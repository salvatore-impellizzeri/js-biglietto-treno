// RICHIESTE
const km = parseInt(prompt("Quanti km vuoi fare?"));
console.log("Km:", km);
const age = parseInt(prompt("Quanti anni hai?"));
console.log("Anni:", age);
document.getElementById('dati').innerHTML = "Hai " + age + " " + "anni e vuoi percorrere " + km + "km";

// PREZZO BASE
let pricetot = km * 0.21;
console.log("pricetot:", pricetot.toFixed(2), "€");

// SCONTO
if (age < 18){
    pricetot = pricetot * 0.20;
}

else if (age >= 65){
    pricetot = pricetot * 0.40;
}

// PREZZO FINALE
console.log("pricetot:", pricetot.toFixed(2), "€");
document.getElementById('prezzo').innerHTML = "Il prezzo del tuo biglietto è di " + pricetot.toFixed(2) + "€";