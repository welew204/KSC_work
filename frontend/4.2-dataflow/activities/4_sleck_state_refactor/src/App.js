import React, { useState } from "react";
import "./App.css";

import Nav from "./components/Nav/Nav.js";
import ChannelSelector from "./components/ChannelSelector/ChannelSelector.js";
import ChatArea from "./components/ChatArea/ChatArea.js";
import NewMessage from "./components/NewMessage/NewMessage.js";

function App() {
  // All the messages that have been sent
  const [channels, setChannels] = useState(["parking-lot", "random", "jokes"]);
  const [selectedChannel, setSelectedChannel] = useState("parking-lot");

  const [messages, setMessages] = useState([
    // each message is now a string and a bool re: is it starred?
    ["Hi how are you", false],
    ["how are you", false],
    ["pls respond", false],
    ["pls", false],
  ]);
  // The currently typed-in message
  const [message, setMessage] = useState("");
  /*   console.log(selectedChannel);
   */
  function messageGotChanged(ev) {
    setMessage(ev.target.value);
  }

  function starMessage(index) {
    //console.log(index);
    let newArray = messages.map((val, idx) =>
      idx === index ? [val[0], !val[1]] : val
    );
    //console.log(newArray);
    setMessages(newArray);
  }

  function sendMessage() {
    setMessage(""); // clear current message
    setMessages([
      // set the state with new array
      ...messages,
      [message, false],
    ]);
  }

  return (
    <div className='App'>
      <Nav
        selectedChannel={selectedChannel}
        starCount={
          messages.filter((msg_element) => msg_element[1] === true).length
        }
      />
      <ChannelSelector
        channels={channels}
        selectedChannel={selectedChannel}
        handleChannelSelect={setSelectedChannel}
      />
      <ChatArea messages={messages} starSelector={starMessage} />

      {/* Challenge #1: Changes go here, before the /> */}
      <NewMessage
        value={message}
        onChangeMessage={(e) => setMessage(e.target.value)}
        onClickSend={sendMessage}
      />
    </div>
  );
}

export default App;
