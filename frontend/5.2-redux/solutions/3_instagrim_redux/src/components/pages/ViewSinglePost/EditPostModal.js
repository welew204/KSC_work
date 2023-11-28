import React, { useState } from 'react';
import BoldInput from '../../BoldInput/BoldInput.js';
import BoldButton from '../../BoldButton/BoldButton.js';

function EditPostModal(props) {
  const [newText, setNewText] = useState(null);
  const [error, setError] = useState('');

  function onTextChange(ev) {
    setNewText(ev.target.value);
  }

  function doSubmit() {
    if (!newText) {
      setError('Enter new text for the post');
    } else {
      props.onSubmit(newText);
    }
  }

  // By default, the state starts as "null", and until they start typing,
  // this code will make it default to the initial text
  const value = newText === null ?
    props.initialText : newText;

  return (
    <div>
      <BoldInput
        label="Enter new text for this post"
        error={error}
        onChange={onTextChange}
        value={value}
      />
      <BoldButton onClick={doSubmit}>Save</BoldButton>
      <BoldButton onClick={props.onExit}>Cancel</BoldButton>
    </div>
  );
}

export default EditPostModal;
