import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let prevSearch = localStorage.getItem("weathersearch");
  if (!prevSearch) {
    prevSearch = "Oakland, California";
  }
  console.log("previous search was:", prevSearch);

  const [searchBox, setSearchBox] = useState(prevSearch);
  const [weatherResult, setWeatherResult] = useState({
    location: "",
    temperature: "",
    description: "",
    windSpeed: "",
    humidity: "",
    pressure: "",
  });

  function doFetch() {
    //console.log("hitting refresh", searchBox);
    const query = searchBox;
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&appid=0de82b6b4ba5d843dac44bbee4d02543";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("receiving data", data);

        if (!data.main) {
          // 404
          setWeatherResult({
            location: "Not found.",
          });
          return; // Exit function
        }

        // Do state set for data back from API
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

  useEffect(() => {
    doFetch();
    console.log("useEffect w/ []");
  }, []);
  useEffect(() => {
    if (!searchBox) {
    } else {
      localStorage.setItem("weathersearch", searchBox);
      console.log("searchBox stored: " + searchBox);
    }
  }, [searchBox]);
  //console.log("rerendering");

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
          <input
            placeholder='Enter location name'
            value={searchBox}
            onChange={(ev) => setSearchBox(ev.target.value)}
          />
          <button onClick={doFetch}>Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
