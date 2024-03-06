const varukorg = [];

function laggTillVarukorg(vara) {
  varukorg.push(vara);
  // Uppdatera kundvagnsikonen här
}

function taBortVarukorg(vara) {
  varukorg.splice(varukorg.indexOf(vara), 1);
  // Uppdatera kundvagnsikonen här
}

function hämtaVarukorg() {
  return varukorg;
}