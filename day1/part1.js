const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString();
const arrayFromSource = source.split('\n').map(number => parseInt(number, 10));

function increaseCount(array) {
    let result = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            result += 1;
        }
    }
    return result
}

increaseCount(arrayFromSource);


// Initialement, j'étais parti sur un forEach mais je me suis rendu compte que ce n'était pas le plus adapté.
// La première boucle retourne `undefined` car en utilisant forEach, on ne peut pas choisir son index de départ
// contrairement à une boucle for, et donc `index - 1` en partant de l'index 0 est une erreur à éviter.
// J'ai cependant réfléchit au processus et penser à ajouter une condition dans mon if pour
// vérifier que `array[index - 1] ne valait pas `undefined`, mais cela créait une charge supplémentaire
// em ajoutant une nouvelle condition à vérifier à chaque boucle alors que ce n'était nécessaire que pour la première,
// alourdissant ainsi inutilement le code.
// Je pense qu'il est cependant possible de résoudre ce problème avec forEach mais j'ai préféré me tourner vers une boucle for
// qui me semble idéal dans le cas de ce problème.

function forEachFunction(array) {
    let result = 0;
    array.forEach((number, index) => {
        if (number > array[index - 1]) {
            result += 1;
        }
    })
    return result
}

forEachFunction(arrayFromSource)