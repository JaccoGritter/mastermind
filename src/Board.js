import React from 'react';
import Hint from './Hint';
import Guess from './Guess';
import './Board.css';

class Board extends React.Component {

    render() {
        return (
        <div className="playingfield">
            <div className="hints">
            <p>hints</p>
            <Hint hints={this.props.hints[0]} />
            <Hint hints={this.props.hints[0]} />
          </div>
          <div className="guesses">
            <p>guesses</p>
            <Guess />
            <Guess />
          </div>
        </div>
        )
    }
}

export default Board;