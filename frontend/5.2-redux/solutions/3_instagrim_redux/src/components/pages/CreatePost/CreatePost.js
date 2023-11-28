import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../reducers/posts.js';

import {chooseRandom} from '../../../miscutils.js';

import './CreatePost.css';
function CreatePost(props) {
  const [postText, setPostText] = useState('');
  const [error, setError] = useState('');

  function changePostText(ev) {
    setPostText(ev.target.value);
  }

  function createPost() {
    if (!postText) {
      setError('Enter text before hitting Post');
      return;
    }

    // ...
    // Challenge Solution: Adding avatar from
    const randomAvatar = chooseRandom(props.avatars);
    /// ...

    const data = {
      title: postText,

      // Challenge Solution: Add the avatar to the payload
      avatarSrc: randomAvatar.imageSrc,
    };

    const action = actions.createPost(data);

    // Dispatch comes from "react-redux" to kick off actions
    props.dispatch(action);

    // Redirect (fake react-router redirect, that is) back to the "homepage"
    props.history.push('/');
  }

  return (
    <div className="CreatePost">
      <h1>Make a new spooky post</h1>
      {error ? <p>{error}</p> : null}
      <input
        className="CreatePost-input"
        placeholder="Type a spooky message to post..."
        value={postText}
        onChange={changePostText}
      />
      <button className="CreatePost-button" onClick={createPost}>
        POST
      </button>
    </div>
  );
}

// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = state => ({
  avatars: state.avatars,
});
export default connect(mapStateToProps)(CreatePost);
