const http = require('http');

const messages = [
  "<Cthon98> hey, if you type in your pw, it will show as stars",
  "<Cthon98> ********* see!",
  "<AzureDiamond> hunter2",
  "<AzureDiamond> doesnt look like stars to me",
  "<Cthon98> <AzureDiamond> *******",
];

const stars = [
];

const server = http.createServer();

function handleGetMessages(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(messages));
    response.end();
}

function handlePostMessage(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});

    // This is what is required to read data that was sent from
    // the client
    let requestBody = '';
    request
      .on('data', (data) => requestBody += data.toString())
      .on('end', () => {

        // The data has been fully read at this point, let's store it somewhere
        messages.push(requestBody);
        response.write(JSON.stringify(messages));
        response.end();
      });
}


function handleGetStars(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify(stars));
    response.end();
}

function handlePostToggleStar(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});

    // Get the star index number from the URL
    const url = request.url.replace(/\/$/, '');
    const urlParts = url.split('/');
    const indexOfMessage = Number(urlParts[urlParts.length - 1]);

    // Check if the stars array is listing this message as starred
    if (stars.includes(indexOfMessage)) {
      // Presently starred, remove from array
      stars.splice(stars.indexOf(indexOfMessage), 1);

    } else {
      // Not presently starred, add to array
      stars.push(indexOfMessage);
    }

    response.write(JSON.stringify(stars));
    response.end();
}



function handle404(request, response) {
    response.writeHead(404, {'Content-Type': 'application/json'});
    response.write('{"error": "404"}');
    response.end();
}


function handleRequest(request, response, url) {
  if (url === '/get-messages/') {
    handleGetMessages(request, response);
  } else if (url === '/send-message/') {
    handlePostMessage(request, response);
  } else if (url.startsWith('/toggle-star/')) {
    handlePostToggleStar(request, response);
  } else if (url === '/get-stars/') {
    handleGetStars(request, response);
  } else {
    handle404(request, response);
  }
}

server.on('request', (request, response) => {
  const { method, url }  = request;
  console.log(method, url);

  // this adds a 1 second delay to all requests, to simulate slow connection
  setTimeout(() => {
    handleRequest(request, response, url);
  }, 1000);
});

server.listen(3001, () => {
  console.log('Backend server listening on http://localhost:3001/');
});

