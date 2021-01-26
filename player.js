
const Map = require('./Map');

async function Player() {

    rl.question('Choisis une ligne : ', (valueOne) => {
        nbrLignes = parseInt(valueOne);
    
        if (nbrLignes <= 4 && nbrLignes >= 1) {
            console.log(`Ligne ${nbrLignes} confirmée`);
    
            rl.question('Choisis un chiffre : ', (valueTwo) => {
            nbrChiffre = parseInt(valueTwo);
            
            if (nbrChiffre <= 3 && nbrChiffre >= 1) {

                let stringsearch = "|"
                for (let i = count = 0; i < terrain[0].length; count +=+ (stringsearch === terrain[nbrLignes][i++]));
                
                var count = count;

                if (count >= nbrChiffre) {
    
                    if (nbrChiffre <= nbrAllumettes) {
        
                        console.log(`Chiffre ${nbrChiffre} confirmé`);
                        
                        nbrAllumettes = nbrAllumettes - nbrChiffre

                        
                        if (nbrAllumettes == 0) {

                            console.log("Vous avez perdu");
                            rl.close();
                            return; 

                        } else {

                            console.log(`Il reste ${nbrAllumettes} allumettes`);
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
}

module.exports = Player;