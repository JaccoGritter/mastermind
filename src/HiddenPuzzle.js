import React from 'react';
import Guess from './Guess';

class HiddenPuzzle extends React.Component {

    renderHiddenPuzzle(gameOver, puzzle) {
        console.log('renderHiddenPuzzle: ' + puzzle);
        let element;
        if (gameOver) {
            element = 
            <Guess guess={puzzle} active={false} key={'RevealedPuzzle'} onMakeChoice={this.props.onMakeChoice} onCheckGuess={this.props.onCheckGuess} gameOver={this.props.gameOver} />
        } else {
            element = (
                <h3>Master Mind</h3>
            )
        }
        return (<div id="hiddenPuzzle">{element}</div>);
    }

    render() {
        return (
            this.renderHiddenPuzzle(this.props.gameOver, this.props.hiddenPuzzle)
        )
    }
}

export default HiddenPuzzle;