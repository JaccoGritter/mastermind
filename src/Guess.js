import React from 'react';
import blackGuess from './images/blackGuess.png';
import whiteGuess from './images/whiteGuess.png';
import redGuess from './images/redGuess.png';
import greenGuess from './images/greenGuess.png';
import blueGuess from './images/blueGuess.png';
import yellowGuess from './images/yellowGuess.png';
import noGuess from './images/noGuess.png';
import { directive } from '@babel/types';

class Guess extends React.Component {

    render() {
        return (
            <div>
            <span><img src={noGuess} alt="guess1"/></span>
            <span><img src={blueGuess} alt="guess2"/></span>
            <span><img src={greenGuess} alt="guess3"/></span>
            <span><img src={yellowGuess} alt="guess4"/></span>
            </div>
        )
    }
}

export default Guess;