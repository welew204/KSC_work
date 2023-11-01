import React, { Component } from 'react';
import './Modal.css';
import Button from '../Button/Button.js';

class Modal extends Component {
  render() {
    const style = {
      display: 'none',
    };
    if (this.props.visible) {
      style.display = 'block';
    }

    return (
      <div className="Modal" style={style}>
        <div className="Modal-backdrop"
          onClick={this.props.onDismiss}></div>
        <div className="Modal-body">
          <div className="Modal-header">
            <p>{this.props.title}</p>
            <Button
              gotClicked={this.props.onDismiss}
              buttonText={"x"} />
          </div>
          <div className="Modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
