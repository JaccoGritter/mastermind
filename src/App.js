import React from 'react';
import './App.css';
import './Board.css';
// import Hint from './Hint';
import Hintsblock from './Hintsblock'
// import Board from './Board';
import ColorSelector from './ColorSelector';
import Guessesblock from './Guessesblock';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'yellow',
      turn: 1
    };
    this.selectColor = this.selectColor.bind(this);
    this.makeChoice = this.makeChoice.bind(this);
    this.checkGuess = this.checkGuess.bind(this);

    // set initial values for guesses and hints
    let hintArray = [];
    let guessArray = [];
    for (let i = 0; i < 8; i++) {
      hintArray.push(['n', 'n', 'n', 'n']);
      guessArray.push(['no', 'no', 'no', 'no']);
    }
    this.state.hints = hintArray;
    this.state.guesses = guessArray;
  }

  selectColor(newColor) {
    //console.log('selectcolor activated on ' + color);
    let oldColor = this.state.selectedColor;
    document.getElementById(oldColor).classList.remove('pickedcolor');
    this.setState({ selectedColor: newColor });
    document.getElementById(newColor).classList.add('pickedcolor');
  }

  makeChoice(position) {
    const guessArray = this.state.guesses;
    guessArray[this.state.turn - 1][position] = this.state.selectedColor;
    //console.log('MakeChoice:\n' + guessArray[0]);
    this.setState({ guesses: guessArray });
  }

  checkGuess() {
    console.log('Check guess');
    const guessArray = this.state.guesses;
    console.log(guessArray[this.state.turn-1]);
  }

  render() {
    return (
      <div className="main">
        <p id="guessblock">Master Mind</p>

        <div className="playingfield">
          <div className="hints">
            <p>hints</p>
            <Hintsblock hints={this.state.hints} />
          </div>
          <div className="guesses">
            <p>guesses</p>
            <Guessesblock guesses={this.state.guesses} turn={this.state.turn} onMakeChoice={this.makeChoice} onCheckGuess={this.checkGuess} />
          </div>
        </div>

        <div className="colorSelector">
          <p>colorSelector</p>
          <ColorSelector onSelectColor={this.selectColor} />
        </div>

      </div>
    );
  }
}

export default App;
