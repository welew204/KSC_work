import React, { useState } from "react";
import { connect } from "react-redux";
import { actions } from "../../../reducers/posts.js";
import { chooseRandom } from "../../../miscutils.js";

import "./CreatePost.css";
function CreatePost(props) {
  const [postText, setPostText] = useState("");
  const [error, setError] = useState("");

  function changePostText(ev) {
    setPostText(ev.target.value);
  }

  function createPost() {
    if (!postText) {
      setError("Enter text before hitting Post");
      return;
    }

    // HINT: Changes will need to be made for Challenge 5.
    const avatar = chooseRandom(props.avatars);
    const data = {
      title: postText,
      avatar: avatar,
    };

    const action = actions.createPost(data);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);

    // Redirect (fake react-router redirect, that is) back to the "homepage"
    props.history.push("/");
  }

  return (
    <div className='CreatePost'>
      <h1>Make a new spooky post</h1>
      {error ? <p>{error}</p> : null}
      <input
        className='CreatePost-input'
        placeholder='Type a spooky message to post...'
        value={postText}
        onChange={changePostText}
      />
      <button className='CreatePost-button' onClick={createPost}>
        POST
      </button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  avatars: state.avatars,
});

export default connect(mapStateToProps)(CreatePost);
