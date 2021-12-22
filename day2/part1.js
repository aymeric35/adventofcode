const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString();
const arrayFromSource = source.split('\n');

function getPosition(array) {
    let value;
    let up = 0;
    let down = 0;
    let forward = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes('forward')) {
            value = array[i].replace('forward ', '');
            value = parseInt(value, 10)
            forward += value
        }
        if (array[i].includes('up')) {
            value = array[i].replace('up ', '');
            value = parseInt(value, 10)
            up += value
        }
        if (array[i].includes('down')) {
            value = array[i].replace('down ', '');
            value = parseInt(value, 10)
            down += value
        }
    }
    return (down - up) * forward
}

getPosition(arrayFromSource);


// J'ai d'abord résolu le problème avec le code ci-dessous mais je me suis rendu compte
// que celui-ci n'était pas vraiment optimisé à cause du nombre de boucles
// qui sont exécutées. J'ai donc à nouveau opté pour une boucle for qui me semblait
// plus adaptée dans ce cas précis. J'ai tout de même souhaité laisser le code que j'avais
// précédemment écrit ici.

function alternativeMethod() {
    function filterDirection(array) {
        let forward = array.filter(string => string.includes('forward'));
        let up = array.filter(string => string.includes('up'));
        let down = array.filter(string => string.includes('down'));

        return { forward, up, down };
    }

    function convertDirectionToNumber(direction, string) {
        direction = direction.map(direction => {
            direction = direction.replace(string, '')
            return parseInt(direction, 10)
        })
        return direction
    }

    function getPosition() {
        let { forward, up, down } = filterDirection(arrayFromSource)

        forward = convertDirectionToNumber(forward, 'forward ').reduce((initial, current) => initial + current, 0);
        up = convertDirectionToNumber(up, 'up ').reduce((initial, current) => initial + current, 0);
        down = convertDirectionToNumber(down, 'down ').reduce((initial, current) => initial + current, 0);

        const verticalPosition = down - up;
        const position = forward * verticalPosition;

        return position;
    }

    getPosition();
}