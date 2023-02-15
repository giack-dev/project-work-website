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
    btn: `Indietro`,
  },

  english: {
    title: `Earthquakes in Turkey`,
    p1: `Starting from 07/02, Turkey has experienced several seismic tremors ranging from 4.1 to 7.8 magnitude, mostly in the city of Kahramanmaraş, which is the epicenter of the earthquake. Over the last 20 years, the country has encountered a long series of more or less catastrophic earthquakes. Due to its geological position, Turkey has experienced many earthquakes over the years. The territory is located above 3 seismic plates.`,
    li1: "North Anatolian Plate.",
    li2: "Arabian Plate.",
    li3: "North African Plate.",
    p2: `The earthquakes have caused a frightening toll, the number of victims
      has reached almost 40,000 and WHO says this number could
      double, but the number of victims is only hypothetical because the areas
      controlled by rebels, both in Turkey and in Syria, do not “let out”
      information neither on the death toll nor on the living conditions that
      have to put up with people.`,
    btn: "Back",
  },
};

function Translate2() {
  let btn = document.getElementById("lang");
  let h2 = document.getElementById("h2");
  let p1 = document.getElementById("text");
  let li1 = document.getElementById("li1");
  let li2 = document.getElementById("li2");
  let li3 = document.getElementById("li3");
  let p2 = document.getElementById("text2");
  let btn2 = document.getElementById("back");

  if (btn.innerHTML == "IT") {
    btn.innerHTML = "EN";
    h2.innerHTML = data2.italian.title;
    p1.innerHTML = data2.italian.p1;
    li1.innerHTML = data2.italian.li1;
    li2.innerHTML = data2.italian.li2;
    li3.innerHTML = data2.italian.li3;
    p2.innerHTML = data2.italian.p2;
    btn2.innerHTML = data2.italian.btn;
  } else {
    btn.innerHTML = "IT";
    h2.innerHTML = data2.english.title;
    p1.innerHTML = data2.english.p1;
    li1.innerHTML = data2.english.li1;
    li2.innerHTML = data2.english.li2;
    li3.innerHTML = data2.english.li3;
    p2.innerHTML = data2.english.p2;
    btn2.innerHTML = data2.english.btn;
  }
}
