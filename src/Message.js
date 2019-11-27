import React from 'react';

class Message extends React.Component {

    render() {

        return (
            <h4>{this.props.message}</h4>
        )
    }
}

export default Message;