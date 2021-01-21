//Purpose: prints out randomized message to user each time program is run

//returns a random number 
function randomizer() {
    return Math.floor(Math.random() * 4);
}

//creates array with all 3 phrases which is passed into print function
function phraseArray() {
    let choiceOne = randomizer();
    let choiceTwo = randomizer();
    let choiceThree = randomizer();
    
}

console.log(randomizer());