This is will be a useful example starter project for your projects. The full
version and instructions are available at:

<https://github.com/kickstartcoding/react-mern-prototyping-starter>



Challenge #1: Getting going
------------------------------

This project is nearly identical to `react-mern-prototyping-starter`. That
means to get going with it you'll have to do the same steps: 1) Create the
.env.local file, 2) install the backend, and 3) install the frontend

1. Leave the frontend React installation going in a separate terminal in the
background, since it will take the longest by far. To NPM install frontend:

        cd client
        npm install

2. Create a file called ".env.local" in this directory, that contains your
credentials. Inside the file, add something similar to the following code,
however, with everything in the quotes being the actual connection string for a
MongoDB Atlas database cluster:

        export MONGODB_URI='mongodb://USERNAME:PASSWORD@something.com:1234/DBNAME'

3. NPM install the backend:

        npm install

4. Use the included "run.sh" shell script to launch (assuming both front and
back is installed by now):

        bash run.sh

If you get connection errors, then 1) check your MONGODB URI connection string
in the .env.local file, and also 2) check that your MongoDB Atlas account
allows connections from your IP address.



Challenge #2: Adding GET
-------------------------

The rest of these challenges will be understanding where to "plug-in" different
pieces of code to get all 4 of the CRUD API routes functioning correctly.
Currently, there's no code to do a GET (Read) from the backend. The code to do
this is below:

    fetch('/api/mongodb/blogposts/')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back', data);
        setBlogPosts(data);
      });

Do you understand what the code is doing? Add it somewhere in to the client
code.



Challenge #3: Adding POST
-------------------------

Similar to before, but now we need to add a POST ("Create") fetch to the React.

    const formData = {
      title: title,
      text: content,
    };

    const fetchOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    };

    fetch('/api/mongodb/blogposts/', fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);
      });

Do you understand what the code is doing? Add it somewhere in to the client
code to get "posting" articles to work.



Challenge #4: Adding DELETE
-------------------------

Similar to before, but now we need to add a DELETE ("Delete") fetch to the
React frontend.

    // Do the DELETE, using "?_id=" to specify which document we are deleting
    const fetchOptions = { method: 'DELETE' };
    fetch('/api/mongodb/blogposts/?_id=' + documentId, fetchOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call function to refresh data
        fetchPosts();
      });


Do you understand what the code is doing? Add it somewhere in to the client
code.



Challenge #5: Adding PUT
-------------------------

Let's start work on a "voting up" feature. This will be a PUT (Update)
operation. Starting code below:

    const formData = {
      voteCount: 1,
    };

    // Do the PUT, using "?_id=" to specify which document we are affecting
    const documentId = article._id;
    fetch('/api/mongodb/blogposts/?_id=' + documentId, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Call function to refresh data
        fetchPosts();
      });



Bonus Challenge #1: Redirect after new article
-------------------------

Use React Router to make it "redirect" to the homepage after writing a new
article.

Hint:

    props.history.push('/some/path/goes/here/')



Bonus Challenge #2: Improved voting
-------------------------

Modify the logic before the fetch for "voting up" to make it actually count the
number (add 1 to the current number) instead of just setting it to 1.

