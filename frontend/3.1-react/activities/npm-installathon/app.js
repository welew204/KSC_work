const express = require("express");
const app = express();
const port = 3000;

const main = require("./main.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/weather", (req, res) => {
  console.log(main);
  let string = `Current temperature in Oakland is ... ${main.weather_app}`;
  res.send(string);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
