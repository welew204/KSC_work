import React, { useState } from 'react';
import DayPicker from "react-day-picker";
import 'react-day-picker/lib/style.css';
import logo from './logo.svg';
import './App.css';


// react-select
import Select from 'react-select';

// react-color
import { SketchPicker } from 'react-color';

// Victory Chart
import { VictoryBar, VictoryChart, VictoryAxis,
        VictoryTheme, VictoryStack } from 'victory';

// antd (Bonus Challenge)
import Button from 'antd/lib/button';
import Timeline from 'antd/lib/timeline';

// react-date-picker (Bonus Challenge)
import DatePicker from 'react-date-picker';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

//////////////////////////////////////////
// VictoryChart
// Taken from:
// https://formidable.com/open-source/victory/docs#8-stack-multiple-bar-charts
const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];
const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];
const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];
//////////////////////////////////////////



function App() {
  // Bonus challenge:
  const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState(null);

  function onChange(date) {
    setDate(date);
  }

  // From the react select site
  function handleChange(selectedOption) {
    console.log('Option selected:', selectedOption);
    setSelectedOption(selectedOption);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="App-intro">
        <h1>React color</h1>
        <SketchPicker />

        <h1>React day picker</h1>
        <DayPicker />

        <h1>React select</h1>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          />

        <h1>Victory Chart Example</h1>
        <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryStack>
              <VictoryBar
                data={data2012}
                x="quarter"
                y="earnings"
              />
              <VictoryBar
                data={data2013}
                x="quarter"
                y="earnings"
              />
              <VictoryBar
                data={data2014}
                x="quarter"
                y="earnings"
              />
              <VictoryBar
                data={data2015}
                x="quarter"
                y="earnings"
              />
            </VictoryStack>
          </VictoryChart>

        <h1>Date picker</h1>
        <DatePicker
          onChange={onChange}
          value={date}
          />

        <h1>Antd examples</h1>
        <Button>antd button example</Button>

        <Timeline>
          <Timeline.Item>step1 2015-09-01</Timeline.Item>
          <Timeline.Item>step2 2015-09-01</Timeline.Item>
          <Timeline.Item>step3 2015-09-01</Timeline.Item>
          <Timeline.Item>step4 2015-09-01</Timeline.Item>
        </Timeline>



      </div>
    </div>
  );
}

export default App;
