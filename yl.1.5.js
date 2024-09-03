const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Kasutaja sisestab ainepunktide arvu
rl.question("Sisestage ainepunktide arv: ", ainepunkt_arv => { 
    // Kasutaja sisestab kursuste arvu
    rl.question("Sisestage kursuste arv: ", kursuste_arv => { 
            let ajakulu =  ainepunkt_arv * 26;

            let nadal = ajakulu / 10;
            // umardab ja valjastab tulemuse
            tulemus = Math.round(nadal)
            console.log(`${tulemus}`); 
            rl.close();
        });
    });
