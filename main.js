console.log("Ciao Linda");

// km da percorrere
const userKm = parseFloat(prompt("Quanti kilometri devi percorrere?"));
console.log(userKm);

// Età dell'utente
const userAge = parseInt(prompt("Inserisci la tua età"));
console.log(userAge);

// Dati delle variabili
const kmPrice = 0.21;
const basePrice = kmPrice * userKm;
let finalPrice = basePrice;

// Sconto 20% per minorenni < 18
if (userAge < 18) {
  finalPrice *= 0.8;
  // Sconto 40% over >65
} else if (userAge >= 65) {
  finalPrice *= 0.6;
}

// Messaggio del prezzo finale
console.log(`Il prezzo del tuo biglietto è: ${finalPrice.toFixed(2)}€`);
