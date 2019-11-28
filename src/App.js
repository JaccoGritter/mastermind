import React from 'react';
import './App.css';
import HiddenPuzzle from './HiddenPuzzle';
import Hintsblock from './Hintsblock'
import Message from './Message';
import ColorSelector from './ColorSelector';
import Guessesblock from './Guessesblock';
import MM from './mm';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'yellow',
      turn: 1,
      message: "Crack the code",
      gameOver: false
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
    this.state.puzzle = MM.generatePuzzle();
  }

  selectColor(newColor) {
    let oldColor = this.state.selectedColor;
    document.getElementById(oldColor).classList.remove('pickedcolor');
    this.setState({ selectedColor: newColor });
    document.getElementById(newColor).classList.add('pickedcolor');
  }

  makeChoice(position) {
    const guessArray = this.state.guesses;
    guessArray[this.state.turn - 1][position] = this.state.selectedColor;
    this.setState({ guesses: guessArray });
  }

  checkGuess() {
    const guessArray = this.state.guesses;
    
    // check if 4 colors have been picked
    if (guessArray[this.state.turn - 1].includes('no')) {
      this.setState({ message: 'Please pick 4 colours!' });
      return;
    }

    const hintArray = this.state.hints;
    let result = MM.checkGuess(this.state.puzzle, guessArray[this.state.turn - 1])
    hintArray[this.state.turn - 1] = result;
    let newTurn = this.state.turn + 1, newMessage, gameOver = false;
    // 4 x 'b' means 4 black pins means player wins
    if (result.filter(value => value === 'b').length === 4) {
      newMessage = "You win in " + (newTurn - 1) + " turns!";
      gameOver = true;
    // max turns is 8 so at turn 9 player looses
    } else if (newTurn === 9) {
      newMessage = "No more turns. Game over!"
      gameOver = true;
    // or else we continue the game
    } else newMessage = 'Turn ' + newTurn + ". Crack the code!";

    this.setState({ hints: hintArray, turn: newTurn, message: newMessage, gameOver: gameOver });
  }

  startNewGame() {
    window.location.reload();
  }

  render() {
    return (
      
        <div className="main">
          <HiddenPuzzle gameOver={this.state.gameOver} hiddenPuzzle={this.state.puzzle} />
          <Message message={this.state.message} gameOver={this.state.gameOver} onStartNewGame={this.startNewGame}/>
          <div className="playingfield">
            <div className="hints">
              <Hintsblock hints={this.state.hints} />
            </div>
            <div className="guesses">
              <Guessesblock guesses={this.state.guesses} turn={this.state.turn} onMakeChoice={this.makeChoice} onCheckGuess={this.checkGuess} gameOver={this.state.gameOver} />
            </div>
          </div>
          <div className="colorSelector">
            <p>Pick a Color</p>
            <ColorSelector onSelectColor={this.selectColor} />
          </div>
        </div>
      
    );
  }
}

export default App;
