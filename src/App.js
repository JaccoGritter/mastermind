import React from 'react';
import './App.css';
//import Hint from './Hint';
import Board from './Board';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      guesses: []         
    }

    let hintArray = [];
    for(let i=0; i<10; i++) hintArray.push(['w', 'b', 'b', 'n']);
    this.state.hints = hintArray;

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
