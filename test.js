const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nbrAllumettes = 16

function chooseALine() {

    rl.question('Choisis une ligne : ', (valueOne) => {
      nbrLignes = parseInt(valueOne);
  
      if (nbrLignes <= 4 && nbrLignes >= 1) {
        console.log(`Ligne ${nbrLignes} confirmée`);
  
        rl.question('Choisis un chiffre : ', (valueTwo) => {
          nbrChiffre = parseInt(valueTwo);
          
          if (nbrChiffre <= 3 && nbrChiffre >= 1) {
  
              if (nbrChiffre <= nbrAllumettes) {
  
                  console.log(`Chiffre ${nbrChiffre} confirmée`);
                  
                  nbrAllumettes = nbrAllumettes - nbrChiffre

                  if (nbrAllumettes == 0) {

                        console.log("Vous avez perdu");
                        rl.close();
                  } else {
                        console.log(`Il reste ${nbrAllumettes} allumettes`);
                  }
  
              } else {
                  console.error('Erreur : Il n\'y a pas assez d\'allumettes');
                  chooseALine();
                  return;  
              }
  
          } else {
              console.error('Erreur : Vous devez choisir un chiffre entre 1 et 3');
              chooseALine();
              return;  
          }
  
        });
  
      } else {
        console.error('Erreur : Vous devez choisir une ligne entre 1 et 4');
        chooseALine();
        return;
      }
    });
}
  
chooseALine(); 