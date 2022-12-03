const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString();

function getThreeHighestCaloriesSum(source) {
    const caloriesList = source.split('\r\n\r\n');
    const myArray = caloriesList.map(arr => arr.split('\r\n').reduce((a, b) => a + Number(b), 0))
    let top = [];
    let position = 0;
    for (let i = 0; i < 3; i++) {
        position = myArray.indexOf(Math.max(...myArray))
        top[i] = myArray[position]
        myArray.splice(position, 1)
    }
    return top.reduce((a, b) => a + b);
}

getThreeHighestCaloriesSum(source)