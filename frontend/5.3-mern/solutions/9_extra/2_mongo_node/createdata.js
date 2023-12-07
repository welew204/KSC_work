const MongoClient = require('mongodb').MongoClient;

const pokemon = require('./pokedex.json');
// console.log(pokemon);

// mongo ds219432.mlab.com:19432/kcsandbox -u kcuser -p mongoerrday1
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://kcuser:mongoerrday1@ds219432.mlab.com:19432/kcsandbox';
const dbName = 'kcsandbox';

// Use connect method to connect to the Server
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  // Bonus Activity 1 - Not, but it deletes the database first, so we don't
  // accidentally get duplicate Pokemon if we re-run this
  db.collection('pokemon').drop((err, r) => {

    // Insert multiple documents
    db.collection('pokemon').insertMany(pokemon, (err, r) => {
      if (err) throw err;
      console.log("successfully inserted documents", r);
      client.close();
    });
  });
});
