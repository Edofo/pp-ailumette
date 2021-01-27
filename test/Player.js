const EasyIA = require('./ia/EasyIA');
const IA = require('./ia/IA');
const HardIA = require('./ia/HardIA');

module.exports = async function Player() {

    rl.question('Choisis une ligne : ', (valueOne) => {
        nbrLignes = parseInt(valueOne);
    
        if (nbrLignes <= 4 && nbrLignes >= 1) {
            console.log(`Ligne ${nbrLignes} confirmée`);
    
            rl.question('Choisis un chiffre : ', (valueTwo) => {
            nbrChiffre = parseInt(valueTwo);
            
            if (nbrChiffre <= 3 && nbrChiffre >= 1) {

                let stringsearch = "|"
                for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[nbrLignes][i++]));
                
                var count = count;

                if (count >= nbrChiffre) {
    
                    if (nbrChiffre <= nbrAllumettes) {
        
                        console.log(`Chiffre ${nbrChiffre} confirmé`);
                        
                        nbrAllumettes = nbrAllumettes - nbrChiffre

                        for (let i = 0; i < map[nbrLignes].length; i++) {

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

                        if (nbrAllumettes == 0) {

                            console.log("Vous avez perdu");
                            display(map);
                            rl.close();
                            return; 

                        } else {

                            console.log(`Il reste ${nbrAllumettes} allumettes`);
                            display(map);

                            switch (difficulty) {
                                case '1' :
                                    EasyIA();
                                    break;
                                case '2' :
                                    IA();
                                    break;
                                case '3' :
                                    HardIA();
                                    break;
                                default:
                                    console.error("Un problème est survenu !");
                            }
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
