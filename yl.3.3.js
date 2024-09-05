const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Kasutaja sisestab andmed
ques.question("Palun Sisestage taringute arv: ", taring => { 
    for (let i = 0; i < taring; i++) {
        const veeretatud = Math.floor(Math.random() * 6) + 1
        console.log(`Täring ${i + 1} tulemus on: ${veeretatud}`)
    }        
    ques.close()
    
});