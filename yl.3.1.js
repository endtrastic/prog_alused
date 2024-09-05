const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Kasutaja sisestab andmed
ques.question("Palun Sisestage mitu äratada: ", aratus => { 
    for (let i = 0; i < aratus; i++) {
        console.log("ärka laiskvorst!!!")
        ques.close()
    }
});