let kundvagn = [];

const Produkter = document.querySelector(".dropdown ul");
const totalPrisHTML = document.querySelector(".dropdown >p");
let totalPris = 0;

function uppdateraKundvagn() {
  for (let index = 0; index < kundvagn.length; index++) {
    const Namn = document.createElement("p");
    Namn.innerHTML = kundvagn[index].namn;

    const Pris = document.createElement("p");
    Pris.innerHTML = kundvagn[index].pris + " kr";

    const productHtml = document.createElement("li");
    productHtml.appendChild(Namn);
    productHtml.appendChild(Pris);
    Produkter.appendChild(productHtml);

    totalPrisHTML.innerHTML = "Summa: " + totalPris + " kr";
  }
}

function LäggTillIKundvagn(namn, pris) {
  const produkt = {
    namn: namn,
    pris: pris,
  };
  kundvagn.push(produkt);
  /* alert(JSON.stringify(kundvagn)); */

  totalPris += pris;

  localStorage.setItem("kundvagn", JSON.stringify(kundvagn));
  localStorage.setItem("Totala-Priset", totalPris);
  uppdateraKundvagn();
}

function rensaKundvagn() {
  totalPris = 0;
  kundvagn = [];
  localStorage.clear();
  uppdateraKundvagn();
}
kundvagn = JSON.parse(localStorage.getItem("kundvagn"));
totalPris = parseInt(localStorage.getItem("Totala-Priset"));
uppdateraKundvagn();
