const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString();
const arrayFromSource = source.split('\n').map(number => parseInt(number, 10));

function increaseCount(array) {
    let total = 0;
    for (let i = 3; i < array.length; i++) {
        const current = array[i - 1] + array[i - 2] + array[i - 3];
        const next = array[i] + array[i - 1] + array[i - 2];

        if (next > current) {
            total += 1;
        }
    }
    return total
}

increaseCount(arrayFromSource);