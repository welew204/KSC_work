

// Challenge #2 & #3
// (First did "npm install weather-js" to install)
var weather = require('weather-js');
weather.find({search: 'Oakland, CA', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
  console.log("Temp: ", result[0].current.temperature);
});

// Challenge #4
const giphyRandom = require("giphy-random");

(async () => {
  const API_KEY = 'dc6zaTOxFJmzC';

  const { data } = await giphyRandom(API_KEY);

  console.log(data);
})();


// Challenge #5
var express = require('express')
var app = express()
app.get('/', function (req, res) {
  res.send(`
    <h1>Hello NPM + Node.js World!</h1>

    <p><a href="/gif">Random gif</a></p>
    <p><a href="/oakland">Weather in Oaktown</a></p>
  `)
})


// Bonus Challenge
app.get('/gif', function (req, res) {

  (async () => {
    const API_KEY = 'dc6zaTOxFJmzC';

    const { data } = await giphyRandom(API_KEY);
    // console.log(data);

    res.send(`
        <h1>Random GIF</h1>
        <img src="${data.images.original.url}"/>
    `);
  })();


})

app.get('/oakland', function (req, res) {
    weather.find({search: 'Oakland, CA', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        console.log("Temp: ", result[0].current.temperature);
        res.send(`
            <h1>Oakland weather</h1>
            <p>${result[0].current.temperature} <strong>C</strong></p>
        `);
    });
})
app.listen(3000)
