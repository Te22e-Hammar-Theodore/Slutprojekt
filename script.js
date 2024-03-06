let kundvagn = [];
let antalProdukter = 0;
const Produkter = document.querySelector(".dropdown ul");
const totalPrisHTML = document.querySelector(".dropdown >p");
let totalPris = 0;

function LäggTillIKundvagn(namn, pris) {
  const produkt = {
    namn: namn,
    pris: pris,
  };
  kundvagn.push(produkt);
  /* alert(JSON.stringify(kundvagn)); */

  const Namn = document.createElement("p");
  Namn.innerHTML = namn;

  const Pris = document.createElement("p");
  Pris.innerHTML = pris + " kr";

  const productHtml = document.createElement("li");
  productHtml.appendChild(Namn);
  productHtml.appendChild(Pris);
  Produkter.appendChild(productHtml);

  totalPris += pris;
  totalPrisHTML.innerHTML = "Summa: " + totalPris + " kr";

  localStorage.setItem("kundvagn", JSON.stringify(kundvagn));
  localStorage.setItem("Totala-Priset", totalPris);
}

kundvagn = JSON.parse(localStorage.getItem("kundvagn"));
totalPris = parseInt(localStorage.getItem("Totala-Priset"));
