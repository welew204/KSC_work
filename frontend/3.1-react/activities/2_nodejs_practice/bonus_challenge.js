// NOTE: Start with "challenges.js"

/*
-- Bonus Challenge --------------------------

Node comes with an HTTP server built-in. Use the following example code to see
if you can build a simple multi-page website using it.

- First step is get this example code running.

- You'll need to "write your own router" with if-statements checking the value
  of request.url

- Using this if-statement system, create several HTML pages that are sent back
  based on different paths. Consider using backtick "template literal" to apply
  templating to your HTML snippets (see below).

- Create links in each HTML page that link to the other ones

- Finally, for more practice, make a button on the page that will go to a
  certain route and increment a variable, keeping count
*/

const http = require('http');

function serve(request, response) {
    console.log('A request came in for:', request.url);
    response.writeHead(200, {'Content-Type': 'text/html'});

    if (request.url === '/') {
      response.write(`
          <h1>Welcome to my site</h1>
          <p><a href="/about-me/">About me</a></p>
      `);
    }
    response.end();
}

const server = http.createServer(serve);
console.log('- Starting server at http://localhost:8000/');
server.listen(8000);

