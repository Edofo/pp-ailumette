const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



const map = []

const columns = 9
const rows = 6

for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++) {
        if (!map[x]) {
            map[x] = []
        }
        
        let element = ' '
        if (x === 0 || y === 0 || y === columns -1 || x === rows -1) {
            element = '*'
        }

        map[x][y] = element
    }
}

function display(values) {
    const rows = values.length

    for (let x = 0; x < rows; x++) {
        console.log(map[x].join(''))
    }
}

display(map);


// Initialisé le nombre d'allumettes
let nbrAllumettes = 16;


function Afficher() {
    
    /* BOUCLE */
    if (!nbrAllumettes == 0) {
        //Dire à la personne de choisir ou supprimer et le nombre 1 à 3 allumettes
        function chooseALine() {

            rl.question('Choisis une ligne : ', (valueOne) => {
                nbrLignes = parseInt(valueOne);
          
                if (nbrLignes <= 4 && nbrLignes >= 1) {
                    console.log(`Ligne ${nbrLignes} confirmée`);
            
                    rl.question('Choisis un chiffre : ', (valueTwo) => {
                    nbrChiffre = parseInt(valueTwo);
                    
                    if (nbrChiffre <= 3 && nbrChiffre >= 1) {
            
                        if (nbrChiffre <= nbrAllumettes) {
            
                            console.log(`Chiffre ${nbrChiffre} confirmé`);
                            
                            nbrAllumettes = nbrAllumettes - nbrChiffre

                            if (nbrAllumettes == 0) {

                                    console.log("Vous avez perdu");
                                    display(map);
                                    rl.close();
                            } else {
                                    console.log(`Il reste ${nbrAllumettes} allumettes`);
                                    display(map);
                            }
            
                        } else {
                            console.error('Erreur : Il n\'y a pas assez d\'allumettes');
                            chooseALine();
                            return;  
                        }
            
                    } else {
                        console.error('Erreur : Vous devez choisir un chiffre entre 1 et 3');
                        chooseALine();
                        return;  
                    }
            
                    });
            
                } else {
                    console.error('Erreur : Vous devez choisir une ligne entre 1 et 4');
                    chooseALine();
                    return;
                }
            });
        }
          
        chooseALine();          
        //IA qui supprime

        //Raffiché le tableau

    } else {
        Afficher()
    }
    /* BOUCLE */
}

Afficher()


