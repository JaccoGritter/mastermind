import React from 'react';
import './App.css';
//import Hint from './Hint';
import Board from './Board';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedColor : 'yellow',
      turn: 1
    };
    this.selectColor = this.selectColor.bind(this);
  
    // set initial values for guesses and hints
    let hintArray = [];
    let guessArray = [];
    for(let i=0; i<10; i++) {
      hintArray.push(['n', 'n', 'n', 'n']);
      guessArray.push(['no', 'no', 'no' ,'no']);
    }
    this.state.hints = hintArray;
    this.state.guesses = guessArray;
  }

  selectColor(newColor) {
    //console.log('selectcolor activated on ' + color);
    let oldColor = this.state.selectedColor;
    document.getElementById(oldColor).classList.remove('pickedcolor');
    this.setState({selectedColor: newColor});
    document.getElementById(newColor).classList.add('pickedcolor');
  }

  render() {
    return (
      <div className="main">
        <p id="guessblock">Master Mind</p>
        <Board hints={this.state.hints} guesses={this.state.guesses} selectedColor={this.state.selectedColor} onSelectColor={this.selectColor} />
      </div>
    );
  }
}

export default App;
