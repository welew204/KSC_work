import React from "react";
import "./ChatArea.css";
import ChatMessage from "../ChatMessage/ChatMessage";

/* import logo from "./logo2.svg";
 */
function ChatArea(props) {
  return (
    <div className='ChatArea'>
      {props.messages.map((text, index) => (
        <ChatMessage text={text} />
      ))}
    </div>
  );
}

export default ChatArea;
