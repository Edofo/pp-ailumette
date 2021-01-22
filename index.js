const readline = require('readline');

const map = require('./map');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Initialisé le nombre d'allumettes
let nbrAllumettes = 16;


async function Afficher() {
    
    display(map);
    
    //Dire à la personne de choisir ou supprimer et le nombre 1 à 3 allumettes
    try {
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

function Player() {

    console.log('A votre tour !')
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
                        return; 

                    } else {

                        console.log(`Il reste ${nbrAllumettes} allumettes`);
                        display(map);
                        IA()
                        return; 
                    }
    
                } else {
                    console.error('Erreur : Il n\'y a pas assez d\'allumettes');
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

    const nbrChiffre = Math.floor(Math.random() * 3) +1 ;

    nbrAllumettes = nbrAllumettes - nbrChiffre

    console.log("Au tour de l'IA")
    await sleep(3000);


    if (nbrAllumettes <= 0) {

        console.log("Vous avez gagné !");
        display(map);
        rl.close();
        return; 
        
    } else {
        
        console.log(`L'IA a retirée ${nbrChiffre} allumettes`);
        console.log(`Il reste ${nbrAllumettes} allumettes`);
        display(map);
        Afficher()
        return; 
    }
};