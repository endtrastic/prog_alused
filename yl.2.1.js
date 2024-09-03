const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Kasutaja sisestab temperatuuri
ques.question("Sisestage õhutemperatuur: ", tempera => { 
            // Program vaatab kas temperatuur on suurem kui 4 kraadi või on suurem
            if (tempera > 4.0) {
            console.log("Ei ole jäätumise ohtu.");
            } else if (tempera < 4.0) {
            console.log("On jäätumise oht.");
            }
            ques.close();
        });
