import React from 'react';
import blackPin from './images/blackPin.png';
import whitePin from './images/whitePin.png';
import noPin from './images/noPin.png';

class Hint extends React.Component {
    constructor(props) {
        super(props);
        this.renderHints = this.renderHints.bind(this);
    }

    renderHints(hints) {
        //console.log('******' + hints);
        const pins = hints.map(hint => {
            // const blackPin = '\u26ab';
            // const whitePin = '\u26aa';
            // const noPin = '\u25ef';
            // const blackPin = '../public/blackPin.png';
            // const whitePin = '../public/whitePin.png';
            // const noPin = '../public/noPin.png';
            switch (hint) {
                case 'b':
                    return blackPin;
                case 'w':
                    return whitePin;
                case 'n':
                    return noPin;
                default:
                    return 'error';
            }
        });

        return (
            <div className="hint">
            <span><img src={pins[0]} alt="pin1" /></span> <span><img src={pins[1]} alt="pin2" /></span><br />
            <span><img src={pins[2]} alt="pin3" /></span> <span><img src={pins[3]} alt="pin4" /></span>
            
            </div>
        );
    }    

    render() {

        return (
            this.renderHints(this.props.hints)
        );
    }
}

export default Hint;