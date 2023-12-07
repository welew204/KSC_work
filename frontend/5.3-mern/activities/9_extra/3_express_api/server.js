// Boilerplate importing and setting up 
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());

// This boilerplate gets logging of requests visible on the terminal
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);


/////////////////////////////////////////////
// Configuration
// (You will need to change this if you are using M Labs)
const MONGODB_URL = 'mongodb://localhost:27017';
const MONGODB_DATABASE = 'kcsandbox';
const PORT = 3000;
/////////////////////////////////////////////



/*
  Challenge #1:
  1. Get the server running:
      npm install
      node server.js
  2. Figure out how to see this {hello: "world"} JSON message in your browser
*/

app.get('/', (request, response) => {
  response.json({
    hello: "world",
  });
});




/*
  Challenge #2: (R in CRUD)
  Make the necessary modification to get the /api/all/ route returning ALL
  Pokemon in the database.

  - Hint #1: This will simply be replacing the empty array with the data coming
    back from the database

  - Hint #2: Node by default does not auto-restart when you make a change. This
    means you have to Ctrl+C and then run "node server" again every time. To
    run it with auto-restart, use "nodemon":
    - npm install -g nodemon
    - nodemon server.js      (Linux, or macOS with certain configurations)
    - npx nodemon server.js  (other macOS configurations)

*/
app.get('/api/all/', (request, response) => {
  // Getting data from Database
  db.collection('pokemon')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;

      // Got data back.. send to client
      response.json({
        results: [], // probably should change this...
      });
    });
});



/*
  Challenge #3: (R in CRUD)
  Make the necessary modification to this route to allow searching by type.
  Pokemon have different "types" based on what element they most typify.

    - Try going to /api/type/Water/ in your browser, see what happens in the
      terminal. What information does this tell you about request.params? About
      request.params.typename?
    - Try going to another URL, such as /api/type/Fire/ in your browser, see
      what happens in the terminal, to see if it confirms your theory.
    - Using this information, combine with code from the previous activities to
      create something searches for Pokemon by type.
*/
app.get('/api/type/:typename/', (request, response) => {
  // Getting the type from the URL
  console.log('got request', request.params);
  const type = request.params.typename;
  console.log('the request mentioned this type:', type);

  response.json({
    typeRequested: type,
  });

});








/*
  Challenge #4:
  Now for the C in the CRUD API. This will be creating a new API path
  ("endpoint") that will create brand new Pokemon.

  1. Read the Hints and the code, and use CURL to test the POST route.
  2. Once you understand what is happening, add a weight property so that the
  new made-up Pokemon can have a weight.

  Hint #1: You can't test POST routes just using your browser. You'll have to
  either install a tool such as Postman or Insomnia, or use the command-line
  tool curl (see next hint).

  Hint #2: To use cURL to test this, try the following (very long) command in a
  new terminal:

    curl -X POST  -H "Content-Type: application/json" --data '{"name": "Bulbersour"}' http://localhost:3000/api/add/

  The upside of curl is its available everywhere and quick to use, the downside
  is the command ends up being very long and very tedious to edit on the
  command-line, so consider editing it in your text editor where you have more
  control, then pasting it into a terminal.
*/
app.post('/api/add/', (request, response) => {

  // Getting the data we want and putting it into a new object to insert into
  // the database
  const data = {
    name: request.body.name,
  };

  db.collection('pokemon')
    .insert(data, (err, results) => {
      if (err) throw err;

      // Send to client that we added it
      response.json({
        success: true,
        data: data,
      });
    });
});


/*
  Challenge #5:
  Now for the U in the CRUD API.
  
  1. Complete the following code to add a "catch" route, that will set
  "isCaught" to be true for a Pokemon of a given name

  2. Add a new GET route that will search for all "caught" pokemon

  Hint #1: To catch the Pokemon, you'll need to use the following syntax
    curl -X PUT http://localhost:3000/api/catch/Pikachu/
*/
app.put('/api/catch/:pokemonName/', (request, response) => {
  console.log('got request', request.params);

  response.json({
    challenge5: "not done...."
  });
});







/*
  Challenge #6:
  Combine what you've learned so-far to implement a DELETE route.

  Hint: You're on your own here! Combine previous code to make a Delete
  endpoint that will delete a given Pokemon when you visit it.
*/
app.delete('REPLACE ME WITH SOMETHING' (request, response) => {
  // ...and do something here...

});






// Some boilerplate here, don't worry too much about this.
// 1. Connect to the MongoDB
// 2. Start the server
let db;

MongoClient.connect(MONGODB_URL, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  })
});
