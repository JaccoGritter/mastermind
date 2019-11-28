// MasterMind helper functions in here

let mm = {};

mm.generatePuzzle = () => {
    const options = ['red', 'green', 'yellow', 'black', 'white', 'blue'];
    let puzzle = [];
    for(let i=0; i<4; i++){
        puzzle.push(options[Math.floor(Math.random()*6)]);
    }
    return puzzle;
}

mm.checkGuess = (puzzel, guess) => {
    let puzzelArray = puzzel.map(value => value);
    let guessArray = guess.map(value => value);
    let result = [];
    for (let i=0; i<4; i++) {
        if(puzzelArray[i] === guessArray[i]) {
            result.push('b');
            puzzelArray[i] = 'Y'
            guessArray[i] = 'X';
        }
    }

    for (let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            if(guessArray[i]===puzzelArray[j]){
                result.push('w');
                puzzelArray[j] = 'y'; 
                guessArray[i] = 'x';
            }
        }
    }

    while (result.length<4) result.push('n');

    return(result);
}

export default mm;