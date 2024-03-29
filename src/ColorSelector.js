import React from 'react';
import blackGuess from './images/blackGuess.png';
import whiteGuess from './images/whiteGuess.png';
import redGuess from './images/redGuess.png';
import greenGuess from './images/greenGuess.png';
import blueGuess from './images/blueGuess.png';
import yellowGuess from './images/yellowGuess.png';
import eraser from './images/eraser.png';

class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        this.pickColor = this.pickColor.bind(this);
    }

    pickColor(e){
        let color = e.target.id;
        this.props.onSelectColor(color);
    }

    render() {

        return (
            <div>
            <img src={yellowGuess} alt="yellow" id="yellow" onClick={this.pickColor} className='colorchoice active-guess pickedcolor' />
            <img src={greenGuess} alt="green" id="green" onClick={this.pickColor} className='colorchoice active-guess' />
            <img src={whiteGuess} alt="white" id="white" onClick={this.pickColor} className='colorchoice active-guess' />
            <img src={blackGuess} alt="black" id="black" onClick={this.pickColor} className='colorchoice active-guess' />
            <img src={redGuess} alt="red" id="red" onClick={this.pickColor} className='colorchoice active-guess' />
            <img src={blueGuess} alt="blue" id="blue" onClick={this.pickColor} className='colorchoice active-guess' />
            <img src={eraser} alt="eraser" id="no" onClick={this.pickColor} className='colorchoice active-guess' />
            </div>
        )
    }
}

export default ColorSelector;