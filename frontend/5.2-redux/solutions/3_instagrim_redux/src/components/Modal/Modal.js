import React from 'react';
import './Modal.css';
function Modal(props) {
  return (
    <div className="Modal">
      <div className="Modal-backdrop"></div>
      <div className="Modal-content">
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
