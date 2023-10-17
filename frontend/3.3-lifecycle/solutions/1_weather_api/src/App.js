import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchBox, setSearchBox] = useState('Oakland, CA');
  const [weatherResult, setWeatherResult] = useState({
    location: '',
    temperature: '',
    description: '',
    windSpeed: '',
    humidity: '',
    pressure: '',
  });

  function doFetch() {
    console.log('hitting refresh', searchBox);
    const query = searchBox;
    // Construct the URL based on what was typed into the search box with
    // string concatenation
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      query + '&appid=0de82b6b4ba5d843dac44bbee4d02543';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('receiving data', data);

        if (!data.main) {
          setWeatherResult({
            location: 'Not found.',
          });
          return; // Exit function prematurely
        }

        // Data came back successfully, set the weatherResult variable to house
        // the new API data that came back
        setWeatherResult({
          location: data.name,
          temperature: Math.round(data.main.temp - 273),
          description: data.weather[0].main,
          windSpeed: Math.round(data.wind.speed),
          humidity: Math.round(data.main.humidity),
          pressure: Math.round(data.main.pressure),
        });
      });
  }

  function onSearchBoxChange(ev) {
    setSearchBox(ev.target.value);
  }

  /////////////////////////////////////////////////////////////
  // BONUS Solution
  // Determine what type of weather this is so we can use the appropriate class
  // to style the background conditionally based on the weather that we have
  const appClasses = ['App'];
  const desc = (weatherResult.description || '').toLowerCase();
  if (desc.includes('clear')) {
    appClasses.push('App--clear');
  } else if (desc.includes('cloud')) {
    appClasses.push('App--cloud');
  } else if (desc.includes('storm')) {
    appClasses.push('App--storm');
  } else if (desc.includes('rain')) {
    appClasses.push('App--rain');
  }
  /////////////////////////////////////////////////////////////

  return (
    <div className={appClasses.join(' ')}>
      <div className="WeatherDashboard">
        <div className="WeatherDashboard-location">
          {weatherResult.location}
        </div>
        <div className="WeatherDashboard-overview">
          <span className="WeatherDashboard-temperature">
            {weatherResult.temperature}° <span>C</span>
          </span>
          <div className="WeatherDashboard-description">{weatherResult.description}</div>
        </div>
        <div className="WeatherDashboard-details">
          <div className="WeatherDashboard-label">Wind</div>
          <div className="WeatherDashboard-data">{weatherResult.windSpeed} <span>km/h</span></div>
          <div className="WeatherDashboard-label">Humidity</div>
          <div className="WeatherDashboard-data">{weatherResult.humidity} <span>%</span></div>
          <div className="WeatherDashboard-label">Pressure</div>
          <div className="WeatherDashboard-data">{weatherResult.pressure}</div>
        </div>
        <div className="Controls">
          <input placeholder="Enter location name"
            value={searchBox}
            onChange={onSearchBoxChange} />
          <button onClick={doFetch}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
