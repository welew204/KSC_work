const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());

/////////////////////////////////////////////
// Configuration, change as necessary
const MONGODB_URL = 'mongodb://kcuser:mongoerrday1@ds219432.mlab.com:19432/kcsandbox';
const MONGODB_DATABASE = 'kcsandbox';
const PORT = 3000;
/////////////////////////////////////////////



/* Challenge #1 */

app.get('/', (request, response) => {
  response.json({
    hello: "world",
  });
});




/* Challenge #2: (R in CRUD) */
app.get('/api/all/', (request, response) => {
  // Getting data from Database
  db.collection('pokemon')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;

      // Got data back.. send to client
      response.json({
        results: results,
      });
    });
});



/* Challenge #3: (R in CRUD) */
app.get('/api/type/:typename/', (request, response) => {
  // Getting the type from the URL
  const type = request.params.typename;
  console.log('the request mentioned this type:', type);

  // Getting data from Database
  db.collection('pokemon')
    .find({type: type})
    .toArray((err, results) => {
      if (err) throw err;

      // Got data back.. send to client
      response.json({
        results: results,
      });
    });

});








/* Challenge #4 */
app.post('/api/add/', (request, response) => {
  console.log(request.body);
  // Getting the data we want and putting it into a new object to insert
  // into the database
  const data = {
    name: request.body.name,
    weight: request.body.weight,
    height: request.body.height,
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


/* Challenge #5 */
app.put('/api/catch/:pokemonName/', (request, response) => {
  const pokemonName = request.params.pokemonName;

  db.collection('pokemon')
    .update(
      {name: pokemonName},
      {$set: {isCaught: true}},
      (err, results) => {
        if (err) throw err;

        // If we modified exactly 1, then it is a success, otherwise it is
        // a failure
        if (results.result.nModified === 1) {
          response.json({
            success: true,
          });
        } else {
          response.json({
            success: false,
          });
        }
      });

});

app.get('/api/caught/', (request, response) => {
  // Get all pokemon who were caught
  db.collection('pokemon')
    .find({isCaught: true})
    .toArray((err, results) => {
      if (err) throw err;

      // Got data back.. send to client
      response.json({
        results: results,
      });
    });
});





/*
  Challenge #6:
  Use what you've learned to implement a DELETE route.
*/
app.delete('/api/delete/:pokemonName/', (request, response) => {
  const pokemonName = request.params.pokemonName;

  db.collection('pokemon')
    .deleteOne({name: pokemonName}, (err, results) => {
        // If we modified exactly 1, then it is a success, otherwise it is a
        // failure
        console.log('results', results.result);
        if (results.result.n === 1) {
          response.json({
            success: true,
          });
        } else {
          response.json({
            success: false,
          });
        }
    })
});






// Some boilerplate here, don't worry too much about this.
// 1. Connect to the MongoDB
// 2. Start the server
let db;
function logger(req, res, next) {
  console.log(new Date(), req.method, req.url);
  next();
}
app.use(logger);
MongoClient.connect(MONGODB_URL, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  })
});
