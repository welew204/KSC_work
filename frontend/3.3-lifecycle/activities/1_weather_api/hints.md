Check out instructions.md for the instructions, and refer here when stuck.



Challenge #1: HINT
-------------------------------------------------------------------------


        function doFetch(){
          console.log('time to do some fetching!');
          setWeatherResult({
            location: oaklandWeather.name,
            temperature: Math.round(oaklandWeather.temperature - 273),
            description: oaklandWeather.weather[0].main,
            windSpeed: oaklandWeather.wind.speed,
            humidity: oaklandWeather.main.humidity,
            pressure: oaklandWeather.main.pressure,
          });
        }



Challenge #2: HINT
-------------------------------------------------------------------------

- Here's a slightly modified code excerpt from a previous activity:

      function onSubmit() {
        fetch(`https://api.github.com/users/janeqhacker/repos`)
          .then(response => response.json())
          .then(data => {

            console.log('data', data);
          });
      }




Challenge #3: HINT
-------------------------------------------------------------------------

- Hint 1: Add a setApiData in the callback after the fetch to set the results
  in the state and re-render the application.

- Hint 2: The "oaklandweather.json" file is the same as what you get from the
  API. Notice how it is transformed in the default state that you
  uncommented-out in Challenge #1. Your task now is to transform the data in
  the same way for your setState.

- Hint 3: Don't go "too deep" with this, this can be done with with copy &
  paste and replacing some variable names




Challenge #4: HINT
-------------------------------------------------------------------------

- Here's a code excerpt from a previous activity:


      const [username, setUsername] = useState('');
      function onUsernameChange(ev){
        let value = ev.target.value;
        setUsername(value);
      }

      /* ... */

      return (
        <div>
          {/* ... */}
          <input
              placeholder="Enter your GitHub username"
              value={username}
              onChange={onUsernameChange}
            />
        </div>
      )




Challenge #5: HINT
-------------------------------------------------------------------------


- Here's a code excerpt from a previous activity:

        const url = `https://api.github.com/users/${username}/repos`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log('data', data);
            setResults(data);
          });




Challenge #6: HINT
-------------------------------------------------------------------------

- Different APIs express errors differently --- you'll have to mess around &
  explore the data coming back to understand how this one does it.

- A previous activity's code is excerpted below, which checks for a not found
  error (although your if-statement check will likely be different):


        function onSubmit() {
          fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {

              // Check for errors:
              if (data.message ===  "Not Found") {
                setResults([]);
                return;
              }

              console.log('data', data);
              setResults(data);
            });
        }



Bonus Challenge 2: HINT
-------------------------------------


      // Example of how you might break it down into separate state variables
      // instead of a single state variable:
      const [locale, setLocale] = useState(oaklandWeather.name);
      const [temperature, setTemperature] = useState(Math.round(oaklandWeather.main.temp - 273));
      const [description, setDescription] = useState(oaklandWeather.weather[0].main);
      const [windSpeed, setWindSpeed] = useState(Math.round(oaklandWeather.wind.speed));
      const [humidity, setHumidity] = useState(Math.round(oaklandWeather.main.humidity));
      const [pressure, setPressure] = useState(Math.round(oaklandWeather.main.pressure));

      // Pros: Easy access to data that came from the API
      // Cons: Messier, setting the API might be harder


Bonus Challenge 3: HINT
-------------------------------------

      // Guess what type of weather this is so we can use the appropriate class
      // to style the background conditionally based on the weather
      const appClasses = ['App'];
      const desc = description.toLowerCase();
      if (desc.includes('clear')) {
        appClasses.push('App--clear');
      } else if (desc.includes('cloud')) {
        appClasses.push('App--cloud');
      } else if (desc.includes('storm')) {
        appClasses.push('App--storm');
      } else if (desc.includes('rain')) {
        appClasses.push('App--rain');
      }
      console.log('Classes:', appClasses);


