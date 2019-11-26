import React from 'react';
import './App.css';
//import Hint from './Hint';
import Board from './Board';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedColor : 'y'
    };
  
    // set initial values for guesses and hints
    let hintArray = [];
    let guessArray = [];
    for(let i=0; i<10; i++) {
      hintArray.push(['n', 'n', 'n', 'n']);
      guessArray.push(['n', 'n', 'n' ,'n']);
    }
    this.state.hints = hintArray;
    this.state.guesses = guessArray;
  }

  selectColor(color) {
    //this.this.setState({selectedColor: color})
  }

  render() {
    return (
      <div className="main">
        <p id="guessblock">Master Mind</p>
        <Board hints={this.state.hints}/>
      </div>
    );
  }
}

export default App;
