import React from "react";

import { connect } from "react-redux";
import { actions } from "../../../reducers/posts.js";
import Post from "../../Post/Post.js";
import BoldButton from "../../BoldButton/BoldButton.js";
import EditPostModal from "./EditPostModal.js";
import { Link, Route } from "react-router-dom";

import "./ViewSinglePost.css";
import Modal from "../../Modal/Modal.js";

function ViewSinglePost(props) {
  // Get the Post ID that was specified in the URL parameters, e.g. if we look
  // at /view/3 we need to get the post with ID 3
  const postId = Number(props.match.params.id);

  // Find will return the first item in an array that matches a certain
  // condition (the condition is determined by a function callback).
  // (and the "|| {}" specifies a default if the find is unsuccessful)
  const post = props.posts.find((post) => post.id === postId) || {};
  //console.log(post);
  function handleSubmit(newText) {
    console.log(newText);
    const action = actions.editPost({ id: postId, newText: newText });
    props.dispatch(action);

    props.history.push(`/view/${postId}/`);
  }

  function handleExit() {
    props.history.push(`/view/${postId}/`);
  }

  function deletePost(postID) {
    console.log("need to delete:", postID);
    // TODO Finish deletePost!
    const data = { id: postID };
    const action = actions.deletePost(data);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);
    props.history.push("/");
  }

  // Render the single post with the given ID
  return (
    <div className='ViewSinglePost'>
      <div className='ViewSinglePost-buttonToolbar'>
        <div className='ViewSinglePost-buttonGroup'>
          <Link to='/'>
            <BoldButton icon='back'>Back</BoldButton>
          </Link>
          <Link to={`/view/${postId}/edit`}>
            <BoldButton icon='back'>Edit</BoldButton>
          </Link>

          {/* Challenge 6 & 7 will go here ----- */}
        </div>

        <div className='ViewSinglePost-buttonGroup'>
          {/* Bonus challenge share buttons go here --------------- */}
        </div>
      </div>
      <Post
        postId={post.id}
        avatar={post.avatar}
        isBig={true}
        onDelete={deletePost}>
        {post.title}
      </Post>

      {/* Challenge 7 goes here ... */}
      <Route
        path={`/view/${postId}/edit`}
        component={() => (
          <Modal>
            <EditPostModal
              onSubmit={handleSubmit}
              onExit={handleExit}
              initialText={post.title}></EditPostModal>
          </Modal>
        )}
      />
    </div>
  );
}
{
  /* <Modal>
  <BoldInput
    label='Paste in a URL for a new avatar image'
    error={error}
    onChange={onAvatarInputChange}
    value={avatarInput}
  />
  <Link to='/avatars/'>
    <BoldButton>Cancel</BoldButton>
  </Link>
  <BoldButton onClick={createNewAvatar}>Save</BoldButton>
</Modal> */
}

// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = (state) => ({
  posts: state.posts,
});
export default connect(mapStateToProps)(ViewSinglePost);
