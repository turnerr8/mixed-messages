//Purpose: prints out randomized message to user each time program is run

//returns a random number 
function randomizer() {
    return Math.floor(Math.random() * 5);
}

//creates array with all 3 phrases which is passed into print function
function phraseArray() {
    let choiceOne = randomizer();
    let choiceTwo = randomizer();
    let choiceThree = randomizer();
    const phrases = [];
    
    switch(choiceOne) {
        case 0:
            phrases.push('You will ');
            break;
        case 1:
            phrases.push('You shall ');
            break;
        case 2:
            phrases.push('A close friend will ');
            break;
        case 3:
            phrases.push('Someone new will ');
            break;
        case 4:
            phrases.push('You should ');
            break;
    }

    switch(choiceTwo) {
        case 0:
            phrases.push('get rich ');
            break;
        case 1:
            phrases.push('have good fortune ');
            break;
        case 2:
            phrases.push('hurt someone near you ');
            break;
        case 3:
            phrases.push('find a new friend ');
            break;
        case 4:
            phrases.push('be careful ');
            break;
    }

    switch(choiceThree) {
        case 0:
            phrases.push('in the near future.');
            break;
        case 1:
            phrases.push('this winter.');
            break;
        case 2:
            phrases.push('tomorrow.');
            break;
        case 3:
            phrases.push('no time soon.');
            break;
        case 4:
            phrases.push('today.');
            break;
    }


    return phrases;
}

const finalArray = phraseArray();

console.log(finalArray[0] + finalArray[1] + finalArray[2]);