import React from 'react';
import blackGuess from './images/blackGuess.png';
import whiteGuess from './images/whiteGuess.png';
import redGuess from './images/redGuess.png';
import greenGuess from './images/greenGuess.png';
import blueGuess from './images/blueGuess.png';
import yellowGuess from './images/yellowGuess.png';

class ColorSelector extends React.Component {

    render() {

        return (
            <div>
            <img src={yellowGuess} alt="pick1" className='colorchoice' id="pickedcolor" />
            <img src={greenGuess} alt="pick2" className='colorchoice' />
            <img src={whiteGuess} alt="pick3" className='colorchoice' />
            <img src={blackGuess} alt="pick4" className='colorchoice' />
            <img src={redGuess} alt="pick5" className='colorchoice' />
            <img src={blueGuess} alt="pick6" className='colorchoice' />
            </div>
        )
    }
}

export default ColorSelector;