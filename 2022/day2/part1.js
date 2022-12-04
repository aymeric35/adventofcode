const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.resolve(__dirname, './input.txt')).toString();

const scoreRules = {
    rock: 1,
    paper: 2,
    scissors: 3,
    win: 6,
    draw: 3,
    loss: 0
}

const gameRules = (elfSelection, playerSelection) => {
    const selectionMapper = new Map([['A', 'rock'], ['X', 'rock'], ['B', 'paper'], ['Y', 'paper'], ['C', 'scissors'], ['Z', 'scissors']]);
    if (selectionMapper.get(elfSelection) === selectionMapper.get(playerSelection)) {
        return scoreRules.draw + scoreRules[selectionMapper.get(playerSelection)]
    }
    if (selectionMapper.get(elfSelection) === 'scissors' && selectionMapper.get(playerSelection) === 'rock') {
        return scoreRules.win + scoreRules.rock
    }
    if (selectionMapper.get(elfSelection) === 'rock' && selectionMapper.get(playerSelection) === 'paper') {
        return scoreRules.win + scoreRules.paper
    }
    if (selectionMapper.get(elfSelection) === 'paper' && selectionMapper.get(playerSelection) === 'scissors') {
        return scoreRules.win + scoreRules.scissors
    }
    if (selectionMapper.get(elfSelection) === 'paper' && selectionMapper.get(playerSelection) === 'rock') {
        return scoreRules.loss + scoreRules.rock
    }
    if (selectionMapper.get(elfSelection) === 'scissors' && selectionMapper.get(playerSelection) === 'paper') {
        return scoreRules.loss + scoreRules.paper
    }
    if (selectionMapper.get(elfSelection) === 'rock' && selectionMapper.get(playerSelection) === 'scissors') {
        return scoreRules.loss + scoreRules.scissors
    }
}


function getScore(source) {
    const strategyGuide = source.split('\r\n');
    let playerScore = 0;
    strategyGuide.forEach(game => playerScore += gameRules(game[0], game[2]))
    return playerScore;
}

getScore(source);