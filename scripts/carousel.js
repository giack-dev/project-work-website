const img = document.getElementById("img");
let i = 0;

function Avanti() {
  i++;
  if (i > 3) {
    i = 1;
  }
  img.src = "./assets/Terremoti_" + i + ".jpg";
}

function Indietro() {
  i--;

  if (i < 1) {
    i = 3;
  }
  img.src = "./assets/Terremoti_" + i + ".jpg";
}
