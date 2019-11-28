import React from 'react';
import Guess from './Guess';

class HiddenPuzzle extends React.Component {

    renderHiddenPuzzle(gameOver, puzzle) {
        console.log('renderHiddenPuzzle: ' + puzzle);
        let element;
        if (gameOver) {
            element = 
            <div>
                <div id="puzzle-solution">
                    <Guess guess={puzzle} active={false} key={'RevealedPuzzle'} onMakeChoice={this.props.onMakeChoice} onCheckGuess={this.props.onCheckGuess} gameOver={this.props.gameOver} />
                </div>
                <div id="play-again">
                    <h3>Play Again</h3>
                </div>
            </div>
        } else {
            element = (
            <h1>Master Mind</h1> 
            )
        }
        return (<div id="hidden-puzzle">{element}</div>);
    }

    render() {
        return (
            this.renderHiddenPuzzle(this.props.gameOver, this.props.hiddenPuzzle)
        )
    }
}

export default HiddenPuzzle;