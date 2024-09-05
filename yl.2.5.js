const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Kasutaja sisestab andmed
ques.question("Kui suur on fail megabaitides(MB)? ", bait => { 
    ques.question("Mis on kirja pealkiri? ", pealkiri => { 
        ques.question("Mis on kirjaga on kaasas fail? ", fail => { 
            if ((pealkiri ===  "") || ((fail == "jah" || fail == "yes") && bait > 1.0 )) {
                console.log("Kiri on spamm")
            } else {
                    console.log("Kiri ei ole spamm")
            } 
            ques.close()
        });
    });
});