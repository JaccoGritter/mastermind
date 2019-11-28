import React from 'react';
import './App.css';
// import './Board.css';
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
      message: "Crack the code!",
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
    //console.log('Check guess');
    const guessArray = this.state.guesses;
    if(guessArray[this.state.turn-1].includes('no')) {
      this.setState({message: 'Please pick 4 colours!'});
      return;
    }
    
    const hintArray = this.state.hints;
    let result = MM.checkGuess(this.state.puzzle, guessArray[this.state.turn-1])
    hintArray[this.state.turn-1] = result;
    let newTurn = this.state.turn + 1;
    let newMessage;
    let gameOver = false;
    if (result.filter(value => value === 'b').length === 4 ) {
      newMessage = "You win in " + (newTurn-1) + " turns!";
      gameOver = true;
    } else if(newTurn === 9) {
      newMessage = "No more turns. Game over!"
      gameOver = true;
    } else newMessage = 'Turn ' + newTurn + ". Let's play!";

    this.setState({hints: hintArray, turn: newTurn, message: newMessage, gameOver: gameOver});
    
    console.log('Guesses: ' + guessArray[this.state.turn-1]);
    console.log('Puzzle: ' + this.state.puzzle);
    console.log('result: ' + result);
  }

  render() {
    return (
      <div className="main">
        <HiddenPuzzle gameOver={this.state.gameOver} hiddenPuzzle={this.state.puzzle}/>
        <Message message={this.state.message}/>
        <div className="playingfield">
          <div className="hints">
            <Hintsblock hints={this.state.hints} />
          </div>
          <div className="guesses">
            <Guessesblock guesses={this.state.guesses} turn={this.state.turn} onMakeChoice={this.makeChoice} onCheckGuess={this.checkGuess} gameOver={this.state.gameOver}/>
          </div>
        </div>
        <div className="colorSelector">
          <p>Pick A Color</p>
          <ColorSelector onSelectColor={this.selectColor} />
        </div>

      </div>
    );
  }
}

export default App;
