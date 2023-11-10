import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    let className = 'Button';

    if (this.props.type === 'gray') {
      className = 'Button Button--gray';
    }

    return (
      <div className={className} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
