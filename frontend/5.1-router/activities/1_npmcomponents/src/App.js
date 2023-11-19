import React from "react";
import "./App.css";
import { format } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { SketchPicker } from "react-color";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryGroup,
} from "victory";

const data = [
  { quarter: 1, earnings: 14000, costs: 10000 },
  { quarter: 2, earnings: 22000, costs: 12000 },
  { quarter: 3, earnings: 21000, costs: 10000 },
  { quarter: 4, earnings: 14000, costs: 12000 },
  { quarter: 5, earnings: 15000, costs: 11000 },
  { quarter: 6, earnings: 24000, costs: 8000 },
  { quarter: 7, earnings: 10000, costs: 10000 },
  { quarter: 8, earnings: 13000, costs: 10000 },
  { quarter: 9, earnings: 18000, costs: 8000 },
  { quarter: 10, earnings: 24000, costs: 12000 },
  { quarter: 11, earnings: 24000, costs: 10000 },
  { quarter: 12, earnings: 14000, costs: 13000 },
  { quarter: 13, earnings: 16000, costs: 13000 },
  { quarter: 14, earnings: 14000, costs: 12000 },
  { quarter: 15, earnings: 18000, costs: 10000 },
  { quarter: 16, earnings: 23000, costs: 9000 },
  { quarter: 17, earnings: 20000, costs: 10000 },
  { quarter: 18, earnings: 15000, costs: 12000 },
  { quarter: 19, earnings: 16000, costs: 8000 },
  { quarter: 20, earnings: 18000, costs: 11000 },
];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "carmel", label: "Carmel" },
  { value: "khulfi", label: "Khulfi w. nuts" },
];

function App() {
  // stuff goes here...
  const animatedComponents = makeAnimated();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>NPM Component Practice</h1>
        <p className='App-intro'>
          Read the <code>instructions.md</code> to get started
        </p>
      </header>
      <VictoryChart
        theme={VictoryTheme.material}
        height={400}
        domainPadding={10}
        /* offset={20} */
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={data.map((i) => i.quarter)}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryGroup
          offset={5} // Controls the spacing between each group of bars
          colorScale={"qualitative"} // Optional: for different colors
        >
          <VictoryBar data={data} x='quarter' y='earnings' />
          <VictoryBar data={data} x='quarter' y='costs' />
        </VictoryGroup>
      </VictoryChart>
      <DayPicker
        mode='single'
        /* selected={selected}
        onSelect={setSelected}
        footer={footer} */
      />
      <SketchPicker />
      <Select
        options={options}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
      />
    </div>
  );
}

export default App;
