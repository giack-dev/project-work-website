var i = 0;
var image = document.getElementById("im");

setInterval(() => {
  i++;
  if (i > 3) {
    i = 1;
  } else if (i < 1) {
    i = 3;
  }
  image.src = "./assets/Terremoti_" + i + ".jpg";
}, 4000);

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
