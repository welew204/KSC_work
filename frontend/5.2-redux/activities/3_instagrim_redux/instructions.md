# Instagrim Redux

- "Instagrim" is an application that lets you post messages (preferably spooky,
  scary ones!), alongside ghastly avatars.

- Getting started: Copy the `node_modules` from a previous Redux activity, do
  an `npm install`, before running `npm run start`



Challenge 1: Code Comprehension
-------------------------------------------------------------------

- This activity: Once you get the app running, try clicking around a little.
  Examine the BROWSE, CREATE, and (fairly empty) AVATARS pages. Try adding a
  new post from the CREATE page. Try clicking on a Post to view it larger.

- What's intentionally missing: More functionality around the "avatars", or the
  little characters that appear in the corner of each post, and the ability to
  Update and Delete the posts.

Answer the following questions it in your own words by examining the code.
Check the hints file for clues on how to solve these questions.

1. How many "reducer store slices" are there? What are their names?
2. How do the "reducer store slices" get combined?
3. How are utility functions getting imported into "src/reducers/posts.js"?
4. Open up the "ADD" modal while in the AVATARS page. Note the new URL.
    - How is this done?
    - How does the "Route" in AvatarManagement create a sort of "subpage"?



Challenge 2: Avatars store defaults
-------------------------------------------------------------------

- Create the initial or default state for the "avatars" Redux store.

- The code for the initial state of 9 avatar images is already written for you
  in the `example_code.js` file.

- Stuck? Check out hints.md



Challenge 3: createAvatar reducer
-------------------------------------------------------------------

Create a new "createAvatar" reducer in the "avatars" reducers. This reducer
should add a new avatar to the list, and will eventually be used by the ADD
modal for custom avatars.

- Stuck? Check out hints.md



Challenge 4: Dispatch createAvatar action
-------------------------------------------------------------------

Using this new "createAvatar" reducer, make it so that the create avatar modal
will actually add a new avatar to the list of avatars.

To validate this works, as soon as you create the new avatar using the ADD
dialog, you should see it appear in the list in the AVATARS page

- Stuck? Check out hints.md



Challenge 5: Random avatars
-------------------------------------------------------------------

Now, let's make it so that the avatar Redux State ("store") actually gets used
when we post new avatars, so that the new ones we add will be used when we make
posts. Make it so that it randomly chooses a avatar from the Avatars store and
not from the hard-coded list that it has now.

HINT: This will require modifications in two places:

1. Modify the CreatePost page to get a random avatar from the avatars list.
2. Modify the "posts" reducers to no longer "hard-code" the avatar, but instead
accept it from the payload of the action that was dispatched.

- This requires quite a few changes! Try solving as much as possible.
- Totally stuck? Check out hints.md



Challenge 6: Avatar deletion
-------------------------------------------------------------------

Avatar deletion: Add the ability to delete avatars from the avatar page, simply
by clicking on the X button that appears when you hover over one.

This will involve 2 steps, that can be accomplished in either order:

1. Creating a reducer that can delete an avatar based on ID

2. This will involve filling out the relevant function to dispatch an action

- Stuck? Check out hints.md



Challenge 7: Post deletion
-------------------------------------------------------------------

Let's do the same thing for Posts: Add a "delete" feature for posts, just like
you did for Avatars

This requires several steps: Creating a Delete button in ViewSinglePost that
invokes a function which in turn create and dispatch an action for a reducer,
which you'll also have to write.

- Stuck? Check out hints.md



Challenge 8: Edit post
-------------------------------------------------------------------

Now, it's time to add an "Edit post" feature.

- The contents of an Edit Post form is already written for you, in the
  following file: ./src/components/pages/ViewSinglePost/EditPostModal.js

- Ideally, you'll want use this component combined with a new "Edit Post" Link
  (and possibly "BoldButton") on the ViewSinglePostPage, and using the same
  Route technique in use for the AvatarManagement page to optionally show a
  Modal.

Note: This is a tough challenge! Try understanding all that is involved before
copying code from the hints.md




Bonus Challenges
-------------------------------------------------------------------

Check out `bonus_challenges.md`!
