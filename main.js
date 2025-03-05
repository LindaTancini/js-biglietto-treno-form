console.log("Ciao Linda");

// prendo gli elementi dalla pagina
const nameElement = document.getElementById("name");
console.log(nameElement);
const kmElement = document.getElementById("km");
console.log(kmElement);
const ageElement = document.getElementById("age");
console.log(ageElement);

// Età dell'utente
const userAge = parseInt("Inserisci la tua età");
console.log(userAge);

// km da percorrere
const userKm = parseFloat("Quanti kilometri devi percorrere?");
console.log(userKm);

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
