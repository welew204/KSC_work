import React, { Component } from 'react';
import './NewMessage.css';

import Button from '../Button/Button.js';

class NewMessage extends Component {
  render() {
    return (
      <div className="NewMessage">
        <input value={this.props.value} onChange={this.props.onChangeMessage} placeholder="Type your message" />
        <Button onClick={this.props.onClickSend}>Send</Button>
      </div>
    );
  }
}

export default NewMessage;
