import React, {useState} from 'react';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ChannelSelector from './components/ChannelSelector/ChannelSelector.js';
import ChatArea from './components/ChatArea/ChatArea.js';
import NewMessage from './components/NewMessage/NewMessage.js';

function App() {
  const [messages, setMessages] = useState([
    'Hi how are you',
    'how are you',
    'pls respond',
    'pls',
  ]);
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

  function toggleStar(indexOfMessage) {
    const starsCopy = stars.slice(); // Create copy of stars to work with

    // Check if the stars array is listing this message as starred
    if (starsCopy.includes(indexOfMessage)) {
      // Presently starred, remove from array (This is one way to remove a
      // particular value from an array in JavaScript, sadly there is no
      // "remove" method.)
      starsCopy.splice(starsCopy.indexOf(indexOfMessage), 1);

    } else {
      // Not presently starred, add to array
      starsCopy.push(indexOfMessage);
    }

    // Finally, set the state with the new stars
    setStars(starsCopy);
  }

  function onChooseChannel(channelName) {
    setSelectedChannel(channelName);
  }

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
      <Nav
        selectedChannel={selectedChannel}
        starCount={stars.length} />
      <ChannelSelector
        channels={channels}
        selectedChannel={selectedChannel}
        onSelectChannel={onChooseChannel} />
      <ChatArea
        messages={messages}
        stars={stars}
        onStarToggle={toggleStar} />
      <NewMessage
        value={message}
        onChangeMessage={messageGotChanged}
        onClickSend={sendMessage}
      />
    </div>
  );
}

export default App;
