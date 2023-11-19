# Blog Router

Getting started is different, since "react router" is now a dependency:

- EITHER run:
  - npm install
- OR, if faster, copy a previous `node_modules`, then only run:
  - npm install react-router-dom


Finally run the server as before:

    npm run start



Challenge #1: Examining existing code
------------------------------------------------------------------

Look over how the Welcome and About pages presently work.

1. Can you explain how the "if-statements" of the previous activity were
replaced with the React Router code you are seeing?

2. Can you find where the Welcome and About page content is now residing?

3. Look at index.js. Compare it with previous index.js's. What has changed to
"activate" React Router? (This addition is part of the React router
documentation)



Challenge #2: Adding Blog page route
------------------------------------------------------------------

The Blog page component is already written for you.

1. Import the Blog page component

2. Add a new route for it, so that by visiting /blog/ you see it

HINT: You can test this route by manually going to <http://localhost:3000/blog/>



Challenge #3: Adding Blog page link
------------------------------------------------------------------

Follow the pattern you identified with the "Link" components to add new "Link"
to the new page you made in Challenge #2.




Challenge #4: Adding Contribute page
------------------------------------------------------------------

Following the same pattern as Challenge #1-#3, but start from scratch:

1. Add a page (in it's own component and directory, etc) that should contain at
least an H1 tag with the word "Contribute" (any other content is optional).
2. Add a new link to the navigation bar that causes this page to be displayed.



Challenge #5: Showing individual blog pages
------------------------------------------------------------------

Now it's time to use React Router URL parameters. URL parameters are where an
ID or a title are inserted in part of the URL instead of fixed or static text.
This feature is also core to backend frameworks like Django, Node.js express,
and Rails.

How to specify URL parameters in a route:

    <Route path="/articles/:articleId" component={SingleBlogPost} />

This would accept URLs like "/articles/123" or "/articles/some-article". The
last value can then be retrieved within the SingleBlogPost component in a
specially named prop created by React Router:

    {props.match.params.articleId}

For Challenge #5:

1. Add another route to your Blog page route that includes the SingleBlogPost
page component.

2. Make sure it works by testing it in your browser.


Challenge #6: Using match.params
------------------------------------------------------------------

Modify the SingleBlogPost code to only show a single Article, based on the
number specified.

Hint #1: It will have to use props.match.params.articleId to "get" only a
certain article

Hint #2: All the articles are available in the blogPosts. Use the "articleId"
value as the index to access the blogPosts



Challenge #7: Adding Links to each blog post
------------------------------------------------------------------

Finally, in the Blog page, add in Links to teach blog post that will take the
user to the SingleBlogPost page for that particular blog post.


Hint: Use the index as the "articleId". You may need to loop over using
indices, or add in indices.



Bonus Research Challenge: Document title
------------------------------------------------------------------

Can you research out how to use a add-on to change the page title for each
page? Some suggestions:

- <https://github.com/nfl/react-helmet>
- <https://github.com/gaearon/react-document-title>

