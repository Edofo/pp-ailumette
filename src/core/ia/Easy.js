module.exports = async function EasyIA() {

    const Ligne = Math.floor(Math.random() * 4) + 1;
    let Number = 0;

    let stringsearch = "|"
    for (let i = count = 0; i < map[0].length; count +=+ (stringsearch === map[Ligne][i++]));
    
    count = count;

    switch (count) {
        case 7: case 6: case 5: case 4: case 3:
            Number = Math.floor(Math.random() * 3) + 1;
            break;
        case 2: case 1:
            Number = Math.floor(Math.random() * count) + 1;
            break;
        case 0:
            EasyIA();
            break;
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
            await Game();
        }

    } else {
        EasyIA();
    }
};