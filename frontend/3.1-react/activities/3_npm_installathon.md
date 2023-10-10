In this activity, you will get practice using NPM by downloading a series of
various NPM packages.

As with other activities in this module, the goal is breadth.


Challenge #1
-------------------------

Create a new JavaScript project using NPM.

1. Make a directory for this project. For example:

        mkdir npm-installathon

2. CD into the new directory:

        cd npm-installathon

3. Initialize a new JavaScript project with npm init:

        npm init

This will ask you a bunch of questions. The answer to all of them is typically
just the default, so just keep on hitting "Enter" and you'll be good to go.
Ready for your NPM install marathon?




Challenge #2
-------------------------

1. In your text editor, create a new file. You may want to call it "main.js"

2. Go to http://npmjs.com and look up "weather-js"

3. Copy and paste the example code you see into your file.

4. Install weather-js, with a command like:

        npm install weather-js

5. Run your code with: (assuming you called your file main.js)

        node main.js

Hint: You will also need to install NPM.



Challenge #3
-------------------------

Modify the previous (example) code to accomplish the following task:

1. Make it show the weather for Oakland, California

2. Make it show the current temperature in Celsius

HINT: Try result[0].current.temperature



Challenge #4
-------------------------

Gif time! Follow similar steps to the previous challenge to download and
install packages to show a URL to a random GIF from Giphy.

- Hint #1: Try searching npmjs.com for "giphy-random".
- Hint #2: Use our (secret) shared key "dc6zaTOxFJmzC" for the API Key.
- Hint #3: Read the documentation closely, since they require you to install 2
  things with NPM.
- Hint #4: To access the URL of a gif, use the following code:
  data.images.original.url




Challenge #5
-------------------------

Express is the by far the most popular web server in Node.js. It takes a
similar place to Django, Flask, Rails, or Sinatra, with one huge difference: It
is lightweight and minimalist and only handles request routing, thus offering
no services for databases, templating, etc.

- Following similar steps to the previous activities, can you look up
  Express.js and get their Hello World app working?

- res.send is a little like "console.log" except it sends it to the browser via
  the response. Try modifying it to send a some HTML code back.



Bonus Challenges
-------------------------

Combine all your challenges! Turn your web server into one that has several
routes, responding with different messages from different APIs.

1. Create a page that shows weather information in your home town
2. Create a page that shows an image of a random GIF from Giphy that is
randomly selected each time you hit refresh
    - Extra Bonus: Can you figure out how to add frontend JavaScript to this
      new page that will cause it to refresh every 5 seconds, getting a new
      GIF?
3. For the home page, respond with links to the other two pages

- Hint: Consider using backtick "template literals" for templating the data
  into the HTML responses you are sending back.
- Hint: Make sure the "res.send" occurs AFTER the other code runs. You will
  have to put the "res.send"s into the "callbacks". The correct answer will
  have several levels of indentation.

