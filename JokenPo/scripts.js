const result = document.querySelector('.result')
const yourScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let yourScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano : ' + human + "Maquina :" + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!"

    } else if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.PAPER ||
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.ROCK) {

        machineScoreNumber++
        result.innerHTML = "Você perdeu para Alexa!"
        machineScore.innerHTML = machineScoreNumber

    } else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER ||
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) {

        yourScoreNumber++
        result.innerHTML = "Você Ganhou!"
        yourScore.innerHTML = yourScoreNumber

    }
}