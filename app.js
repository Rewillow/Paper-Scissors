// Come prima cosa, richiamo gli id dei 3 <span> e creo le costanti. 

const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

// Creo la costante dei 3 button e delle possibili scelte: Rock, Paper, Scissors e la variabile delle scelte dell'utente

const possibleChoices = document.querySelectorAll('button'); 
let userChoice
let computerChoice
let result

// Richiamiamo le possibili scelte attraverso un forEach, per determinare le varie casistiche
// (e) => la "e" sta per "event"

possibleChoices.forEach ( possibleChoice => possibleChoice.addEventListener('click', (e) => {

    // In questo caso "userChoice" richiama l'evento "button" e di conseguenza gli id delle 3 possibili scelte.
    userChoice = e.target.id;
    // Col tag "innserHTML" mandiamo a schermo questi id, che corrispondono quindi alle 3 possibili scelte.
    userChoiceDisplay.innerHTML = userChoice;
    // Ora tocca alle scelte effettuate dal computer, che saranno comunque causali
    generateComputerChoice()
    // In riferimento al risultato finale
    getResult()
}))

// Creiamo la funzione

function generateComputerChoice () {

    // Creiamo la costante "randomNumber" che sarà uguale a Math, cioè 
    // "Un oggetto intrinseco che fornisce funzionalità e costanti matematiche di base."
    // "floor" invece restituisce l'intero più grande minore o uguale al relativo argomento numerico.
    // "random" invece restituisce un numero casuale tra 0 e 1
    // Moltiplichiamo il tutto per 3, ovvero le possibili scelte.
    // Il 3 sarebbe potuto essere sostituito anche da possibile.Choices.lenght e ne avrebbe richiamato la lunghezza totale (3)
    // Il "+1" è importante perché altrimenti partirebbe da 0. Quindi 0,1,2 
    const randomNumber = Math.floor (Math.random () * 5) + 1
    
    // Creiamo i vari "if" quindi le possibili scelte del computer 

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }

    if (randomNumber === 3) {
        computerChoice = 'Paper';
    }

    if (randomNumber === 4) {
        computerChoice = 'Lizard';
    }

    if (randomNumber === 5) {
        computerChoice = 'Spock';
    }

    // Questo permette di vedere la scelta del computer
    computerChoiceDisplay.innerHTML = computerChoice;
}

// Occupiamoci adesso di stabilire il risultato, cioè chi ha vinto e chi ha perso

function getResult () {
    if (computerChoice === userChoice ) {
        result = "It's a draw"
    }

    if (computerChoice === 'Scissors' && userChoice === 'Paper' ) { // Le forbici tagliano la carta
        result = "You Lose"
    }

    if (computerChoice === 'Paper' && userChoice === 'Scissors' ) { // Le forbici tagliano la carta
        result = "You Win"
    }

    if (computerChoice === 'Paper' && userChoice === 'Rock' ) { // La carta avvolge il sasso
        result = "You Lose"
    }

    if (computerChoice === 'Rock' && userChoice === 'Paper' ) { // La carta avvolge il sasso
        result = "You Win"
    }

    if (computerChoice === 'Rock' && userChoice === 'Lizard' ) { // Il sasso uccide Lizard
        result = "You Lose"
    }

    if (computerChoice === 'Lizard' && userChoice === 'Rock' ) { // Il sasso uccide Lizard
        result = "You Win"
    }

    if (computerChoice === 'Lizard' && userChoice === 'Spock' ) { // Lizard avvelena Spock
        result = "You Lose"
    }

    if (computerChoice === 'Spock' && userChoice === 'Lizard' ) { // Lizard avvelena Spock
        result = "You Win"
    }

    if (computerChoice === 'Spock' && userChoice === 'Scissors' ) { // Spock rompe le forbici
        result = "You Lose"
    }

    if (computerChoice === 'Scissors' && userChoice === 'Spock' ) { // Spock rompe le forbici
        result = "You Win"
    }

    if (computerChoice === 'Scissors' && userChoice === 'Lizard' ) { // Le forbici decapitano Lizard
        result = "You Lose"
    }

    if (computerChoice === 'Lizard' && userChoice === 'Scissors' ) { // Le forbici decapitano Lizard
        result = "You Win"
    }

    if (computerChoice === 'Lizard' && userChoice === 'Paper' ) { // Lizard mangia la carta
        result = "You Lose"
    }

    if (computerChoice === 'Paper' && userChoice === 'Lizard' ) { // Lizard mangia la carta
        result = "You Win"
    }

    if (computerChoice === 'Paper' && userChoice === 'Spock' ) { // La carta invalida Spock
        result = "You Lose"
    }

    if (computerChoice === 'Spock' && userChoice === 'Paper' ) { // La carta invalida Spock
        result = "You Win"
    }

    if (computerChoice === 'Spock' && userChoice === 'Rock' ) { // Spock vaporizza il sasso 
        result = "You Lose"
    }

    if (computerChoice === 'Rock' && userChoice === 'Spock' ) { // Spock vaporizza il sasso 
        result = "You Win"
    }

    if (computerChoice === 'Rock' && userChoice === 'Scissors' ) { // Sasso rompe le forbici
        result = "You Lose"
    }

    if (computerChoice === 'Scissors' && userChoice === 'Rock' ) { // Sasso rompe le forbici
        result = "You Win"
    }

    

    

    resultDisplay.innerHTML = result 
}
