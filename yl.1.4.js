const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const min = readline.createInterface

rl.question("Sisestage enda nimi: ", nimi => { 
    rl.question(`Sisestage lubatud kiirus: `, lubakiirus => {
        rl.question(`Sisestage tegelik kiirus: `, tegekiirus => {
            let vahe =  tegekiirus - lubakiirus;

            let trahv = vahe * 3
            tulemus = Math.min(190, trahv)
            if  (vahe < 0) {
                tulemus = 0;
            }
            console.log(`${tulemus}`); 
            rl.close();
        });
    })
});