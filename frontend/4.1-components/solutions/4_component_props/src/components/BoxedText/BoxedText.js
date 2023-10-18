import React from 'react';
import './BoxedText.css';

function BoxedText(props) {
  let className = 'BoxedText';

  if (props.type === "lightondark") {
    className = 'BoxedText BoxedText--lightondark';
  }

  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

export default BoxedText;
