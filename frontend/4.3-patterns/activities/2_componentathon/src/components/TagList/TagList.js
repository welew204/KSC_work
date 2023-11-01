import React from 'react';
import './TagList.css';
import Button from '../Button/Button.js';

// So much to do here!
const TagList = () => {
  return (
    <div className="TagList">
      <div className="TagList-tag">
          tag example
        <Button>x</Button>
      </div>

      <div className="TagList-final">
        <input
          className="TagList-tag"
          type="text"
          placeholder={"Add new tag"}
        />
        <Button>+</Button>
      </div>
    </div>
  );
}

export default TagList;
