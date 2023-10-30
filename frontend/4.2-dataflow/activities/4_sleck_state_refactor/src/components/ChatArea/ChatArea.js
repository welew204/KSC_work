import React from "react";
import "./ChatArea.css";

import ChatMessage from "../ChatMessage/ChatMessage.js";

function ChatArea(props) {
  //console.log(props.messages);

  return (
    <div className='ChatArea'>
      {props.messages.map((text, index) => (
        <ChatMessage
          key={index}
          text={text[0]}
          starred={text[1]}
          onStarSelect={() => props.starSelector(index)}
        />
      ))}
    </div>
  );
}

export default ChatArea;
