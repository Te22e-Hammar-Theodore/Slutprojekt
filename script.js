let kundvagn = [];

function LäggTillIKundvagn(namn, pris) {
  const produkt = {
    namn: namn,
    pris: pris,
  };
  kundvagn.push(produkt);
  alert(JSON.stringify(kundvagn));
}
