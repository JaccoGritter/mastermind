import React from 'react';
import Hint from './Hint';

class Hintsblock extends React.Component {
   
    renderHintsBlock(hints){
        const hintBlock = hints.map(hint => {
            return <Hint hints={hint}/>
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