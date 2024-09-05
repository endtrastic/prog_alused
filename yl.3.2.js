const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let total = 0
// Kasutaja sisestab andmed
ques.question("Palun Sisestage ringide arv: ", ring => { 
    for (let i = 0; i <= ring; i++) {
        if (i % 2 == 0) {
            total += i;
        }
    }
    console.log(`Porgandite koguarv on: ${total}`)
    ques.close()
    
});