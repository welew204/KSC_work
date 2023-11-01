import React, { useState } from 'react';
import './TagList.css';
import Button from '../Button/Button.js';

function TagList(props) {
  // We are adding state here, since this is one of the rare situations where
  // it's okay to add state to a child component, as use of this input is
  // entirely confined. This is because what they are typing for the "new tag"
  // will only become useful when it is saved and becomes part of the list,
  // which IS stored in the exterior state.
  const [newTagValue, setNewTagValue] = useState('');

  function deleteTag(index) {
    const tags = props.tags.slice();
    tags.splice(index, 1); // remove element
    props.onChange(tags);
  }

  function addTag() {
    const tags = props.tags.slice();
    tags.push(newTagValue);
    setNewTagValue('');
    props.onChange(tags);
  }

  function onNewTagValueChanged(event) {
    setNewTagValue(event.target.value);
  }

  return (
    <div className="TagList">
      {
        props.tags.map((tag, index) => (
          <div className="TagList-tag" key={index}>
            {tag}
            <Button onClick={() => deleteTag(index)}>x</Button>
          </div>
        ))
      }

      <div className="TagList-final">
        <input
          className="TagList-tag"
          type="text"
          placeholder={"Add new tag"}
          value={newTagValue}
          onChange={onNewTagValueChanged}
        />
        <Button onClick={addTag}>+</Button>
      </div>
    </div>
  );
}

export default TagList;
