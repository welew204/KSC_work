Your goal in this activity is to get to understand an Express API server that
serves as a "thin wrapper" around a MongoDB. Keep in mind throughout it that
you are interacting with Express which then in turn interacts with MongoDB, but
not interacting with MongoDB directly.

This activity, along with the next few activities, are focused on understanding
the code that goes into a full-stack MERN project. This means we gradually
build up the MERN Prototyping Starter project, and finally the "Cash Flow" app,
a sophisticated budgeting application that is an example project based on the
MERN project starter. For this particular activity, note that there is no
solution, since it's about code comprehension and getting familiar with tools
around APIs.



Challenge #1:
----------------------

1. Edit the `MONGODB_URL` variable on line 11 to point to the MongoDB
information for your account. Hint: See the file
`hint_finding_your_mongodb_url.md` for more hints on this.

2. Get the server running:

    npm install
    node server.js


Challenge #2: Code Comprehension
----------------------------------

1. The code consists of 4 CRUD routes, followed by boilerplate at the bottom.
Read through it (skipping the boilerplate). Can you explain in plain English
the "big picture" of what each of the 4 CRUD routes do with respect to MongoDB?

2. How would you go about using the 4 CRUD routes?

3. Try accessing the GET routes (Read of CRUD). If the Express.js is pointed at
the DB that you used for the first activity, then you can access the OS Mascots
at the following URL in your browser:

    http://localhost:3000/api/mongodb/osmascots/


Challenge #3: Installing Insomnia
----------------------------------

Background: Only the GET route is available using your browser without any
extensions, since by default GET is the only of the HTTP methods available
(POST, PUT, and DELETE require more tools). In order to simulate POST, PUT, and
DELETE requests, we'll have to use a special tool. It's important to be able to
simulate these requests, since it's an essential step when debugging API-based
applications. For example, we often need these tools to answer the age-old
question: "Is it my React JS code, or is it the API that's broken?"


For this challenge, you will have to pick and install an API testing tool to
use. Which one is up to you: Either a GUI tool (ARC, Postman, or Insomnia) or a
CLI tool (cURL). The most popular are probably Postman and Insomnia, but
despite being mostly free and open source, they can be overly pushy with
marketing and be "overkill" in terms of features. Because Postman and Insomnia
can be "overkill", we now recommend Advanced REST Client, or ARC, which is much
simpler and less "pushy" in terms of marketing. Finally, if you prefer CLI to
GUI, another option is to use cURL, which is a powerful CLI equivalent for
testing APIs, and it typically comes preinstalled with Bash or ZSH, so you
probably already have it.

- Learn more about Advanced REST Client and install it here:
    - <https://install.advancedrestclient.com/install>

- Learn more about and install Postman from <https://www.postman.com/>, or try
  out the similar (and also free, with sign-up) competitor called Insomnia:
  <https://insomnia.rest/>

- Learn about how to use the CLI cURL tool to test APIs from one of the
  following blog posts and tutorials:
    - <https://www.baeldung.com/curl-rest>
    - <https://linuxize.com/post/curl-rest-api/>
    - <https://www.codepedia.org/ama/how-to-test-a-rest-api-from-command-line-with-curl/>
    - Comparison between cURL and Postman:
        - <https://svitla.com/blog/testing-rest-api-with-postman-and-curl>



Challenge #4: Testing all 4 CRUD routes
----------------------------------------

Once you have a REST client installed, you'll want to use it to test the CRUD
routes.

1. Create - POST - Can you use the "Body" of the request in "JSON mode" to add
new documents to a collection in your MongoDB database?

2. Read - GET - Can you use the GET query parameters of the URL "filter" what
results you are getting back from the database? Those are the things that go at
the end of a URL in the format of variable=value, followed by a "?".

Hint: Try a URL that looks like

    http://localhost:3000/api/mongodb/osmascots/?type=penguin

3. Update - PUT - Can you combine the use of the GET query parameters from the
previous challenge, and also use the "body" of the request in "JSON mode" like
in Create, in order to to add new documents to the MongoDB database?



Bonus Challenge
----------------------------------------

Try your hand at creating your own CRUD routes, that are more limited or
"secure" in what they do.  This generally just involves "hardcoding" the
collection name, and doing checks against the data being inserted.

