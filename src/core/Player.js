const EasyIA = require('./ia/Easy');
const MediumIA = require('./ia/Medium');
const HardIA = require('./ia/Hard');

const readline = require('readline');


module.exports = async function Player() {

    
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    rl.question('Choisis une ligne : ', (valueOne) => {
        Ligne = parseInt(valueOne);
    
        if (Ligne <= 4 && Ligne >= 1) {
            console.log(`Ligne ${Ligne} confirmée`);
    
            rl.question('Choisis un chiffre : ', (valueTwo) => {
            Number = parseInt(valueTwo);
            
            if (Number <= 3 && Number >= 1) {

                let stringsearch = "|"
                for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[Ligne][i++]));
                
                count = count;

                if (count >= Number) {
    
                    if (Number <= Ailumettes) {
        
                        console.log(`Chiffre ${Number} confirmé`);
                        
                        Ailumettes = Ailumettes - Number

                        for (let i = 0; i < map[Ligne].length; i++) {

                            if (map[Ligne][i].indexOf('|') != -1) {
                            
                                map[Ligne][i] = map[Ligne][i].replace('|', ' ');
                    
                                function Counter() {
                                    increment++;
                                }
                    
                                Counter();  
                    
                                if (increment === Number) {
                                    increment = 0;
                                    break;
                                }
                            }
                        }

                        if (Ailumettes == 0) {

                            console.log("Vous avez perdu");
                            display(map);
                            rl.close();
                            return; 

                        } else {

                            console.log(`Il reste ${Ailumettes} allumette(s)`);
                            display(map);

                            switch (difficulty) {
                                case '1' :
                                    EasyIA();
                                    break;
                                case '2' :
                                    MediumIA();
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
                    }
    
                } else {
                    console.error(`Erreur : Il n\'y a pas assez d\'allumettes (il y a que ${count} allumettes)`);
                    Player();
                }
    
            } else {
                console.error('Erreur : Vous devez choisir un chiffre entre 1 et 3');
                Player();
            }
    
            });
    
        } else {
            console.error('Erreur : Vous devez choisir une ligne entre 1 et 4');
            Player();
        }
    });
};
