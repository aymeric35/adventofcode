const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString();

function getHighestTotalCalories(source) {
    const caloriesList = source.split('\r\n\r\n');
    return Math.max(...caloriesList.map(arr => arr.split('\r\n').reduce((a, b) => a + Number(b), 0)));
}

getHighestTotalCalories(source);