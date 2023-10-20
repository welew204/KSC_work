import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';

function App() {
  // All the messages that have been sent
  const [messages, setMessages] = useState([
    'Hi how are you',
    'how are you',
    'pls respond',
    'pls',
  ]);
  // The currently typed-in message
  const [message, setMessage] = useState("");

  function messageGotChanged(ev) {
    setMessage(ev.target.value);
  }

  function sendMessage() {
    setMessage(''); // clear current message
    setMessages([ // set the state with new array
      ...messages,
      message,
    ]);
  }

  return (
    <div className="App">
      <Nav />
      <ChannelSelector />
      <ChatArea messages={messages} />

      {/* Challenge #1: Changes go here, before the /> */}
      <NewMessage
        value={message}

      />
    </div>
  );
}

export default App;
