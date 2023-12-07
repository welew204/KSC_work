// Boilerplate importing and setting up 
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());

/////////////////////////////////////////////
// Configuration
// NOTE: You will need to change this to use your MongoDB Atlas Cluster
// Try this with one you did for activity 1.
const MONGODB_URL = 'mongodb://kcuser:mongoerrday1@ds219432.mlab.com:19432/kcsandbox';
const MONGODB_DATABASE = 'classactivity';
const PORT = 3000;
/////////////////////////////////////////////



// GET for getting any number of existing documents
app.get('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;

  // Get GET params
  const query = request.query || {};
  db.collection(collectionName)
    .find(query)
    .toArray((err, results) => {
      // Got data back.. send to client
      if (err) throw err;
      response.json(results);
    });
});


// POST, creating a new document
app.post('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;

  db.collection(collectionName)
    .insert(data, (err, results) => {
      if (err) throw err;

      // Got data back... send to client
      response.json({
        'success': true,
        'results': results,
      });
    });
});


// PUT, modify an existing document
app.put('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;
  const query = request.query;

  db.collection(collectionName)
    .update(query, {$set: data}, (err, results) => {
      if (err) throw err;

      // If we modified exactly 1, then success, otherwise failure
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


// DELETE, delete a single document with given criteria
app.delete('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const query = request.query;

  db.collection(collectionName)
    .deleteOne(query, (err, results) => {
      if (err) throw err;

      // If we deleted exactly 1, then success, otherwise failure
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

// This boilerplate gets logging of requests visible on the terminal
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

let db;

MongoClient.connect(MONGODB_URL, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  })
});
