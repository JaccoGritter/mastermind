import React from 'react';
import './App.css';
import Hint from './hint';

class App extends React.Component {

  render() {
    return (
      <div className="main">
        <p id="guessblock">Master Mind</p>
        <div className="playingfield">
          <div className="hints">
            <p>hints</p>
            <Hint hints={['w', 'w', 'w', 'n']} />
            <Hint hints={['n', 'n', 'b', 'w']} />
            <Hint hints={['b', 'b', 'w', 'b']} />
          </div>
          <div className="guesses">
            <p>guesses</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
