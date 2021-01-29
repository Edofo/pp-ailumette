module.exports = async function IA() {

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