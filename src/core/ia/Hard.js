module.exports = async function HardIA() {

    const Ligne = Math.floor(Math.random() * 4) + 1;
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
                await Game();
            }
        } else {
            HardIA();
        }

    } else {
        HardIA();
    }
};