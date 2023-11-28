import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import Post from '../../Post/Post.js';
import BoldButton from '../../BoldButton/BoldButton.js';

// Bonus Solution: Bring in actions from the "posts" state slice
import { Route } from 'react-router-dom'
import { actions } from '../../../reducers/posts.js';
import EditPostModal from './EditPostModal.js';
import Modal from '../../Modal/Modal.js';

// Bonus solution
// From: https://www.npmjs.com/package/react-share
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TumblrShareButton,
  TwitterShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TumblrIcon,
  TwitterIcon,
} from "react-share";

import './ViewSinglePost.css';

function ViewSinglePost(props) {

  // Challenge 6 Solution: Add delete feature
  function deletePost() {
    const postId = Number(props.match.params.id);
    const action = actions.deletePost({id: postId});
    props.dispatch(action);
    props.history.push('/');
  }

  // Challenge 7 Solution: Add edit modal feature
  function onEditSave(newTitle) {
    const postId = Number(props.match.params.id);
    const action = actions.updatePost({
      id: postId,
      newTitle: newTitle,
    });
    props.dispatch(action);
    closeEditModal(); // close the modal when done
  }

  // Challenge 7 Solution: Add edit modal feature
  function closeEditModal() {
    // Redirect to this page
    const postId = props.match.params.id;
    props.history.push('/view/' + postId + '/');
  }


  // Get the Post ID that was specified in the URL parameters, e.g. if we
  // look at /view/3 we need to get the post with ID 3
  const postId = Number(props.match.params.id);

  // Find will return the first item in an array that matches a certain
  // condition (the condition is determined by a function callback).
  const post = props.posts.find(post => post.id === postId) || {};

  // Get the current URL to use for the share buttons
  const shareUrl = window.location.href;
  const mediaUrl = post.avatar; // Used by Pinterest
  const shareIconSize = 50;

  // Render the single post with the given ID
  return (
    <div className="ViewSinglePost">
      <div className="ViewSinglePost-buttonToolbar">
        <div className="ViewSinglePost-buttonGroup">
          <Link to="/"><BoldButton icon="back">Back</BoldButton></Link>

          {/* Challenge 6 & 7 Solutions ----- */}
          <BoldButton icon="delete" onClick={deletePost}>
              Delete
          </BoldButton>
          <Link to={`/view/${post.id}/edit/`}>
            <BoldButton icon="edit">
                Edit
            </BoldButton>
          </Link>
          {/* ------------------------------- */}

        </div>

        <div className="ViewSinglePost-buttonGroup">
          {/* Bonus solutions --------------- */}
          <EmailShareButton url={shareUrl}>
            <EmailIcon size={shareIconSize} />
          </EmailShareButton >

          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={shareIconSize} />
          </FacebookShareButton>

          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={shareIconSize} />
          </LinkedinShareButton>

          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={shareIconSize} />
          </TwitterShareButton >

          <PinterestShareButton url={shareUrl} media={mediaUrl}>
            <PinterestIcon size={shareIconSize} />
          </PinterestShareButton >

          <TumblrShareButton url={shareUrl}>
            <TumblrIcon size={shareIconSize} />
          </TumblrShareButton >

          <RedditShareButton url={shareUrl}>
            <RedditIcon size={shareIconSize} />
          </RedditShareButton >
          {/* ------------------------------- */}

        </div>
      </div>
      <Post postId={post.id} avatar={post.avatar} isBig={true}>
        {post.title}
      </Post>

      {/*
          Challenge 7 Solution: Adding an edit modal
        */}
      <Route
        path={`/view/${post.id}/edit/`}
        component={() => (
          <Modal>
            <EditPostModal
              initialText={post.title}
              onSubmit={onEditSave}
              onExit={closeEditModal}
            />
          </Modal>
        )}
      />
      {/* ------------------------------- */}
    </div>
  );
}


// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = state => ({
  posts: state.posts,
});
export default connect(mapStateToProps)(ViewSinglePost);
