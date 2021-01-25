const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Initialisé le nombre d'allumettes
let nbrAllumettes = 16;
let increment = 0;


async function Afficher() {
    
    
    //Dire à la personne de choisir ou supprimer et le nombre 1 à 3 allumettes
    try {
        console.log('A votre tour !');
        await sleep(1000);
        return await Player();
    } catch(e) {
        console.error("Un problème est survenue !")
    };
    

    //IA qui supprime
    IA();

};

Afficher()


function display(values) {
    const rows = values.length

    for (let x = 0; x < rows; x++) {
        console.log(map[x].join(''))
    }
}

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}   

    
let map = [
    /* 0 */['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    /* 1 */['*', ' ', ' ', ' ', '|', ' ', ' ', ' ', '*'],
    /* 2 */['*', ' ', ' ', '|', '|', '|', ' ', ' ', '*'],
    /* 3 */['*', ' ', '|', '|', '|', '|', '|', ' ', '*'],
    /* 4 */['*', '|', '|', '|', '|', '|', '|', '|', '*'],
    /* 5 */['*', '*', '*', '*', '*', '*', '*', '*', '*']
];


function Player() {

    rl.question('Choisis une ligne : ', (valueOne) => {
        nbrLignes = parseInt(valueOne);
    
        if (nbrLignes <= 4 && nbrLignes >= 1) {
            console.log(`Ligne ${nbrLignes} confirmée`);
    
            rl.question('Choisis un chiffre : ', (valueTwo) => {
            nbrChiffre = parseInt(valueTwo);
            
            if (nbrChiffre <= 3 && nbrChiffre >= 1) {

                let stringsearch = "|"
                for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[nbrLignes][i++]));
                
                var count = count;

                if (count >= nbrChiffre) {
    
                    if (nbrChiffre <= nbrAllumettes) {
        
                        console.log(`Chiffre ${nbrChiffre} confirmé`);
                        
                        nbrAllumettes = nbrAllumettes - nbrChiffre

                        Game();

                        if (nbrAllumettes == 0) {

                            console.log("Vous avez perdu");
                            display(map);
                            rl.close();
                            return; 

                        } else {

                            console.log(`Il reste ${nbrAllumettes} allumettes`);
                            display(map);
                            IA()
                            return; 
                        }
                    } else {
                        console.error(`Erreur : Il n\'y a pas assez d\'allumettes`)
                        Player();
                        return;
                    }
    
                } else {
                    console.error(`Erreur : Il n\'y a pas assez d\'allumettes (il y a que ${count} allumettes)`);
                    Player();
                    return;  
                }
    
            } else {
                console.error('Erreur : Vous devez choisir un chiffre entre 1 et 3');
                Player();
                return;  
            }
    
            });
    
        } else {
            console.error('Erreur : Vous devez choisir une ligne entre 1 et 4');
            Player();
            return;
        }
    });
};

async function IA() {


    const nbrLignes = Math.floor(Math.random() * 4) +1 ;
    let nbrChiffre = 0;

    let stringsearch = "|"
    for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[nbrLignes][i++]));
    
    var count = count;

    if (count <= 3 && count >= 1) {
        nbrChiffre = Math.floor(Math.random() * count) +1 ;
    } else {
        nbrChiffre = Math.floor(Math.random() * 3) +1 ;
    }

    if (count >= nbrChiffre) {

        console.log("Au tour de l'IA")
        await sleep(3000);

        nbrAllumettes = nbrAllumettes - nbrChiffre

        for (var i = 0; i < map[nbrLignes].length; i++) {

            if (map[nbrLignes][i].indexOf('|') != -1) {
        
                if (map[nbrLignes][i] == '|') {
        
                    map[nbrLignes][i] = map[nbrLignes][i].replace('|', ' ');
        
                    function Counter() {
                        increment++;
                    }
        
                    Counter();  
        
                    if (increment === nbrChiffre) {
                        increment = 0;
                        break;
                    }
                }
            }
        }

        if (nbrAllumettes <= 0) {

            console.log("Vous avez gagné !");
            display(map);
            rl.close();
            return; 
            
        } else {
            
            console.log(`L'IA a retirée ${nbrChiffre} allumettes`);
            console.log(`Il reste ${nbrAllumettes} allumettes`);
            display(map);
            await Afficher();
            return; 
        }

    } else {
        IA();
    }
};

function Game() {
    for (var i = 0; i < map[nbrLignes].length; i++) {

        if (map[nbrLignes][i].indexOf('|') != -1) {
    
            if (map[nbrLignes][i] == '|') {
    
                map[nbrLignes][i] = map[nbrLignes][i].replace('|', ' ');
    
                function Counter() {
                    increment++;
                }
    
                Counter();  
    
                if (increment === nbrChiffre) {
                    increment = 0;
                    break;
                }
            }
        }
    }
}