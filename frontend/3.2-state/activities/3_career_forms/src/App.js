import React, { useState } from "react";
import "./App.css";

function App() {
  // State variables
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [position, setPosition] = useState("Pizza Delivery");
  const [degrees, setDegrees] = useState("Bachelor of Mooching");
  const [interests, setInterests] = useState({
    funTimes: false,
    gruelingLabor: true,
    officePolitics: true,
  });
  const [salary, setSalary] = useState({
    monthly: 0,
    bonus: 0,
  });
  const [mathy, setMathy] = useState({
    first: " ",
    second: " ",
  });

  // State functions
  function onNameChange(ev) {
    console.log(ev.target.value);
    let value = ev.target.value;
    setName(value);
  }
  function onDOBChange(ev) {
    console.log(ev.target.value);
    let value = ev.target.value;
    setDob(value);
  }
  function onPositionChange(ev) {
    console.log(ev.target.value);
    let value = ev.target.value;
    setPosition(value);
  }
  function onDegreeChange(ev) {
    console.log(ev.target.value);
    let value = ev.target.value;
    setDegrees(value);
  }
  function onInterestsChange(input_about) {
    let newVal = !interests[input_about];
    setInterests({ ...interests, [input_about]: newVal });
  }

  function onSalaryChange(e, inp) {
    setSalary({ ...salary, [inp]: e.target.value });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src='https://i.imgur.com/91fScLx.png' alt='Getting a chip' />
        <h1 className='App-title'>Career Assignment Office</h1>

        <h2>Hi, {name}.</h2>
      </header>
      <div className='Form'>
        <h2>Name: {name}</h2>
        <input
          placeholder='Enter your name'
          value={name}
          onChange={onNameChange}
        />

        <h2>Date of birth: {dob}</h2>
        <input placeholder='Date of birth' value={dob} onChange={onDOBChange} />

        <h2>Most recent position:</h2>
        <p>{position}</p>
        <textarea
          placeholder='Most recent position'
          value={position}
          onChange={onPositionChange}
        />

        <h2>Degrees earned:</h2>
        <p>{degrees}</p>
        <textarea
          placeholder='Most recent position'
          value={degrees}
          onChange={onDegreeChange}
        />

        <h2>Interests:</h2>

        <label>
          <input
            type='checkbox'
            value={interests.funTimes}
            checked={interests.funTimes}
            onChange={() => onInterestsChange("funTimes")}
          />
          Fun times
        </label>

        <label>
          <input
            type='checkbox'
            checked={interests.gruelingLabor}
            onChange={() => onInterestsChange("gruelingLabor")}
          />
          Grueling labor
        </label>

        <label>
          <input
            type='checkbox'
            checked={interests.officePolitics}
            onChange={() => onInterestsChange("officePolitics")}
          />
          Office politics
        </label>

        <h2>Salary calculator</h2>
        <label>
          <input
            value={salary.monthly}
            onChange={(e) => onSalaryChange(e, "monthly")}
          />{" "}
          x 12 +{" "}
          <input
            value={salary.bonus}
            onChange={(e) => onSalaryChange(e, "bonus")}
          />{" "}
          (bonus) = {parseInt(salary.monthly * 12) + parseInt(salary.bonus)}{" "}
          slurm bucks
        </label>

        <h2>Prove you are not a robot:</h2>
        <p>
          Answer these math questions, since robots are too lazy to do math, and
          we cannot plant career chips in robots. Apologies to Bender, Flexo,
          Boxy, and Calculon units.
        </p>

        <label
          style={{
            background: parseInt(mathy.first) === 10 ? "green" : "red",
          }}>
          3 + 7 ={" "}
          <input
            value={mathy.first}
            onChange={(e) => setMathy({ ...mathy, first: e.target.value })}
          />
        </label>

        <label
          style={{
            background: parseInt(mathy.second) === 3 ? "green" : "red",
          }}>
          6 / 2 ={" "}
          <input
            value={mathy.second}
            onChange={(e) => setMathy({ ...mathy, second: e.target.value })}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
