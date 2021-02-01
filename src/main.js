const Game = require('./core/Game')
const readline = require('readline');



let map = [
    /* 0 */['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    /* 1 */['*', ' ', ' ', ' ', '|', ' ', ' ', ' ', '*'],
    /* 2 */['*', ' ', ' ', '|', '|', '|', ' ', ' ', '*'],
    /* 3 */['*', ' ', '|', '|', '|', '|', '|', ' ', '*'],
    /* 4 */['*', '|', '|', '|', '|', '|', '|', '|', '*'],
    /* 5 */['*', '*', '*', '*', '*', '*', '*', '*', '*']
]; 

function display(values) {
    const rows = values.length

    for (let x = 0; x < rows; x++) {
        console.log(map[x].join(''))
    }
}

async function Play() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }); 

    rl.question('Choisis une difficulté (1 = Facile / 2 = Normal / 3 = Difficile) : ', (value) => {

        difficulty = value
    
        if (difficulty <= 3 && difficulty >= 1) {

            for (x = 0; x < 5; x++) {

                let stringsearch = "|"
                for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[x][i++])) {
                    
                    count = count
                }
        
                Ailumettes = Ailumettes + count
                
            }

            rl.close();

            Game();

        } else {
            console.error("Erreur : Vous devez choisir une difficulté entre 1 et 3")
            Play();
        }
    });

};

Play();