import React, { useState } from "react";
import "./App.css";

import Button from "./components/Button/Button.js";

import Nav from "./components/Nav/Nav.js";
import ChannelSelector from "./components/ChannelSelector/ChannelSelector";
import ChatArea from "./components/ChatArea/ChatArea.js";
/* import avatar from "./components/ChatArea/placeholder.svg";
 */
/* import starEmpty from "./components/ChatArea/star_empty.svg"; */

function App() {
  const [channels, setChannels] = useState(["parking-lot", "random", "jokes"]);
  const [selectedChannel, setSelectedChannel] = useState("parking-lot");
  const [messages, setMessages] = useState([
    "Hi how are you",
    "how are you",
    "pls respond",
    "pls",
  ]);
  const [message, setMessage] = useState("");

  function messageGotChanged(ev) {
    setMessage(ev.target.value);
  }

  function sendMessage() {
    setMessage(""); // clear current message
    setMessages([
      // set the state with new array
      ...messages,
      message,
    ]);
  }

  return (
    <div className='App'>
      <Nav />
      <ChannelSelector />
      {/* <div className='ChannelSelector'>
        <div className='ChannelSelector-channelHeader'>All Channels</div>
        <div className='ChannelSelector-channel'>#random</div>
        <div className='ChannelSelector-channel'>#testing-channel</div>
        <div className='ChannelSelector-channel'>#doesnt-work-yet</div>
      </div> */}

      <ChatArea messages={messages} />

      <div className='NewMessage'>
        <input
          value={message}
          onChange={messageGotChanged}
          placeholder='Type your message'
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}

export default App;
