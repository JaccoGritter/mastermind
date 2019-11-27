import React from 'react';
import Guess from './Guess';

class Guessesblock extends React.Component {

    renderGuessesBlock(guesses){
        const guessesBlock = guesses.map(guess => {
            return <Guess guess={guess}/>
        });
        return guessesBlock;
    }

    render() {
        return (
            this.renderGuessesBlock(this.props.guesses)    
        )
    }
}

export default Guessesblock;