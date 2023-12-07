// Boilerplate importing and setting up 
const express = require('express');
const app = express();
app.use(express.json());

// This boilerplate gets logging of requests visible on the terminal
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

// How we define a route that sends back JSON data
app.get('/', (request, response) => {
  response.json({
    hello: "world",
  });
});



// Then, we tell Express to actually "do it's magic" and get the server running
// on port 8080. When the server is all set up and running, it will call the
// callback, which reports back to the user that the server is ready and which
// port it will be listening on
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
})


