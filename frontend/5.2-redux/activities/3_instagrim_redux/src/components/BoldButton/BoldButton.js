import React from 'react';

import './BoldButton.css';


function BoldButton(props) {

  const divProps = {};

  divProps.className = "BoldButton";

  if (props.onClick) {
    divProps.onClick = props.onClick;
  }

  let icon = null;
  // Bonus challenge might go here...

  return (
    <div {...divProps}>
      {
        icon ? (
          <span className="BoldButton-icon">
            {icon}
          </span>
        ) : null
      }
      <div className="BoldButton-label">
        {props.children}
      </div>
    </div>
  );
}

export default BoldButton;
