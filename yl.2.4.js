const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Kasutaja sisestab andmed
ques.question("Kas te soovite istekoha valida ise(kirjutage ise) või soovite loosida(kirjutage loos)? ", valik => { 
  if (valik == "ise" || valik == "Ise") {
    ques.question("Kas te soovite istuda akna juures (kirjutage aken) või mitte (muu)? ", valiknr2 => {
      if (valiknr2 == "aken" || valiknr2 == "Aken") {
        console.log(`Valisite ise istekoha. Aknakoht`)
      } else {
        console.log("Valisite ise istekoha. Vahekäigukoht")
      }
      ques.close();
    });
  } else if (valik == "loos" || valik == "Loos") {
    const valikud = ["Aknakoht", "Vahekäigukoht", "Vahekäigukoht"];
    const loositud = valikud[Math.floor(Math.random() * valikud.length)];
    console.log(`Teie loositud istekoht on: ${loositud}`);
    ques.close();
  }
});