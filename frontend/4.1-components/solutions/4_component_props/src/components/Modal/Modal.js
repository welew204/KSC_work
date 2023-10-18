import React from 'react';
import './Modal.css';

function Modal(props) {
  return (
    <div className="Modal">
      <div className="Modal-backdrop" onClick={props.onDismiss}></div>
      <div className="Modal-body">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
