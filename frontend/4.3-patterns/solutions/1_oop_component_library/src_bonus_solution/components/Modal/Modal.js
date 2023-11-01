import React from 'react';
import './Modal.css';
import Button from '../Button/Button.js';

function Modal(props) {

  const style = {
    display: 'none',
  };

  if (props.visible) {
    style.display = 'block';
  }

  return (
    <div className="Modal" style={style}>
      <div className="Modal-backdrop"
        onClick={props.onDismiss}></div>
      <div className="Modal-body">
        <div className="Modal-header">
          <p>{props.title}</p>
          <Button
            gotClicked={props.onDismiss}
            buttonText={"x"} />
        </div>
        <div className="Modal-content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
