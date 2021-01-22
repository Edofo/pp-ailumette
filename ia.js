function IA() {

    const nbrChiffre = Math.floor(Math.random() * 3) +1 ;

    nbrAllumettes = nbrAllumettes - nbrChiffre

    console.log("Au tour de l'IA")

    if (nbrAllumettes == 0) {

        console.log("Vous avez gagné !");
        display(map);
        rl.close();
        return; 
        
    } else {

        console.log(`L'IA a retiré ${nbrChiffre} allumettes`)
        console.log(`Il reste ${nbrAllumettes} allumettes`);
        display(map);
        Afficher()
        return; 
    }
};

IA();