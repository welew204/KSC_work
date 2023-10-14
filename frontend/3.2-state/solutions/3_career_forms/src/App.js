import React, { useState } from 'react';
import './App.css';

function App(){
  const [name, setName] = useState('Leela');
  const [dob, setDOB] = useState('2975');
  const [position, setPosition] = useState('Space Delivery');
  const [degree, setDegree] = useState('BA in Space Delivery Aviation');
  const [salaryMonthly, setSalaryMonthly] = useState(2600);
  const [salaryBonus, setSalaryBonus] = useState(42);
  const [interests, setInterests] = useState({
    funTimes: true,
    gruelingLabor: false,
    officePolitics: false,
  });
  const [robo1, setRobo1] = useState(null);
  const [robo2, setRobo2] = useState(null);

  function onNameChange(ev) {
    let value = ev.target.value;
    console.log('getting a new value!', value);
    setName(value);
  }

  function onDobChange(ev) {
    let value = ev.target.value;
    console.log('dob value!', value);
    setDOB(value);
  }

  function onPositionChange(ev) {
    let value = ev.target.value;
    console.log('position value!', value);
    setPosition(value);
  }

  function onDegreeChange(ev) {
    let value = ev.target.value;
    console.log('degree value!', value);
    setDegree(value);
  }

  function onFunTimesChanged(ev) {
    let newValue = !interests.funTimes;
    setInterests({
      ...interests,
      funTimes: newValue,
    });
  }

  function onGruelingLaborChanged(ev) {
    setInterests({
      ...interests,
      gruelingLabor: !interests.gruelingLabor,
    });
  }

  function onOfficePoliticsChanged(ev) {
    setInterests({
      ...interests,
      officePolitics: !interests.officePolitics,
    });
  }

  function onSalaryChange(ev) {
    setSalaryMonthly(ev.target.value);
  }

  function onBonusChange(ev) {
    setSalaryBonus(ev.target.value);
  }

  function onSubmit() {
    alert('Submitted!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/91fScLx.png" alt="chip" />
        <h1 className="App-title">Career Assignment Office</h1>

        <h2>Hi, {name}.</h2>
      </header>
      <div className="Form">

        <h2>Name: {name}</h2>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={onNameChange}
        />

        <h2>Date of birth: {dob}</h2>
        <input
          placeholder="Date of birth"
          value={dob}
          onChange={onDobChange}
        />

        <h2>Most recent position:</h2>
        <p>{position}</p>
        <textarea
          placeholder="Most recent position"
          value={position}
          onChange={onPositionChange}
        />

        <h2>Degrees earned:</h2>
        <textarea
          placeholder="Degrees earned"
          value={degree}
          onChange={onDegreeChange}
        />

        <h2>Interests:</h2>

        <label>
          <input
            type="checkbox"
            checked={interests.funTimes}
            onChange={onFunTimesChanged}
          />
          Fun times
        </label>

        <label>
          <input
            type="checkbox"
            checked={interests.gruelingLabor}
            onChange={onGruelingLaborChanged}
          />
          Grueling labor
        </label>

        <label>
          <input
            type="checkbox"
            checked={interests.officePolitics}
            onChange={onOfficePoliticsChanged}
          />
          Office politics
        </label>

        <h2>Salary calculator</h2>
        <label>
          <input
            onChange={onSalaryChange}
            value={salaryMonthly}
          /> x 12 + <input
            onChange={onBonusChange}
            value={salaryBonus}
          /> (bonus) = {salaryMonthly * 12 + salaryBonus} slurm bucks per year
        </label>

        <h2>Prove you are not a robot:</h2>

        <p>Answer these math questions, since robots are too lazy to do math,
        and we cannot plant career chips in robots. Apologies to Bender, Flexo,
        Boxy, and Calculon units.</p>

        <label style={{background: robo1 === "10" ? "green" : "red"}}>
          3 + 7 = <input
            onChange={(ev) => setRobo1(ev.target.value)}
            value={robo1 || ''}
          />
        </label>

        <label style={{background: robo2 === "3" ? "green" : "red"}}>
          6 / 2 = <input
            onChange={(ev) => setRobo2(ev.target.value)}
            value={robo2 || ''}
          />
        </label>

        {
          robo1 === "10" && robo2 === "3" ? (
            <button onClick={onSubmit}>
              Submit
            </button>
          ) : null
        }

      </div>
    </div>
  );
}

export default App;
