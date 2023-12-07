const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const app = express();

// Boilerplate to get JSON and logging support
app.use(express.json());
function logger(req, res, next){
  console.log(req.method, req.url);
  next();
}
app.use(logger);

/////////////////////////////////////////////
// Configuration, change as necessary
//const MONGODB_URL = 'mongodb://localhost:27017';
//const MONGODB_DATABASE = 'blog';
const MONGODB_URL = 'mongodb://kcuser:mongoerrday1@ds219432.mlab.com:19432/kcsandbox';
const MONGODB_DATABASE = 'kcsandbox';
const PORT = 8080;
/////////////////////////////////////////////




// R in CRUD
app.get('/api/all/', (request, response) => {
  // Getting data from Database
  db.collection('blogposts')
    .find({})
    .toArray((err, results) => {
      if (err) throw err;

      // Got data back.. send to client
      response.json({
        posts: results,
      });
    });
});



// R in CRUD
app.get('/api/:objectId/', (request, response) => {
  // Getting the ID from the URL
  const objectId = request.params.objectId;

  // Getting data from Database
  db.collection('blogposts')
    .find({_id: ObjectId(objectId)})
    .toArray((err, results) => {
      if (err) throw err;

      // Got data back.. send to client
      response.json({
        post: results[0],
      });
    });
});




// C in CRUD
app.post('/api/create/', (request, response) => {
  console.log(request);
  console.log(request.body);
  // Getting the data we want and putting it into a new object to insert
  // into the database
  const data = {
    title: request.body.title,
    image: request.body.image,
    content: request.body.content,
  };

  if (!data.image) {
    data.image = 'https://i.imgur.com/b6jayEW.png';
  }

  db.collection('blogposts')
    .insert(data, (err, results) => {
      if (err) throw err;

      // Send to client that we added it
      response.json({
        success: true,
        data: data,
      });
    });
});


// U in CRUD
app.put('/api/:objectId/update/', (request, response) => {
  const objectId = request.params.objectId;
  // Getting the data we want and putting it into a new object to insert
  // into the database
  const data = {
    title: request.body.title,
    image: request.body.image,
    content: request.body.content,
  };

  db.collection('blogposts')
    .update(
      {_id: ObjectId(objectId)},
      {$set: data},
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



// D in CRUD
app.delete('/api/:objectId/delete/', (request, response) => {
  const objectId = request.params.objectId;

  db.collection('blogposts')
    .deleteOne({_id: ObjectId(objectId)}, (err, results) => {
        if (err) throw err;

        // If we modified exactly 1, then it is a
        // success, otherwise it is a failure
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
MongoClient.connect(MONGODB_URL, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  })
});
