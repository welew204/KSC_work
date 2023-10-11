let weather = require("weather-js");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* app.get("/weather", (req, res) => {
  console.log(weather_app);
  let string = `Current temperature in Oakland is ... ${weather_app}`;
  res.send(string);
}); */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Options:
// search:     location name or zipcode
// degreeType: F or C

app.get("/oakland", function (req, res) {
  weather.find(
    { search: "Oakland, CA", degreeType: "C" },
    function (err, result) {
      if (err) console.log(err);
      console.log("Temp: ", result[0].current.temperature);
      res.send(`
            <h1>Oakland weather</h1>
            <p>${result[0].current.temperature} <strong>C</strong></p>
        `);
    }
  );
});

//app.listen(3000);
