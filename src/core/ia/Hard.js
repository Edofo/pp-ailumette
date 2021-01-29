module.exports = async function HardIA() {

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