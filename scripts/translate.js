//Translate Section

const data = {
  italian: {
    title: "Terremoti in Italia",
    ptext: `L’Italia, è un paese molto soggetto ad eventi sismici quali terremoti e
    maremoti, specialmente centro-sud; Su circa 1300 terremoti avvenuti in
    europa, dopo l’anno 2000, circa 500 sono stati registrati solo in Italia,
    dove spesso ne succedono di molto gravosi:`,
    li1: `Il terremoto di Messina e Reggio Calabria avvenuto nel 1908, ha
    provocato una scossa da 7.5 magnitudo, che lo rende il secondo sisma più
    potente della storia italiana, con un bilancio di 100.000 vittime.`,
    li2: `Il terremoto dell’Abruzzo, più recente, è un insieme di scosse avvenute
    tra il 2008 ed il 2012, che hanno fatto registrare 309 vittime, oltre
    1600 feriti e danni per più di 10 miliardi di euro`,
    ptext2: `L’Italia è organizzata bene con strutture per evitare che possano
    ripresentarsi disastri come quello dell'Aquila, che limitano i danni il
    possibile.`,
    btn: "Back",
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

const data2 = {
  italian: {
    title: `Terremoti in Turchia`,
    p1: `Turchia, a partire dal 07/02 ha subito diverse scosse sismiche che
    oscillano tra i 4.1 e 7.8 di magnitudo, (maggiormente nella città di
    Kahramanmaraş ovvero l’epicentro del terremoto) negli ultimi 20 anni lo
    stato ha incontrato una lunga serie di terremoti più o meno catastrofici.
    La Turchia negli anni ha riscontrato molti terremoti per via della sua
    posizione geologica, il territorio si trova sopra 3 placche sismiche:`,
    li1: `Placca nord-anatolica.`,
    li2: `Placca arabica.`,
    li3: `Placca nord-africana`,
    p2: `I terremoti hanno causato un bilancio spaventoso, il numero delle vittime
    ha raggiunto quasi i 40000 e l’OMS afferma che questo numero potrebbe
    raddoppiare, però il numero di vittime è soltanto ipotetico perché le zone
    controllate dai ribelli, sia in Turchia che in Siria, non “fanno uscire”
    informazioni né sul bilancio delle vittime né sulle condizioni di vita che
    devono sopportare le persone.`,
    btn: `Back`,
  },

  english: {
    title: `Earthquakes in Turkey`,
    p1: `Starting from 07/02, Turkey has experienced several seismic tremors ranging from 4.1 to 7.8 magnitude, mostly in the city of Kahramanmaraş, which is the epicenter of the earthquake. Over the last 20 years, the country has encountered a long series of more or less catastrophic earthquakes. Due to its geological position, Turkey has experienced many earthquakes over the years. The territory is located above 3 seismic plates.`,
  },
};

function Translate() {
  let btn = document.getElementById("lang");
  let h2 = document.getElementById("h2");
  let p1 = document.getElementById("text");
  let li1 = document.getElementById("li1");
  let li2 = document.getElementById("li2");
  let p2 = document.getElementById("text2");

  if (btn.innerText == "IT") {
    btn.innerText = "EN";
    h2.innerText = data.italian.title;
    p1.innerText = data.italian.ptext;
    li1.innerText = data.italian.li1;
    li2.innerText = data.italian.li2;
    p2.innerText = data.italian.ptext2;
  } else {
    btn.innerText = "IT";
    p1.innerText = data.english.ptext;
    h2.innerText = data.english.title;
    li1.innerText = data.english.li1;
    li2.innerText = data.english.li2;
    p2.innerText = data.english.ptext2;
  }
}
