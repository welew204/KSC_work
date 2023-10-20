import React, { useState } from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';


function App() {
  const [selectedChannel, setSelectedChannel] = useState('parking-lot');
  const [message, setMessage] = useState('');
  const [channelData, setChannelData] = useState({
    'parking-lot': {
      stars: [
        1,
        3,
      ],
      messages: [
        'Hi how are you',
        'how are you',
        'pls respond',
        'pls',
      ],
    },
    random: {
      stars: [],
      messages: [
        'Random discussions go here',
        'holds up spork',
      ],
    },
    jokes: {
      stars: [],
      messages: [
        'Why did the javascript coder quit their job?',
        "Because they didn't get arrays.",
      ],
    },
  });

  // A helper method to make it easier to retrieve the current stars
  function getStars() {
    return channelData[selectedChannel].stars;
  }

  // A helper method to make it easier to retrieve the current messages
  function getMessages() {
    return channelData[selectedChannel].messages;
  }

  // A helper method to make it easier to save the current stars
  function setStars(newStars) {
    const current = channelData[selectedChannel];
    current.stars = newStars;
    setChannelData({...channelData, 
      [selectedChannel]: current,
    });
  }

  // A helper function to make it easier to save the current messages
  function setMessages(newMessages) {
    // This gets the currently selected data into a temporary variable
    const currentChannelInfo = channelData[selectedChannel];

    setChannelData({ // Update channel data
      ...channelData, // include previous data
      [selectedChannel]: { // Update the current selected channel data
        ...currentChannelInfo, // include previous info for this channel
        messages: newMessages, // add in new messages array
      },
    });
  }

  function toggleStar(indexOfMessage) {
    // Clone stars
    const stars = getStars().slice(); // clone stars

    // Check if the stars array is listing this message as starred
    if (stars.includes(indexOfMessage)) {
      stars.splice(stars.indexOf(indexOfMessage), 1);
    } else {
      stars.push(indexOfMessage);
    }
    setStars(stars);
  }

  function onChooseChannel(channelName) {
    setSelectedChannel(channelName);
  }

  function onChangeMessage(ev) {
    setMessage(ev.target.value);
  }

  function sendMessage() {
    setMessage(''); // clear current message
    setMessages([ // set the state with new array
      ...messages,
      message,
    ]);
  }

  const messages = getMessages();
  const stars = getStars();

  return (
    <div className="App">
      <Nav
        selectedChannel={selectedChannel}
        starCount={stars.length} />
      <ChannelSelector
        channels={Object.keys(channelData)}
        selectedChannel={selectedChannel}
        onSelectChannel={onChooseChannel} />
      <ChatArea
        messages={messages}
        stars={stars}
        onStarToggle={toggleStar} />
      <NewMessage
        value={message}
        onChangeMessage={onChangeMessage}
        onClickSend={sendMessage}
      />
    </div>
  );
}

export default App;
