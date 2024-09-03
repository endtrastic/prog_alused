const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Kasutaja sisestab andmed
ques.question("Sisestage enda vanus: ", vanus => { 
  ques.question("Sisestage end sugu (M, m või N, n): ", sugu => {
    ques.question("Sisestage treeningutüüp (1, 2 või 3): ", t_tyyp => {
      let Pulss;
      if (sugu == "M" || sugu == "m") {
        Pulss = 220 - vanus;
      } else if (sugu == "N" || sugu == "n") {
        Pulss = Math.round(206 - (vanus * 0.88));
      }

      let minpulss, maxpulss;
      if (t_tyyp == 1) {
        minpulss = Pulss * 0.5; 
        maxpulss = Pulss * 0.7;
      } else if (t_tyyp == 2) {
        minpulss = Pulss * 0.7; 
        maxpulss = Pulss * 0.8;
      } else if (t_tyyp == 3) {
        minpulss = Pulss * 0.8; 
        maxpulss = Pulss * 0.87;
      }

      console.log(`Teie pulsisagedus peaks olema vahemikus ${Math.round(minpulss)} kuni ${Math.round(maxpulss)}`);
      ques.close();
    });
  });
});