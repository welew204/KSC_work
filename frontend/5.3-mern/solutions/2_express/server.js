// See instructions.md for challenge instructions

// Boilerplate importing and setting up 
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());



// Making a route for 'localhost:3000/hello-world/'
app.get('/hello-world/', (request, response) => {

  // Send back as a response JSON data
  response.json({
    hello: 'world',
  });
});


// Challenge #2
app.get('/api/get-pi-value/', (request, response) => {
  response.json({
    "pi": 3.1415926535,
  });
});


// Challenge #3
app.get('/api/esperanto/:englishWord', (request, response) => {
  const englishWord = request.params.englishWord;

  if (englishWord === 'hello') {
    response.json({
      translation: 'saluton',
    });
  } else if (englishWord === 'goodbye') {
    response.json({
      translation: 'adiau',
    });
  } else if (englishWord === 'candy') {
    response.json({
      translation: 'dolcajo',
    });
  } else {
    response.json({
      error: 'Unknown word',
    });
  }
});

// Challenge #4
app.get('/api/calculator/add/:firstNum/:secondNum', (request, response) => {
  const a = request.params.firstNum;
  const b = request.params.secondNum;
  const aNum = Number(a);
  const bNum = Number(b);
  const c = aNum + bNum;
  response.json({
    result: c,
  });
});

app.get('/api/calculator/subtract/:firstNum/:secondNum', (request, response) => {
  const a = request.params.firstNum;
  const b = request.params.secondNum;
  const aNum = Number(a);
  const bNum = Number(b);
  const c = aNum - bNum;
  response.json({
    result: c,
  });
});


app.get('/api/calculator/multiply/:firstNum/:secondNum', (request, response) => {
  const a = request.params.firstNum;
  const b = request.params.secondNum;
  const aNum = Number(a);
  const bNum = Number(b);
  const c = aNum * bNum;
  response.json({
    result: c,
  });
});


// Bonus:
const tempData = require('./data/us_temp_yearly.json');
app.get('/api/temp/:year', (request, response) => {
  const year = request.params.year;
  const yearData = tempData[year];

  if (!yearData) {
    response.json({
      error: 'No information about year ' + year,
    });
  } else {
    response.json({
      result: yearData,
    });
  }
});



app.get('/api/random-gif/', function (request, response) {
  // Advanced bonus
  const GiphyRandom = require('giphy-random');
  const giphyRandom = new GiphyRandom({ apiKey: 'dc6zaTOxFJmzC' });

  giphyRandom.get()
    .then(data => {
        response.json({
            url: data.images.original.url,
        });
    })
})











//////////////////////////////////////////
// The following is boilerplate:

// This boilerplate logs each request to the terminal
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

// This boilerplate shows the "Listening" method
const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Listening at http://localhost:${PORT}/`);
})
