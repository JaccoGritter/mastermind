import React from 'react';
import Hint from './Hint';
import Hintsblock from './Hintsblock'
import Guess from './Guess';
import './Board.css';
import ColorSelector from './ColorSelector';
import Guessesblock from './Guessesblock';

class Board extends React.Component {

    render() {
        return (
            <div>
                <div className="playingfield">
                    <div className="hints">
                        <p>hints</p>
                        <Hintsblock hints={this.props.hints} />
                    </div>
                    <div className="guesses">
                        <p>guesses</p>
                        <Guessesblock guesses={this.props.guesses} />
                    </div>
                </div>
                <div className="colorSelector">
                    <p>colorSelector</p>
                    <ColorSelector onSelectColor = {this.props.onSelectColor}/>
                </div>
            </div>
        )
    }
}

export default Board;