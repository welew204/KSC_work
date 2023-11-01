import React from 'react';
import './Dropdown.css';

import Button from '../Button/Button.js';

function Dropdown(props) {

  function getUnicodeArrow() {
    if (props.show) {
      return " ↑";
    } else {
      return " ↓";
    }
  }

  function onButtonClick() {
    if (props.show) {
      props.onHide();
    } else {
      props.onShow();
    }
  }

  let dropdownStyle = {
    visibility: 'hidden',
    maxHeight: '0px',
  };

  if (props.show) {
    dropdownStyle = {
      visibility: 'visible',
      maxHeight: '1000px',
    };
  }

  return (
    <div className="Dropdown">
      <Button
        gotClicked={onButtonClick}
        buttonText={props.text + getUnicodeArrow()}
      />
      <div style={dropdownStyle} className="Dropdown-box">
        {props.children}
      </div>
    </div>
  );
}

export default Dropdown;
