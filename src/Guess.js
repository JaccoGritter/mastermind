import React from 'react';
import blackGuess from './images/blackGuess.png';
import whiteGuess from './images/whiteGuess.png';
import redGuess from './images/redGuess.png';
import greenGuess from './images/greenGuess.png';
import blueGuess from './images/blueGuess.png';
import yellowGuess from './images/yellowGuess.png';
import noGuess from './images/noGuess.png';

class Guess extends React.Component {
    constructor(props) {
        super(props);
        this.renderGuesses = this.renderGuesses.bind(this);
    }

    renderGuesses(guesses) {
            const guessesToRender = guesses.map(element => {
                switch(element) {
                    case 'yellow':
                        return yellowGuess;
                    case 'green':
                        return greenGuess;
                    case 'white':
                        return whiteGuess;
                    case 'black':
                        return blackGuess;
                    case 'red':
                        return redGuess;
                    case 'blue':
                        return blueGuess;
                    case 'no':
                        return noGuess;
                default:
                    return false;
                }
        });

        return (
            <div className = "guess">
            <span><img src={guessesToRender[0]} alt="guess1"/></span>
            <span><img src={guessesToRender[1]} alt="guess2"/></span>
            <span><img src={guessesToRender[2]} alt="guess3"/></span>
            <span><img src={guessesToRender[3]} alt="guess4"/></span>
            </div>
        )

    }

    render() {
        return (
            this.renderGuesses(this.props.guess)
        )
    }
}

export default Guess;