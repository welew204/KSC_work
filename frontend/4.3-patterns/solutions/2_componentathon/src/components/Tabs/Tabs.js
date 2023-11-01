import React from 'react';
import './Tabs.css';
const Tabs = props => (
  <div className="Tabs">
    {
      props.tabs.map(tab => (
        <div
          className={
            tab === props.currentTab  ? (
              "Tabs-tab Tabs-tab--selected"
            ) : (
              "Tabs-tab"
            )
          }
          onClick={() => props.onChange(tab)}
          key={tab}>
          {tab}
        </div>
      ))
    }
  </div>
)

export default Tabs;
