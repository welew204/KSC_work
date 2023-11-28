import React from 'react';
import './BoldInput.css';

function BoldInput(props) {
  const inputProps = Object.assign({
    placeholder: props.label,
  }, props);

  return (
    <div className="BoldInput">
      {
        props.label ? (
          <p className="BoldInput-label">
            {props.label}
          </p>
        ) : null
      }

      {
        props.error ? (
          <p className="BoldInput-error">
            <strong>Whoops:</strong> {props.error}
          </p>
        ) : null
      }

      <input className="BoldInput-actualInput" {...inputProps} />
    </div>
  );
}

export default BoldInput;
