// prendo gli elementi dalla pagina
// nome, km e età
const nameElement = document.getElementById("name");
const kmElement = document.getElementById("km");
const ageElement = document.getElementById("age");
// form
const formElement = document.getElementById("form-ticket");
//bottoni
const buttonElement = document.getElementById("generate");
const deleteButtonElement = document.getElementById("delete");
//nome passeggero , offerta, carrozza, codice cp
const userNameElement = document.getElementById("add-name");
const offerElement = document.getElementById("add-offer");
let carrozzaElement = document.getElementById("add-carrozza");
let cpElement = document.getElementById("add-cp");
// prezzo del biglietto
const resultElement = document.getElementById("result");
// ticket visibile quando compilato
const ticketElement = document.getElementById("generated-ticket");

// rendo funzionanti i bottoni
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // Età dell'utente
  const userAge = ageElement.value;
  // km da percorrere
  const userKm = parseInt(kmElement.value);
  // Dati delle variabili
  const kmPrice = 0.21;
  const basePrice = kmPrice * userKm;
  let finalPrice = basePrice;
  userNameElement.innerText = nameElement.value;
  // il ticket diventa visibile
  ticketElement.classList.add("visible");
  // Sconto 20% per minorenni < 18
  if (userAge === "Minorenne") {
    finalPrice *= 0.8;
    offerElement.innerText = "Sconto Minorenne";
    resultElement.innerText = finalPrice.toFixed(2) + `€`;
    // prezzo standard per maggiorenni
  } else if (userAge === "Maggiorenne") {
    finalPrice = basePrice;
    offerElement.innerText = "Biglietto Standard";
    resultElement.innerText = finalPrice.toFixed(2) + `€`;
    // Sconto 40% over >65
  } else if (userAge === "Over 65") {
    finalPrice *= 0.6;
    offerElement.innerText = "Sconto Silver";
    resultElement.innerText = finalPrice.toFixed(2) + `€`;
  }
  // numero carrozza
  carrozzaElement.innerText = Math.floor(Math.random() * 5) + 1;
  // codice CP
  cpElement.innerText = Math.floor(Math.random() * 99999) + 10000;
  // Messaggio del prezzo finale
  resultElement.innerText = finalPrice.toFixed(2) + "€";
});

// annullo le modifiche apportate con il bottone annulla
deleteButtonElement.addEventListener("click", function () {
  nameElement.value = "";
  kmElement.value = "";
  ageElement.value = "";
  //annullando le modifiche cancello il biglietto dalla pagina
  ticketElement.classList.remove("visible");
});
