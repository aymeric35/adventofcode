const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString();
const arrayFromSource = source.split('\n');

// J'ai souhaité utilisé forEach ici pour varier et utiliser autre chose qu'une boucle for.
// Je me suis également rendu compte que le processus était très similaire à la partie 1,
// et qu'il était également possible d'améliorer la performance de mon code en utilisant
// split plutôt que replace.

function getPosition(array) {
    let aim = 0;
    let depth = 0;
    let horizontal = 0;

    array.forEach(string => {
        let [direction, value] = string.split(" ");
        value = parseInt(value, 10)

        if (direction === "up") {
            aim -= value;
        }
        else if (direction === "down") {
            aim += value;
        }
        else if (direction === "forward") {
            horizontal += value;
            depth += value * aim;
        }
    })
    return depth * horizontal
}

getPosition(arrayFromSource);