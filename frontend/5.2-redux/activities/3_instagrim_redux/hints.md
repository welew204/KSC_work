
Challenge 1: Hints
-------------------------------------------------------------------

Code comprehension: See if you can understand how this app fits together.
Answer the following questions it in your own words by examining the code:

1. Hint: Only one is in use and has any data, at the moment --- finishing the
other will be done in challenges.
2. Hint: See src/index.js
3. Hint: The utility functions are located in & exported from "src/miscutils.js"
4. HINT: Notice how you can open up the "ADD" modal while in the
AvatarManagement page. Also notice how that changes the URL to show a new
location, such that if you hit refresh the modal will still be there.
    - Hint: The "Route" in AvatarManagement create a sort of "subpage" that is
      accessible at /avatars/add/
    - Hint: Remember, "Route" is just a fancy if-statement, that only displays the
      content given if the path matches what you give it



Challenge 2: Hints
-------------------------------------------------------------------

Hint: The code you'll need to modify will be in the reducers/avatars.js file.

- If completed correctly, you'll see 9 spooky avatar images when visiting the
  /avatars/ page.

- The code for the initial state of 9 avatar images is already written for you
  in the `example_code.js` file, just copy that over to reducers/avatars.js.
  This will work well as the initial or default value for the avatar store, and
  will save you a lot of typing!

- HINT: The 'initialState' property is where you want to copy it to.



Challenge 3: Hints
-------------------------------------------------------------------

Hint #1: The code you'll need to add will be in the reducers/avatars.js file.

Hint #2: Use the "createPost" reducer from reducers/posts.js as an example.



Challenge 4: HINTS
-------------------------------------------------------------------

- Hint #1: The code you'll need to modify will be in the
  src/components/pages/AvatarManagement/AvatarManagement.js file.

- Hint #2: Use the CreatePost component as an example.



Challenge 5: HINTS
-------------------------------------------------------------------

1. You'll need to add a new field to the "action payload" that specifies what
avatar image URL to use.  Consider initially just hardcoding it. (This is done
in CreatePost)

2. You'll need to remove the "random" choice code that's currently in the
createPost reducer, and replace it with code that uses this new field

3. You'll have to add code to connect the CreatePost Page to the "avatars"
Redux Store to gain access to the avatars array

4. Finally, add new "random choice" code that was previously in the reducer to
now be in the CreatePost page.



Challenge 6: HINTS
-------------------------------------------------------------------

Hint: For a hint on how to delete an element from an Array, feel free to check
out previous activities, or google for the solution. Or, you can use the
following snippet as a hint for a more "clever" solution:

      const i = state.findIndex(avatar => avatar.id === SOMETHING_GOES_HERE);
      state.splice(i, 1);



Challenge 7: HINTS
-------------------------------------------------------------------

- In the ViewSinglePost page, there should be a "Delete" button button that
  deletes this post

- You'll need to create a brand new reducer in reducers/posts.js for deleting
  posts. Use the previous reducer as an example.

- You'll need to create a brand new function that this delete button invokes.
  Use the previous delete function as an example.

- This delete function should in turn create and dispatch an action that will
  cause the post to be deleted. Consider using the previous delete function as
  an example.



Challenge 8: HINTS
-------------------------------------------------------------------

- Hint #1: The solution might involve code that looks a bit like this:

    <EditPostModal
        initialText={post.title}
        onSubmit={this.onEditSave}
        onExit={this.closeEditModal}
    />


- Hint #2: You'll have to make from scratch the closeEditModal and the
  onEditSave functions on the ViewSinglePost page. Possibly start with
  onEditSave, which will need to actually dispatch a relevant action. Examine
  the EditPostModal source code for hints on how you might want to proceed with
  these functions.

- Hint #3: To make it show in a Modal via a Route as is suggested above,
  consider the following code snippet:

    <Route
        path={`/view/${post.id}/edit/`}
        component={() => (
            <Modal>..modal contents...</Modal>
        )}
    />
