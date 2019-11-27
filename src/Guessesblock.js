import React from 'react';
import Guess from './Guess';

class Guessesblock extends React.Component {

    renderGuessesBlock(guesses, turn){
        let count=1;
        let active=false;
        const guessesBlock = guesses.map(guess => {
            active = (count===turn);
            count++;
            return <Guess guess={guess} active={active} key={'Guess'+count} onMakeChoice={this.props.onMakeChoice}/>
        }).reverse();
        return guessesBlock;
    }

    render() {
        return (
            this.renderGuessesBlock(this.props.guesses, this.props.turn)    
        )
    }
}

export default Guessesblock;