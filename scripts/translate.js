//Translate Section

const data = {
  italian: {
    title: "Terremoti in Italia",
    ptext: `L’Italia, è un paese molto soggetto ad eventi sismici quali terremoti e
    maremoti, specialmente centro-sud; Su circa 1300 terremoti avvenuti in europa, dopo l’anno 2000, circa 500 sono stati registrati solo in Italia, dove spesso ne succedono di molto gravosi:`,
    li1: `Il terremoto di Messina e Reggio Calabria avvenuto nel 1908, ha provocato una scossa da 7.5 magnitudo, che lo rende il secondo sisma più potente della storia italiana, con un bilancio di 100.000 vittime.`,
    li2: `Il terremoto dell’Abruzzo, più recente, è un insieme di scosse avvenute tra il 2008 ed il 2012, che hanno fatto registrare 309 vittime, oltre 1600 feriti e danni per più di 10 miliardi di euro`,
    ptext2: `L’Italia è organizzata bene con strutture per evitare che possano
    ripresentarsi disastri come quello dell'Aquila, che limitano i danni il
    possibile.`,
    btn: "Indietro",
  },
  english: {
    title: "Earthquakes in Italy",
    ptext: `Italy is a country that is very prone to seismic events such as earthquakes and tsunamis, especially in the central-southern regions. Out of approximately 1300 earthquakes that have occurred in Europe after the year 2000, around 500 have been recorded in Italy alone, where often very serious ones occur.`,
    li1: `The earthquake that struck Messina and Reggio Calabria in 1908 caused a 7.5 magnitude tremor, making it the second most powerful earthquake in Italian history, with a death toll of 100,000.`,
    li2: `The more recent earthquake in Abruzzo is a series of tremors that occurred between 2008 and 2012, which resulted in 309 deaths, over 1600 injuries, and damages of more than 10 billion euros.`,
    ptext2: `Italy is well-organized with structures to prevent disasters like the one in L'Aquila from happening again, which minimize the damages as much as possible.`,
    btn: "Back",
  },
};

function Translate() {
  let btn = document.getElementById("lang");
  let h2 = document.getElementById("h2");
  let p1 = document.getElementById("text");
  let li1 = document.getElementById("li1");
  let li2 = document.getElementById("li2");
  let p2 = document.getElementById("text2");
  let btn2 = document.getElementById("back");

  if (btn.innerText == "IT") {
    btn.innerText = "EN";
    h2.innerText = data.italian.title;
    p1.innerText = data.italian.ptext;
    li1.innerText = data.italian.li1;
    li2.innerText = data.italian.li2;
    p2.innerText = data.italian.ptext2;
    btn2.innerText = data.italian.btn;
  } else {
    btn.innerText = "IT";
    p1.innerText = data.english.ptext;
    h2.innerText = data.english.title;
    li1.innerText = data.english.li1;
    li2.innerText = data.english.li2;
    p2.innerText = data.english.ptext2;
    btn2.innerText = data.english.btn;
  }
}
