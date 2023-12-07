/*

Challenge #1:
  1. Get this application saying "Connected correctly to server":
    * You'll need to do a npm install to get mongodb
    * You may need to modify the URL variable below to match one you received
      if you are using Atlas, or if your local MongoDB server is different
  2. Uncomment the console.log and requiring of the pokedex.json -- can you
  understand what this is doing?

Challenge #2:
  1. Modify this script to insert all the pokemon into the database
  2. Confirm all the pokemon have been inserted using a "mongo" prompt --
  there should be 151 Pokemon, if done correctly.


Challenge #3... and beyond:
  When you are done, go on to "readdata.js" for the remaining challenges.
  
*/


const MongoClient = require('mongodb').MongoClient;

// Probably want to uncomment this...
// const pokemon = require('./pokedex.json');
// console.log(pokemon);


const url = 'mongodb://localhost:27017';
const dbName = 'kcsandbox';

// Use connect method to connect to the Server
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  // insertMany inserts data contained in an array.
  /*
  db.collection('pokemon').insertMany(... an array of data goes here ..., (err, r) => {
    if (err) throw err;
    console.log("successfully inserted documents", r);
    client.close();
  });
  */

});
