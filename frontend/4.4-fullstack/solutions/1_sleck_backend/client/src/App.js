import React, { useState, useEffect } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';

function App() {
  const [messages, setMessages] = useState(null);
  const [message, setMessage] = useState("");
  const [channels, setChannels] = useState([
    'parking-lot',
    'random',
    'jokes',
  ]);
  const [selectedChannel, setSelectedChannel] = useState('parking-lot');
  const [stars, setStars] = useState([
    1,
    3,
  ]);

  function refreshMessages() {
    fetch('/get-messages/')
      .then(response => response.json())
      .then(data => {
        console.log('receiving message data!', data);
        setMessages(data);
      });
  }

  function refreshStars() {
    fetch('/get-stars/')
      .then(response => response.json())
      .then(data => {
        console.log('receiving star data!', data);
        setStars(data);
      });
  }

  function toggleStar(indexOfMessage) {
    fetch('/toggle-star/' + indexOfMessage, {method: "POST"})
      .then(response => response.json())
      .then(data => {
        // Let's go ahead and do a refresh after sending
        refreshStars();
      });
  }

  function selectChannel(channelName) {
    setSelectedChannel(channelName);
  }

  function onChangeMessage(ev) {
    setMessage(ev.target.value);
  }

  function sendMessage() {
    // Instead of doing a simple setState, we want to send this data to the server
    setMessage(''); // clear the input
    setMessages(null); // Set messages to be null when we send the request

    fetch('/send-message/', {method: "POST", body: message})
      .then(response => response.json())
      .then(data => {
        // Let's go ahead and do a refresh after sending
        refreshMessages();
      });
  }

  useEffect(() => {
    // Do fetch for message & star data from server
    refreshMessages();
    refreshStars();
  }, []);

  return (
    <div className="App">
      <Nav
        selectedChannel={selectedChannel}
        starCount={stars.length} />
      <ChannelSelector
        channels={channels}
        selectedChannel={selectedChannel}
        onSelectChannel={selectChannel} />
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
        onChangeMessage={onChangeMessage}
        onClickSend={sendMessage}
      />
    </div>
  );
}

export default App;
