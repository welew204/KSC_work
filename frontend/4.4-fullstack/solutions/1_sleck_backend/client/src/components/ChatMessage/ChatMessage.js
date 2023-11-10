import React from 'react';
import './ChatMessage.css';

import avatar from './placeholder.svg';
import starEmpty from './star_empty.svg';
import starFilled from './star_filled.svg';

function ChatMessage(props) {
  let starIcon = starEmpty;

  if (props.isStarred) {
    starIcon = starFilled;
  }

  return (
    <div className="ChatMessage">
      <img className="ChatMessage-avatar" src={avatar} alt="avatar" />
      <div className="ChatMessage-text">
        <p>{props.text}</p>
      </div>
      <img onClick={props.onStarToggle} className="ChatMessage-star" src={starIcon} alt="star" />
    </div>
  );
}

export default ChatMessage;
