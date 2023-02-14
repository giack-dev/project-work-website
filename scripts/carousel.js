var i = 0;
var image = document.getElementById("im");

function Avanti() {
  i++;
  if (i > 3) {
    i = 1;
  }
  image.src = "./assets/Terremoti_" + i + ".jpg";
}

function Indietro() {
  i--;

  if (i < 1) {
    i = 3;
  }
  image.src = "./assets/Terremoti_" + i + ".jpg";
}
