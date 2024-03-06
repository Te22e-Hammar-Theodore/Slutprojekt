let kundvagn = [];

const Produkter = document.querySelector(".kundvagnSida ul");
const totalPrisHTML = document.querySelector(".kundvagnSida >p");
let totalPris = 0;

function uppdateraKundvagn() {
  Produkter.innerHTML = "";
  totalPris = 0;
  for (let index = 0; index < kundvagn.length; index++) {
    const Namn = document.createElement("p");
    Namn.innerHTML = kundvagn[index].namn;

    const Pris = document.createElement("p");
    Pris.innerHTML = kundvagn[index].pris + " kr";

    const productHtml = document.createElement("li");
    productHtml.appendChild(Namn);
    productHtml.appendChild(Pris);
    Produkter.appendChild(productHtml);
    totalPris += kundvagn[index].pris;
  }
  totalPrisHTML.innerHTML = "Summa: " + totalPris + " kr";
}

function LäggTillIKundvagn(namn, pris) {
  const produkt = {
    namn: namn,
    pris: pris,
  };
  kundvagn.push(produkt);
  /* alert(JSON.stringify(kundvagn)); */

  localStorage.setItem("kundvagn", JSON.stringify(kundvagn));
  uppdateraKundvagn();
}

function rensaKundvagn() {
  kundvagn = [];
  localStorage.clear();
  uppdateraKundvagn();
}

kundvagn = JSON.parse(localStorage.getItem("kundvagn"));

if (kundvagn === null) {
  kundvagn = [];
}

uppdateraKundvagn();
