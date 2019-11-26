import React from 'react';
import blackGuess from './images/blackGuess.png';
import whiteGuess from './images/whiteGuess.png';
import redGuess from './images/redGuess.png';
import greenGuess from './images/greenGuess.png';
import blueGuess from './images/blueGuess.png';
import yellowGuess from './images/yellowGuess.png';
import noGuess from './images/noGuess.png';

class Guess extends React.Component {

    render() {
        return (
            <div className = "guess">
            <span><img src={noGuess} alt="guess1"/></span>
            <span><img src={noGuess} alt="guess2"/></span>
            <span><img src={noGuess} alt="guess3"/></span>
            <span><img src={noGuess} alt="guess4"/></span>
            </div>
        )
    }
}

export default Guess;