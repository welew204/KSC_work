# Blog CRUD

Time to put EVERYTHING together for a full React + Python powered CRUD app!

The backend is written for you, and the core of the front-end is also written.
You need to flesh it out into a full CRUD blog.

To get this going:

    Run at top level in one terminal:
        python3 server.py
    Run in client/ in another terminal (or tab):
        npm start

Finally run the server as before:

    npm run start



Poke around a bit, try to understand what is going one. Then, one by one, add
CRUD features.



Challenge #1: Read from backend on Blog page
-------------------

Update the "Blog" page to use fetch to "READ" the blog data from the Backend.
What you need is already there, you just need to uncomment a few lines of code.
Can you understand what is going on?



Challenge #2: SingleBlogPost
-------------------

Once again, you'll need to use a fetch to READ from the backend. This code is
more incomplete. When complete, it should retrieve and show a single blog post.

Hint #1: Try visit http://localhost:8080/api/3 for a clue



Challenge #3: Write code to Create new blog posts, in Contribute
-------------------

On the Contribute page we need to implement the blog post creation form. Some
of the code is there, but not all of it. Can you figure out what it is doing
now, and how to fix it?




Challenge #4: Delete in SingleBlogPost
-------------------

Write code to Delete existing blog posts. It should be in the
SingleBlogPost page.

Hint #1: Start with a "delete" button that console.logs.

Hint #2: Sending a DELETE request to /api/3/delete/ will delete the blog post
with ID 3



Challenge #5: Redirect after
-------------------

The following code will "redirect" the browser to a new location:

        props.history.push('/blog/');

Incorporate this so that after deletions or new blog posts, it redirects back
to the blog page.



Advanced Bonus Challenges:
-------------------

* Update - Add in an update feature to Contribute, which allows modifying
  existing blog posts.

* Redirect - Research the unwieldy Redirect component on how to issue a
  redirect after changing something:

- <https://tylermcginnis.com/react-router-programmatically-navigate/>

