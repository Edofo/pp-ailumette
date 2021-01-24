let map = ['*', ' ', '|', '|', '|', '|', '|', ' ', '*'];

function display(values) {
    console.log(map.join(''))
}

display(map)

let stringsearch = "|"
for (let i = count = 0; i < map.length; count +=+ (stringsearch === map[i++]));
console.log(count);

console.log(map)
display(map)


let nbr = 3;
let increment = 0;


for (var i = 0; i < map.length; i++) {   

    if (map[i].indexOf('|') != -1) {

        if (map[i] == '|') {

            map[i] = map[i].replace('|', ' ');

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

console.log(map)
display(map)

