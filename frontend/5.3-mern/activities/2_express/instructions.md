In this challenge, we will be using express to build some simple APIs.

Since they are "read-only", we will only be using GET requests to test them, so
we can test them using Chrome(ium) or Firefox.

Challenge #1: Code comprehension
-------------------

1. Get the server running:

    npm install
    node server.js

2. Can you understand what the code is doing? Don't worry too much about the
boilerplate at the bottom.

3. Figure out how to see this {hello: "world"} JSON message in your browser

Challenge #2: Creating your own GET route
-------------------

Use the /hello-world/ route as an example, it's time to make your own route.

1. Create a new get route at '/api/get-pi-value/'

2. Have it respond with the following JSON data:

    {
      "pi": 3.1415926535,
    }

Hint: Node by default does not auto-restart when you make a change. This
means you have to Ctrl+C and then run "node server" again every time. To
have "auto-restart" available, use "node monitor" (nodemon):

    npx nodemon server.js



Challenge #3: Translation API
-------------------

The next API endpoint we will make will be an Esperanto translation API.

Just worry about the following three words:

    English to Esperanto translations:
      hello     is   saluton
      goodbye   is   adiau
      candy     is   dolcajo


Hint: Use the following code to get going:

    app.get('/api/esperanto/:englishWord', (request, response) => {
      const englishWord = request.params.englishWord;

      if (englishWord === 'hello') {
        response.json({
          translation: 'saluton',
        });
      } else {
        response.json({
          error: 'Unknown word',
        });
      }
    });

What do you think the "englishWord" part of this is doing?


Challenge #4: Calculator API
-------------------

Let's build a calculator API. Some starter code is given for you. Can you get
it working? Do you understand what it is doing?

    app.get('/api/calculator/add/:firstNum/:secondNum', (request, response) => {
      const a = request.params.firstNum;
      const b = request.params.secondNum;
      const aNum = Number(a);
      const bNum = Number(b);
      const c = aNum + bNum;
      response.json({
        result: c,
      });
    });

Use this as a pattern to add routes for "subtract" and "multiply"


Bonus Challenge: Average Temperature API
-------------------------------------

Look inside this weeks "data/" directory. Can you build an API in server.js
that will respond with the temperature information of a given year?


Hint: To access the data in the server.js file:

    const tempData = require('./data/us_temp_yearly.json');


Advanced Bonus Challenge:
-------------------------------------

Create a "random GIF" API, based on the giphy-random Node.js package. You'll
need to NPM install this separately.


Hint #1: Try searching npmjs.com for "giphy-random". Version 2 changed a lot
compared to 1.0.5, you might prefer the older version.
Hint #2: Use "dc6zaTOxFJmzC" for the API Key.
Hint #3: This is tricky, so we have some example code below to get you going.

    giphyRandom.get()
        .then(data => {
            response.json({
                url: data.images.original.url,
            });
        })

