import React from 'react';
import Guess from './Guess';

class HiddenPuzzle extends React.Component {

    renderHiddenPuzzle(gameOver, puzzle) {
        let element;
        if (gameOver) {
            element = 
                <div id="puzzle-solution">
                    <Guess guess={puzzle} active={false} key={'RevealedPuzzle'} onMakeChoice={this.props.onMakeChoice} onCheckGuess={this.props.onCheckGuess} gameOver={this.props.gameOver} />
                </div>
        } else {
            element = (
            <h2>Master Mind</h2> 
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