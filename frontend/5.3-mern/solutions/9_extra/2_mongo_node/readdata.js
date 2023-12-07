const MongoClient = require('mongodb').MongoClient;

// mongo ds219432.mlab.com:19432/kcsandbox -u kcuser -p mongoerrday1
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://kcuser:mongoerrday1@ds219432.mlab.com:19432/kcsandbox';
const dbName = 'kcsandbox';
let db;

// Use connect method to connect to the Server
MongoClient.connect(url, (err, client) => {
  if (err) throw err;
  console.log("Connected correctly to server");

  db = client.db(dbName);


  /* Challenge #4 */
  db.collection('pokemon')
    .find({name: "Pikachu"})
    .toArray((err, results) => {
      if (err) throw err;
      console.log("Found Pikachu:", results);
    });



  /* Challenge #5 */
  db.collection('pokemon')
    .find({type: "Water"})
    .toArray((err, results) => {
      if (err) throw err;
      console.log("--------------------------------");
      console.log("Water type pokemon:",
        results.map(pokemon => pokemon.name).join(', '));
      console.log("--------------------------------");
    });


  /* Challenge #6 */
  db.collection('pokemon')
    .find({weaknesses: {$all: ["Electric", "Psychic"]}})
    .toArray((err, results) => {
      if (err) throw err;
      console.log("--------------------------------");
      console.log("Electric and Psychic is good against:",
        results.map(pokemon => pokemon.name).join(', '));
      console.log("--------------------------------");
    });


  /* Challenge #7 */
  db.collection('pokemon')
    .update(
      {egg: {$ne: "Not in Eggs"}},
      {$set: {inEgg: true}},
      {multi: true},
      (err, res) => {
        if (err) throw err;
        console.log('(C4) Number updated:', res.result.nModified);

        // Now we look for pokemon that are presently in an egg
        db.collection('pokemon')
          .find({inEgg: true})
          .toArray((err, results) => {
            if (err) throw err;
            console.log("--------------------------------");
            console.log("in egg:",
              results.map(pokemon => pokemon.name).join(', '));
            console.log("--------------------------------");
          });
      });

  /* Advanced Challenge: */
  db.collection('pokemon')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      transformWeightIntoNumber(db, results);
    });
});


/* Advanced Bonus challenge: */
function transformWeightIntoNumber(db, results) {
  let count = 0;
  function checkIfDone() {
    count++;
    if (count >= results.length) {
      getAverages();
    }
  }

  for (const pokemon of results) {
    // Get rid of the " kg" at the end
    const weightStr = pokemon.weight && pokemon.weight.split(' ')[0];

    // Now we convert into a real number
    const weight = Number(weightStr);

    // And update each item in the database
    if (weight && weight !== NaN) {
      // Update pokemon with new weightInKilos
      db.collection('pokemon')
        .update(
          {id: pokemon.id},
          {$set: {weightInKilos: weight}},
          checkIfDone
        );
    } else {
      checkIfDone();
    }
    pokemon.weightInKilo = Number(weight);
  }
}

function getAverages() {

  // Get average egg aggregated by egg status
  db.collection('pokemon').aggregate([
    {
      $group: {
        _id: "$inEgg",
        avgWeight: { $avg: "$weightInKilos" }
      },
    }
  ])
  .toArray((err, results) => {
    console.log('----------------------');
    for (const result of results) {
      if (result._id === null) {
        console.log('NonEggable avg weight:', result.avgWeight);
      } else {
        console.log('Eggable avg weight:', result.avgWeight);
      }
    }
    console.log('----------------------');
  });

  // Get average egg aggregated by type -- this is a 2 step aggregation
  // pipeline
  db.collection('pokemon').aggregate([
    // First "unwind" the type property, this "flattens" arrays and duplicates
    // documents for each of the different types, allowing Pokemon to count for
    // multiple types
    { $unwind: "$type" },

    // Then aggregate as before
    {
      $group: {
        _id: "$type",
        avgWeight: { $avg: "$weightInKilos" }
      },
    },
  ])
  .toArray((err, results) => {
    console.log('--- AVERAGE WEIGHT BY TYPE ---');
    for (const result of results) {
      console.log(result._id, '    ', Math.round(result.avgWeight), 'kg');
    }
    console.log('---------------------------');
  });

}
