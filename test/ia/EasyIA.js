module.exports = async function EasyIA() {

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