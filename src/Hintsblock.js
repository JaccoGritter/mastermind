import React from 'react';
import Hint from './Hint';

class Hintsblock extends React.Component {
   
    renderHintsBlock(hints){
        let counter = 0;
        const hintBlock = hints.map(hint => {
            counter++;
            return <Hint hints={hint} key={'hint' + counter}/>
        });
        return hintBlock;
    }

    render() {
        return (
            this.renderHintsBlock(this.props.hints)    
        )
    }
}

export default Hintsblock;