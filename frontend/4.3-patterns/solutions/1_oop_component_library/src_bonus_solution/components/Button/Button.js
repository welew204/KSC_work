import React from 'react';
import './Button.css';

function Button(props) {
  const style = {};

  if (props.favoriteColor === 'blue') {
    style.backgroundColor = 'blue';
  }

  return (
    <div style={style} className="Button" onClick={props.gotClicked}>
      {props.buttonText || 'No button text'}
    </div>
  );
}

export default Button;
