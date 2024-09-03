const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Kasutaja sisestab perekonnanime
ques.question("Sisestage perekonnanimi: ", nimi => { 
            // Program vaatab kas perekonanimi loppeb teatud viisi
            if (nimi.slice(-2) == "nė") {
            console.log("Te olete abielus.");
            } else if (nimi.slice(-2) == "tė") {
            console.log("Te olete vallaline.");
            } else if (nimi.slice(-1) == "ė") {
            console.log("Määramata.");
            } else { console.log("Te ei ole kahjuks leedulanna :(")}

            ques.close();
        });

