// DON'T START HERE
// This activity starts with "createdata.js"

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'kcsandbox';
let db;

// Use connect method to connect to the Server
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("Connected correctly to server");

  db = client.db(dbName);


  /*
    *******************************************
    Challenge #4: Finish the code to find Pikachu.

    Hint: You'll need to use Ctrl+C to stop Node.js -- this is because the
    MongoDB connection stays open keeping Node.js running.
  */
  db.collection('pokemon')
    .find({name: "......"})
    .toArray((err, results) => {
      if (err) throw err;
      console.log("--------------------------------");
      console.log("Found Pikachu:", results);
      console.log("--------------------------------");
    });

  /*
    *******************************************
    Challenge #5:
    Using the above code as a template, write the code to find information on
    all Pokemon which have type "Water"

    Hint #1: Pokemon have different "types" based on what element they most typify.
    Hint #2: To only display Pokemon names, use the following snippet:
      results.map(pokemon => pokemon.name).join(', ')
  */





  /*
    *******************************************
    Challenge #6:
    Write the code to find information on all Pokemon which have both
    "Electric" AND "Psychic" in their "weaknesses" array.
  */





  /*
    *******************************************
    Challenge #7:
    1. Updating time!  Write the code to add a boolean value "inEgg": true to
    all Pokemon who DO NOT have the property {"egg": "Not in Eggs"}

    2. After it executes the line, write the find code to query this property
    and print out all the pokemon that have {inEgg: true}

    Hint #1: Look up "$ne" syntax
    Hint #2: Use {multi: true}
    Hint #3: You will modify about 74 documents
  */

  /* 
    Bonus challenge:
    Modify createdata.js to first "drop" the collection BEFORE it inserts the
    data. This is a handy pattern while testing, since then you never
    accidentally have duplicate Pokemon data, and if you mess up your database
    you can just re-run createdata.js to get back to where you were before.
  */

  /* 
    Advanced Bonus challenge:
    1. Write code that converts the weight of the Pokemon into a number (in
    Kilograms), instead of the string it is now.
    2. Write code to get the average weight of all Pokemon
    3. Write code to get the average weight of all Pokemon, aggregated by their
    "egg status
    4. Write code to get the average weight of all Pokemon, aggregated by their
    types
  */
});
