import React, { useState } from 'react';
import './App.css';

import Button from './components/Button/Button.js';
import FieldSet from './components/FieldSet/FieldSet.js';
import Tabs from './components/Tabs/Tabs.js';
import TagList from './components/TagList/TagList.js';
import LengthSelectorInput from './components/LengthSelectorInput/LengthSelectorInput.js';

function App() {

  const [dropdownShowing, setDropdownShowing] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [allTabs, setAllTabs] = useState(['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr']);
  const [currentTab, setCurrentTabs] = useState('Paul McCartney');
  const [currentTab2, setCurrentTabs2] = useState("");
  const [allTags, setAllTags] = useState(['backgrounds', 'abstract', 'generated', 'cgi']);
  const [buttonPresses, setButtonPresses] = useState(0);

  function incrementButtonPresses() {
    setButtonPresses(buttonPresses + 1);
  }

  function onFirstnameChange(ev) {
    setFirstName(ev.target.value);
  }

  function setTags(newTags) {
    setAllTags(newTags);
  }

  function setCurrentTab(tabName) {
    setCurrentTabs(tabName);
  }

  function setCurrentTab2(tabName) {
    setCurrentTabs2(tabName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Component Style Library</h1>
      </header>
      <div className="App-library">
        <h1>Button</h1>
        <Button onClick={incrementButtonPresses}>
            Hello! {buttonPresses}
        </Button>

        <h1>FieldSet</h1>
        <p>Name entered: {firstname}</p>
        <FieldSet
          onChange={onFirstnameChange}
          value={firstname}
          legend="Personal Information"
          label="First Name"
          placeholder="Please enter your real first name" />

        <h1>Tabs</h1>
        <Tabs
          tabs={allTabs}
          currentTab={currentTab}
          onChange={setCurrentTab} />
        <p>{currentTab} is the best Beatle.</p>

        <br />
        <br />
        <br />
        <h1>TagList (Bonus #1)</h1>
        <TagList
          tags={allTags}
          onChange={setTags} />

        <h1>Tabs from TagList (Bonus #2)</h1>
        <Tabs
          tabs={allTags}
          currentTab={currentTab2}
          onChange={setCurrentTab2} />

        <h1>Length selector input (Bonus #3)</h1>
        <LengthSelectorInput />
      </div>
    </div>
  );
}

export default App;
