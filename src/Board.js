import React from 'react';
import Hint from './Hint';
import Guess from './Guess';
import './Board.css';
import ColorSelector from './ColorSelector';

class Board extends React.Component {

    render() {
        return (
            <div>
                <div className="playingfield">
                    <div className="hints">
                        <p>hints</p>
                        <Hint hints={this.props.hints[0]} />
                        <Hint hints={this.props.hints[0]} />
                        <Hint hints={this.props.hints[0]} />
                        <Hint hints={this.props.hints[0]} />
                        <Hint hints={this.props.hints[0]} />
                        <Hint hints={this.props.hints[0]} />
                        <Hint hints={this.props.hints[0]} />
                        <Hint hints={this.props.hints[0]} />
                    </div>
                    <div className="guesses">
                        <p>guesses</p>
                        <Guess guess={this.props.guesses[0]} />
                        <Guess guess={this.props.guesses[0]} />
                        <Guess guess={this.props.guesses[0]} />
                        <Guess guess={this.props.guesses[0]} />
                        <Guess guess={this.props.guesses[0]} />
                        <Guess guess={this.props.guesses[0]} />
                        <Guess guess={this.props.guesses[0]} />
                        <Guess guess={this.props.guesses[0]} />
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