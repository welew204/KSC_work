// See instructions.md for challenge instructions

// Boilerplate importing and setting up
const express = require("express");
const app = express();
app.use(express.json());

// Making a route for 'localhost:3000/hello-world/'
app.get("/api/get-pi-value/", (request, response) => {
  // Send back as a response JSON data
  response.json({
    pi: 3.1415926535,
  });
});

app.get("/api/esperanto/:englishWord", (request, response) => {
  const englishWord = request.params.englishWord;

  const translations = {
    hello: "saluton",
    goodbye: "adiau",
    candy: "dolcajo",
  };

  if (englishWord in translations) {
    response.json({
      translation: translations[englishWord],
    });
  } else {
    response.json({
      error: "Unknown word",
    });
  }
});

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
});
