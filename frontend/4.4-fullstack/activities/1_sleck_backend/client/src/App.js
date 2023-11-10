import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';

function App() {
  const [messages, setMessages] = useState(null);
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState([]);

  function refreshMessages() {
    fetch('/get-messages/')
      .then(response => response.json())
      .then(data => {
        console.log('receiving data!', data);
        setMessages(data);
      });
  }

  function refreshStars() {
    // Challenge 4 TODO
  }

  function toggleStar(indexOfMessage) {
    ////////////////////////////////////////////
    // Challenge 5: OLD CODE, needs to be replaced
    setStars(stars.includes(indexOfMessage) ?
      stars.filter(i => i !== indexOfMessage) :
      stars.concat([indexOfMessage]));
    ////////////////////////////////////////////
  }

  function sendMessage() {
    setMessage(''); // clear input

    // Instead of doing a simple set state, we want to send this data to the
    // server
    fetch('/send-message/', { method: "POST", body: message, })
      .then(response => response.json())
      .then(data => {
        console.log('sent the message!');
        // HINT: Challenge 2 goes here....

      });
  }

  useEffect(refreshMessages, []);
  useEffect(refreshStars, []);

  return (
    <div className="App">
      <Nav starCount={stars.length} />
      <ChannelSelector
        channels={['parking-lot']}
        selectedChannel={'parking-lot'} />

      {
        messages === null ? (
          <div>Loading</div>
        ) : (
          <ChatArea
            messages={messages}
            stars={stars}
            onStarToggle={toggleStar} />
        )
      }
      <NewMessage
        value={message}
        onChangeMessage={ev => setMessage(ev.target.value)}
        onClickSend={sendMessage}
      />
    </div>
  );
}

export default App;
