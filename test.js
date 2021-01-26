const Easy = require('./IA/Easy');

const Player = require('./Player');

const Sleep = require('./Sleep');


async function Afficher() {    
        
    //Dire à la personne de choisir ou supprimer et le nombre 1 à 3 allumettes
    try {
        console.log('A votre tour !');
        await sleep(1000);
        return await Player;
    } catch(e) {
        console.error("Un problème est survenue !")
    };

    //IA qui supprime
    Easy();
}

Afficher();