import React from 'react';

import './BoldButton.css';

// Bonus Solution: Using react-icons "feather icon" set
import { FiEdit } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import { FiArrowLeftCircle } from 'react-icons/fi';

function BoldButton(props) {
  const divProps = {};

  divProps.className = "BoldButton";

  if (props.onClick) {
    divProps.onClick = props.onClick;
  }

  let icon = null;

  /*
    // Bonus Challenge solution
    // Using emojis
    if (props.icon === 'delete') {
      icon = '🗑️';
    } else if (props.icon === 'edit') {
      icon = '📝';
    }
  */

  // Bonus Challenge solution
  // Using icon-set
  if (props.icon === 'delete') {
    icon = <FiTrash2 />;
  } else if (props.icon === 'edit') {
    icon = <FiEdit />;
  } else if (props.icon === 'back') {
    icon = <FiArrowLeftCircle />;
  }

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
