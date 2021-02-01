const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Ailumettes = 0;
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
        
                Ailumettes = Ailumettes + count
                
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

                        Game();

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
}


async function EasyIA() {

    const Ligne = Math.floor(Math.random() * 4) +1 ;
    let Number = 0;

    let stringsearch = "|"
    for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[Ligne][i++]));
    
    count = count;

    if (count <= 3 && count >= 1) {
        Number = Math.floor(Math.random() * count) +1 ;
    } else {
        Number = Math.floor(Math.random() * 3) +1 ;
    }

    if (count >= Number) {

        console.log("Au tour de l'IA")
        await sleep(3000);

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

        if (Ailumettes <= 0) {

            console.log(`L'IA a retirée ${Number} allumettes`);
            console.log(`Il reste ${Ailumettes} allumette(s)`);
            console.log("Vous avez gagné !");
            display(map);
            rl.close();
            return; 
            
        } else {
            
            console.log(`L'IA a retirée ${Number} allumettes`);
            console.log(`Il reste ${Ailumettes} allumette(s)`);
            await Jeu();
        }

    } else {
        EasyIA();
    }
};


async function MediumIA() {

    const Ligne = Math.floor(Math.random() * 4) +1 ;
    let Number = 0;

    let stringsearch = "|"
    for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[Ligne][i++]));
    
    count = count;

    if (count > 0) {

        if (Ailumettes > 5) {

            if (count <= 3) {
                Number = Math.floor(Math.random() * count) +1 ;
            } else {
                Number = Math.floor(Math.random() * 3) +1 ;
            }

        } else {

            switch (Ailumettes) {
                case 5:
                    switch (count) {
                        case 5: case 4: case 2:
                            Number = 1;
                            break;
                        case 3:
                            Number = 2;
                            break;
                        case 1: case 0:
                            HardIA();
                            break;
                    }
                    break;
                case 4:
                    switch (count) {
                        case 4: case 3:
                            Number = 3;
                            break;
                        case 2:
                            Number = 1;
                            break;
                        case 1:
                            for (x = 0; x < 5; x++) {

                                let stringsearch = "|"
                                for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[x][i++])) {
                                    
                                    count = count
                                }
                        
                                if (count >= 2) {
                                    HardIA();
                                } else {
                                    Number = 1;
                                }
                                
                            }
                            break;
                        case 0:
                            HardIA();
                            break;
                    }
                    break;
                case 3:
                    switch (count) {
                        case 3: case 2:
                            Number = 2;
                            break;
                        case 1:
                            for (x = 0; x < 5; x++) {
    
                                let stringsearch = "|"
                                for (let i = a = 0; i < map[0].length; a +=+ (stringsearch === map[x][i++])) {
                                    
                                    let a = a
                                }
                        
                                if (a >= 2) {
                                    HardIA();
                                } else {
                                    Number = 1;
                                }
                                
                            }
                            break;
                        case 0:
                            HardIA();
                            break;
                    }
                    break;
                case 2: 
                    Number = 1;
                    break;
                case 1:
                    for (x = 0; x < 5; x++) {

                        let stringsearch = "|"
                        for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[x][i++])) {
                            
                            let count = count
                        }
                
                        if (count >= 2) {
                            MediumIA();
                        } else {
                            Number = 1;
                        }
                        
                    }
                    break;
            }
        }

        if (count >= Number) {

            console.log("Au tour de l'IA")
            await sleep(3000);

            Ailumettes = Ailumettes - Number

            for (let i = 0; i < map[Ligne].length; i++) {

                if (map[Ligne][i].indexOf('|') != -1) {
            
                    if (map[Ligne][i] == '|') {
            
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
            }

            if (Ailumettes <= 0) {

                console.log(`L'IA a retirée ${Number} allumettes`);
                console.log(`Il reste ${Ailumettes} allumette(s)`);
                console.log("Vous avez gagné !");
                display(map);
                rl.close();
                
            } else {
                
                console.log(`L'IA a retirée ${Number} allumettes`);
                console.log(`Il reste ${Ailumettes} allumette(s)`);
                await Jeu();
            }
        
        } else {
            MediumIA();
        }

    } else {
        MediumIA();
    }
};


async function HardIA() {

    const Ligne = Math.floor(Math.random() * 4) +1 ;
    let Number = 0;

    let stringsearch = "|"
    for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[Ligne][i++]));
    
    count = count;

    if (count >= 1) {
        switch (Ailumettes) {
            case 15: case 11: case 7:
                if (count >= 2) {
                    Number = 2;
                } else {
                    HardIA();
                }
                break;
            case 14: case 13: case 10: case 9: case 6: case 2: case 1:
                Number = 1;
                break;
            case 12: case 8:
                if (count >= 3) {
                    Number = 3;
                } else {
                    HardIA;
                }
                break;
            case 5:
                switch (count) {
                    case 5: case 4: case 2:
                        Number = 1;
                        break;
                    case 3:
                        Number = 2;
                        break;
                    case 1: case 0:
                        HardIA();
                        break;
                }
                break;
            case 4:
                switch (count) {
                    case 4: case 3:
                        Number = 3;
                        break;
                    case 2:
                        Number = 1;
                        break;
                    case 1:
                        for (x = 0; x < 5; x++) {

                            let stringsearch = "|"
                            for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[x][i++])) {
                                
                                count = count
                            }
                    
                            if (count >= 2) {
                                HardIA();
                            } else {
                                Number = 1;
                            }
                            
                        }
                        break;
                    case 0:
                        HardIA();
                        break;
                }
                break;
            case 3:
                switch (count) {
                    case 3: case 2:
                        Number = 2;
                        break;
                    case 1:
                        for (x = 0; x < 5; x++) {

                            let stringsearch = "|"
                            for (let i = a = 0; i < map[0].length; a +=+ (stringsearch === map[x][i++])) {
                                
                                let a = a
                            }
                    
                            if (a >= 2) {
                                HardIA();
                            } else {
                                Number = 1;
                            }
                            
                        }
                        break;
                    case 0:
                        HardIA();
                        break;
                }
            break;
        }

        if (count >= Number) {

            console.log("Au tour de l'IA")
            await sleep(3000);

            Ailumettes = Ailumettes - Number

            for (let i = 0; i < map[Ligne].length; i++) {

                if (map[Ligne][i].indexOf('|') != -1) {
            
                    if (map[Ligne][i] == '|') {
            
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
            }

            if (Ailumettes <= 0) {

                console.log(`L'IA a retirée ${Number} allumettes`);
                console.log(`Il reste ${Ailumettes} allumette(s)`);
                console.log("Vous avez gagné !");
                display(map);
                rl.close();                
            } else {
                
                console.log(`L'IA a retirée ${Number} allumettes`);
                console.log(`Il reste ${Ailumettes} allumette(s)`);
                await Jeu();
            }
        } else {
            HardIA();
        }

    } else {
        HardIA();
    }
};