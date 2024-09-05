const readline = require('node:readline');
const ques = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



// Kasutaja sisestab andmed
ques.question("Mitu poialpoissi tahavad õunu? (7 max): ", ounad => {
    if (ounad <= 7) {
        let lumivalge = 14
        while (ounad != 0) {
            const veeretatud = Math.floor(Math.random() * 2) + 1
            console.log(`${veeretatud}`)
            lumivalge -= veeretatud
            ounad -= 1
           

        }
        console.log(`Lumivalgekesele jäi õunu: ${lumivalge}`)
    } else {
        console.log("Palun sisestage korrektne ounade arv")
    }
    ques.close()
});