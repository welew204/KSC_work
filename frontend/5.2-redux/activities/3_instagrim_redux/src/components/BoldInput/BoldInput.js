import React from 'react';
import './BoldInput.css';

function BoldInput(props) {

  // "Object.assign" creates a new object out of the props object, with
  // "placeholder" as defaulting to props.label. Bellow it's used with
  // spread syntax to copy over the props given to BoldInput into the "real"
  // HTML input that BoldInput "wraps around".
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
