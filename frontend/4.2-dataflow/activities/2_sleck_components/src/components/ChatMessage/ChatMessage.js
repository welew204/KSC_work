import React from "react";
import "./ChatMessage.css";

/* import logo from "./logo2.svg";
 */
function ChatMessage(props) {
  return (
    <div className='ChatMessage'>
      <img className='ChatMessage-avatar' alt='avatar' />
      <div className='ChatMessage-messageText'>
        <p>{props.text}</p>
      </div>
      <img className='ChatMessage-star' alt='star' />
    </div>
  );
}

export default ChatMessage;
