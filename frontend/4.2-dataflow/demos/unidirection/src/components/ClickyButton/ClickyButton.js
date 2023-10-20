import React from 'react';
import './ClickyButton.css';

function ClickyButton (props) {
  return (
    <div onClick={props.gotClicked} className="ClickyButton">
      {props.text}
    </div>
  );
}

export default ClickyButton;
