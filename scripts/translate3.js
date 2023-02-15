const data3 = {
  italian: {
    title: `Aiuti ricevuti dal resto del mondo`,
    p1: `Subito dopo il terremoto del 06/02 la comunità internazionale si è
    mobilitata per aiutare il popolo Turco e Siriano; Sono anche state
    avanzate offerte d’aiuto da parte della NATO, dall’ONU, dall'UE e da
    moltissimi stati in particolare da USA, Italia e in generale l’intera
    Unione Europea. A questi aiuti si è anche aggiunto il mondo del web e
    quello calcistico, alcuni casi sono la donazione di 20000 euro da parte
    del calciatore ex Roma Nicolò Zaniolo oppure l’esorbitante cifra di 3
    milioni di euro donati dalla stella del calcio Lionel Messi che come molti
    personaggi pubblici collabora direttamente con l’UNICEF.`,
    btn: `Indietro`,
  },

  english: {
    title: `Aid received from the rest of the world.`,
    p1: `After the earthquake of 02/06, the international community mobilized to help the Turkish and Syrian people. Offers of assistance were also made by NATO, the UN, the EU, and many states, particularly by the USA, Italy, and the entire European Union. In addition to these aids, the world of the web and football also contributed. Some cases include the donation of 20,000 euros by former Roma footballer Nicolò Zaniolo, and the whopping sum of 3 million euros donated by football star Lionel Messi, who, like many public figures, works directly with UNICEF.`,
    btn: "Back",
  },
};

function Translate3() {
  let btn = document.getElementById("lang");
  let h2 = document.getElementById("h2");
  let p1 = document.getElementById("text");
  let btn2 = document.getElementById("back");

  if (btn.innerHTML == "IT") {
    btn.innerHTML = "EN";
    h2.innerHTML = data3.italian.title;
    p1.innerHTML = data3.italian.p1;
    btn2.innerHTML = data3.italian.btn;
  } else {
    btn.innerHTML = "IT";
    h2.innerHTML = data3.english.title;
    p1.innerHTML = data3.english.p1;
    btn2.innerHTML = data3.english.btn;
  }
}
