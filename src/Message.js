import React from 'react';

class Message extends React.Component {

    constructor(props){
        super(props);
        this.startNewGame = this.startNewGame.bind(this);
    }

    renderMessage(gameOver) {
        let element;
        if(!gameOver) {
            element = (
            <div id="message">
            <p>{this.props.message}</p>
            </div>
            )
        } else {
            element = (
            <div id="message">
            <p>{this.props.message}<span id="new_game" onClick={this.startNewGame}> Click to play again!</span></p>
            </div>
            )

        }
        return element;
    }

    startNewGame(){
        this.props.onStartNewGame();
    }

    render() {

        return (
            this.renderMessage(this.props.gameOver)
        )
    }
}

export default Message;