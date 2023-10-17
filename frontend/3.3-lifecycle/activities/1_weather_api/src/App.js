import React, { useState } from "react";
import "./App.css";

import oaklandWeather from "./oaklandweather.json";

function App() {
  console.log("twerking...");
  const [searchBox, setSearchBox] = useState("");
  const [weatherResult, setWeatherResult] = useState({
    location: "",
    temperature: "",
    description: "",
    windSpeed: "",
    humidity: "",
    pressure: "",
  });

  function doFetch() {
    console.log("fatetching!!!!");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchBox}&appid=0de82b6b4ba5d843dac44bbee4d02543`
    )
      .then((data) => data.json())
      .then(
        (res) => {
          console.log("buehller?");
          if (!res.main) {
            setWeatherResult({ location: "location not found" });
            return;
          } else {
            setWeatherResult({
              location: res.name,
              temperature: Math.round(res.main.temp - 273),
              description: res.weather[0].main,
              windSpeed: res.wind.speed,
              humidity: res.main.humidity,
              pressure: res.main.pressure,
            });
          }
        }
        //.then((data) => console.log(data))
      );
  }

  function handleSearch(e) {
    setSearchBox(e.target.value);
  }

  return (
    <div className='App App--clear'>
      <div className='WeatherDashboard'>
        <div className='WeatherDashboard-location'>
          {weatherResult.location}
        </div>
        <div className='WeatherDashboard-overview'>
          <span className='WeatherDashboard-temperature'>
            {weatherResult.temperature}° <span>C</span>
          </span>
          <div className='WeatherDashboard-description'>
            {weatherResult.description}
          </div>
        </div>
        <div className='WeatherDashboard-details'>
          <div className='WeatherDashboard-label'>Wind</div>
          <div className='WeatherDashboard-data'>
            {weatherResult.windSpeed} <span>km/h</span>
          </div>
          <div className='WeatherDashboard-label'>Humidity</div>
          <div className='WeatherDashboard-data'>
            {weatherResult.humidity} <span>%</span>
          </div>
          <div className='WeatherDashboard-label'>Pressure</div>
          <div className='WeatherDashboard-data'>{weatherResult.pressure}</div>
        </div>
        <div className='Controls'>
          {
            <input
              placeholder='Enter location name'
              value={searchBox}
              onChange={handleSearch}
            />
          }
          <button onClick={doFetch}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
