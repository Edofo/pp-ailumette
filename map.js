let map = [
    /* 0 */['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    /* 1 */['*', ' ', ' ', ' ', '|', ' ', ' ', ' ', '*'],
    /* 2 */['*', ' ', ' ', '|', '|', '|', ' ', ' ', '*'],
    /* 3 */['*', ' ', '|', '|', '|', '|', '|', ' ', '*'],
    /* 4 */['*', '|', '|', '|', '|', '|', '|', '|', '*'],
    /* 5 */['*', '*', '*', '*', '*', '*', '*', '*', '*']
];

let nbr = 3;
let ligne = 3;

function display(values) {
    const rows = values.length

    for (let x = 0; x < rows; x++) {
        console.log(map[x].join(''))
    }
};

let stringsearch = "|"
for (var i = count = 0; i < map[0].length; count +=+ (stringsearch === map[ligne][i++]));

console.log(count);


let increment = 0;


for (var i = 0; i < map[ligne].length; i++) {

    if (map[ligne][i].indexOf('|') != -1) {

        if (map[ligne][i] == '|') {

            map[ligne][i] = map[ligne][i].replace('|', ' ');

            function Counter() {
                increment++;
            }

            Counter();

            if(increment === nbr) {
                break;
            }
        }
    }
}


