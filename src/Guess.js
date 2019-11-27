import React from 'react';
import blackGuess from './images/blackGuess.png';
import whiteGuess from './images/whiteGuess.png';
import redGuess from './images/redGuess.png';
import greenGuess from './images/greenGuess.png';
import blueGuess from './images/blueGuess.png';
import yellowGuess from './images/yellowGuess.png';
import noGuess from './images/noGuess.png';
import checkButton from './images/checkbutton.png';

class Guess extends React.Component {
    constructor(props){
        super(props);
        this.makeChoice = this.makeChoice.bind(this);
    }

    renderGuesses(guesses, active) {
        const guessesToRender = guesses.map(element => {
            switch (element) {
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

        let renderedGuess;
        if (active) {
            renderedGuess = (
                <div className="guess">
                    <span><img src={guessesToRender[0]} alt="guess1" id="1" onClick={this.makeChoice}/></span>
                    <span><img src={guessesToRender[1]} alt="guess2" id="2" onClick={this.makeChoice}/></span>
                    <span><img src={guessesToRender[2]} alt="guess3" id="3" onClick={this.makeChoice}/></span>
                    <span><img src={guessesToRender[3]} alt="guess4" id="4" onClick={this.makeChoice}/></span>
                    <span>&nbsp;&nbsp;&nbsp;<img src={checkButton} alt="checkbutton"/></span>
                </div>)
            } else {
            renderedGuess = (
                <div className="guess">
                    <span><img src={guessesToRender[0]} alt="guess1" /></span>
                    <span><img src={guessesToRender[1]} alt="guess2" /></span>
                    <span><img src={guessesToRender[2]} alt="guess3" /></span>
                    <span><img src={guessesToRender[3]} alt="guess4" /></span>
                </div>
            )
        }
        
        return (renderedGuess);
    }

    makeChoice(e){
        const position = e.target.id;
        this.props.onMakeChoice(position-1);
    }

    render() {
        return (
            this.renderGuesses(this.props.guess, this.props.active)
        )
    }
}

export default Guess;