console.log("Ciao Linda");

// prendo gli elementi dalla pagina
// nome, km e età
const nameElement = document.getElementById("name");
console.log(nameElement);
const kmElement = document.getElementById("km");
console.log(kmElement);
const ageElement = document.getElementById("age");
console.log(ageElement);
//bottoni
const buttonElement = document.getElementById("generate");
console.log(buttonElement);
const deleteButtonElement = document.getElementById("delete");
console.log(deleteButtonElement);
// prezzo del biglietto
const resultElement = document.getElementById("result");
console.log(resultElement);
//nome passeggero , offerta, carrozza, codice cp
const userNameElement = document.getElementById("add-name");
console.log(userNameElement);
const offerElement = document.getElementById("add-offer");
console.log(offerElement);
const carrozzaElement = document.getElementById("add-carrozza");
console.log(carrozzaElement);
const cpElement = document.getElementById("add-cp");
console.log(cpElement);

// rendo funzionanti i bottoni
buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(nameElement.value);
  console.log(kmElement.value);
  console.log(ageElement.value);
  // Età dell'utente
  const userAge = ageElement.value;
  // km da percorrere
  const userKm = parseInt(kmElement.value);
  // Dati delle variabili
  const kmPrice = 0.21;
  const basePrice = kmPrice * userKm;
  let finalPrice = basePrice;
  // Sconto 20% per minorenni < 18
  if (userAge === "Minorenne") {
    finalPrice *= 0.8;
    // Sconto 40% over >65
  } else if (userAge === "Over 65") {
    finalPrice *= 0.6;
  }
  // Messaggio del prezzo finale
  resultElement.innerText = finalPrice.toFixed(2) + "€";
});

// annullo le modifiche apportate con il bottone annulla
deleteButtonElement.addEventListener("click", function () {
  nameElement.value = "";
  kmElement.value = "";
  ageElement.value = "";
});
