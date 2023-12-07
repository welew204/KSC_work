const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const app = express();
app.use(express.json());

// In order to keep the "diff" between this and the original server.js as small
// as possible, we just have a "whitelisting" function for a minimal level of
// security. This just "whitelists" collection name (e.g. throws an error if it
// is not cashflow), and that queries to always need hex. This is pretty much
// as secure as a free / no-login-required app could get!
const HEX_LENGTH = 7;
function getRandomHex() {
  return Math.floor(Math.random() * 16**HEX_LENGTH).toString(16);
}
function checkQuery(collectionName, query, data = null) {
  // whitelist collection name
  if (collectionName !== 'cashflow') {
    throw new Error('Collection must be "cashflow"');
  }

  if (data !== null) {
    // For the POST / create request, create it with a random hex
    data.hex = getRandomHex();
    return;
  }

  const hex = query.hex;
  if (!hex || hex.length !== 7) {
    // Check that its in an expected format
    throw new Error('hex required');
  }
  // Send back an object that only contains the hex so that there are no other
  // search parameters
  return {
    hex: hex,
  };
}


// GET for getting existing item
app.get('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;

  // Get GET params, if there are any
  const query = request.query || {};
  checkQuery(collectionName, query); // Security

  // Due to a requirement of MongoDB, whenever we query based on _id field, we
  // have to do it like this using ObjectId
  if (query._id) {
    query._id = ObjectId(query._id);
  }

  db.collection(collectionName)
    .find(query)
    .toArray((err, results) => {
      // Got data back.. send to client
      if (err) throw err;
      response.json(results);
    });
});


// POST for creating a new item
app.post('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;
  checkQuery(collectionName, null, data); // Security

  db.collection(collectionName)
    .insert(data, (err, results) => {
      // Got data back.. send to client
      if (err) throw err;

      response.json({
        'success': true,
        'results': results,
      });
    });
});


// PUT endpoint for modifying an existing item
app.put('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const data = request.body;
  const query = request.query;
  checkQuery(collectionName, query); // Security

  // Due to a requirement of MongoDB, whenever we query based on _id field, we
  // have to do it like this using ObjectId
  if (query._id) {
    query._id = ObjectId(query._id);
  }

  // MongoDB disallows _id fields from being updated, delete if it exists
  delete data._id;

  db.collection(collectionName)
    .updateOne(query, {$set: data}, (err, results) => {
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


// D in CRUD, delete a single item with given criteria
app.delete('/api/mongodb/:collectionName/', (request, response) => {
  const collectionName = request.params.collectionName;
  const query = request.query;
  checkQuery(collectionName, query); // Security

  // Due to a requirement of MongoDB, whenever we query based on _id field, we
  // have to do it like this using ObjectId
  if (query._id) {
    query._id = ObjectId(query._id);
  }

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







/////////////////////////////////////////////
// Boilerplate, no need to touch what's below

/////////////////////////////////////////////
// Logger & configuration
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);
/////////////////////////////////////////////


// For production, handle any requests that don't match the ones above
app.use(express.static(path.join(__dirname, 'client/build')));

// Wild-card, so handle everything else
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


// Set up configuration variables
if (!process.env.MONGODB_URI) {
  console.log('- Error - Must specify the following env variables:');
  console.log("MONGODB_URI='mongodb://someUser:somePW@site.com:1234/someDB'");
  console.log('- (See README.md)');
  process.exit(1);
}
const MONGODB_URL = process.env.MONGODB_URI;
const splitUrl = MONGODB_URL.split('/');
const mongoDbDatabaseName = splitUrl[splitUrl.length - 1];

let db;
// First connect to MongoDB, then start HTTP server
MongoClient.connect(MONGODB_URL, {useNewUrlParser: true}, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(mongoDbDatabaseName);

  // Start the server
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`
      *********************************************
      * Insecure prototyping backend is running!  *
      * Only use for prototyping                  *
      * Backend server up at ${PORT}              *
      *********************************************
    `);
  })
});
