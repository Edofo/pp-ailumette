const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nbrAllumettes = 0;
let increment = 0;
let difficulty = 0;
let count = 0;

async function Afficher() {

    rl.question('Choisis une difficulté (1 = Facile / 2 = Normal / 3 = Difficile) : ', (value) => {

        difficulty = value
    
        if (difficulty <= 3 && difficulty >= 1) {

            for (x = 0; x < 5; x++) {

                let stringsearch = "|"
                for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[x][i++])) {
                    
                    count = count
                }
        
                nbrAllumettes = nbrAllumettes + count
                
            }

            Jeu();

        } else {
            console.error("Erreur : Vous devez choisir une difficulté entre 1 et 3")
            Afficher();
        }
    });

};

Afficher();

async function Jeu() {

    display(map);
                
    try {
        console.log('A votre tour !');
        await sleep(500);
        return await Player();
    } catch(e) {
        console.error("Un problème est survenue !")
    };
        
}


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
                for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[nbrLignes][i++]));
                
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

function Game() {
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
}


async function EasyIA() {

    const nbrLignes = Math.floor(Math.random() * 4) +1 ;
    let nbrChiffre = 0;

    let stringsearch = "|"
    for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[nbrLignes][i++]));
    
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

        if (nbrAllumettes <= 0) {

            console.log("Vous avez gagné !");
            display(map);
            rl.close();
            return; 
            
        } else {
            
            console.log(`L'IA a retirée ${nbrChiffre} allumettes`);
            console.log(`Il reste ${nbrAllumettes} allumettes`);
            await Jeu();
            return; 
        }

    } else {
        EasyIA();
        return;
    }
};


async function IA() {

    const nbrLignes = Math.floor(Math.random() * 4) +1 ;
    let nbrChiffre = 0;

    let stringsearch = "|"
    for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[nbrLignes][i++]));
    
    var count = count;

    if (count > 0) {

        if (nbrAllumettes > 3) {

            if (count <= 3) {
                nbrChiffre = Math.floor(Math.random() * count) +1 ;
            } else {
                nbrChiffre = Math.floor(Math.random() * 3) +1 ;
            }

        } else {

            switch (count) {
                case 3: case 2:
                    nbrChiffre = 2;
                    break;
                case 1:
                    for (x = 0; x < 5; x++) {

                        let stringsearch = "|"
                        for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[x][i++])) {
                            
                            var count = count
                        }
                
                        if (count >= 2) {
                            IA();
                        } else {
                            nbrChiffre = 1;
                        }
                        
                    }
                    break;
                case 0:
                    IA();
                    break;
            }
        }

        if (count >= nbrChiffre) {

            console.log("Au tour de l'IA")
            await sleep(3000);

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

            if (nbrAllumettes <= 0) {

                console.log("Vous avez gagné !");
                display(map);
                rl.close();
                return; 
                
            } else {
                
                console.log(`L'IA a retirée ${nbrChiffre} allumettes`);
                console.log(`Il reste ${nbrAllumettes} allumettes`);
                await Jeu();
                return; 
            }
        
        } else {
            IA();
            return;
        }

    } else {
        IA();
        return;
    }
};


async function HardIA() {

    const nbrLignes = Math.floor(Math.random() * 4) +1 ;
    let nbrChiffre = 0;

    let stringsearch = "|"
    for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[nbrLignes][i++]));
    
    var count = count;

    if (count >= 1) {
        switch (nbrAllumettes) {
            case 15: case 13: case 11: case 9: case 7: case 1:
                if (count >= 3) {
                    nbrChiffre = 3;
                } else {
                    nbrChiffre = 1;
                }
                break;
            case 14: case 12: case 10: case 8:
                if (count >= 2) {
                    nbrChiffre = 2;
                } else {
                    nbrChiffre = 1;
                }
                break;
            case 6: case 2:
                nbrChiffre = 1;
                break;
            case 5:
                switch (count) {
                    case 5: case 4: case 3: case 2:
                        nbrChiffre = 1;
                        break;
                    case 1: case 0:
                        HardIA();
                        break;
                }
            case 4:
                switch (count) {
                    case 4: case 3:
                        nbrChiffre = 3;
                        break;
                    case 2:
                        nbrChiffre = 1;
                        break;
                    case 1:
                        for (x = 0; x < 5; x++) {

                            let stringsearch = "|"
                            for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[x][i++])) {
                                
                                var count = count
                            }
                    
                            if (count >= 2) {
                                HardIA();
                            } else {
                                nbrChiffre = 1;
                            }
                            
                        }
                        break;
                    case 0:
                        HardIA();
                        break;
                }
            case 3:
                switch (count) {
                    case 3: case 2:
                        nbrChiffre = 2;
                        break;
                    case 1:
                        for (x = 0; x < 5; x++) {

                            let stringsearch = "|"
                            for (var i = a = 0; i < map[0].length; a +=+ (stringsearch === map[x][i++])) {
                                
                                var a = a
                            }
                    
                            if (a >= 2) {
                                HardIA();
                            } else {
                                nbrChiffre = 1;
                            }
                            
                        }
                        break;
                    case 0:
                        HardIA();
                        break;
                }
        }

        if (count >= nbrChiffre) {

            console.log("Au tour de l'IA")
            await sleep(3000);

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

            if (nbrAllumettes <= 0) {

                console.log("Vous avez gagné !");
                display(map);
                rl.close();
                return; 
                
            } else {
                
                console.log(`L'IA a retirée ${nbrChiffre} allumettes`);
                console.log(`Il reste ${nbrAllumettes} allumettes`);
                await Jeu();
                return; 
            }
        } else {
            HardIA();
            return;
        }

    } else {
        HardIA();
        return;
    }
};