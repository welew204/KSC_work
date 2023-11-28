import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import Post from '../../Post/Post.js';
import BoldButton from '../../BoldButton/BoldButton.js';

import './ViewSinglePost.css';

function ViewSinglePost(props) {

  // Get the Post ID that was specified in the URL parameters, e.g. if we look
  // at /view/3 we need to get the post with ID 3
  const postId = Number(props.match.params.id);

  // Find will return the first item in an array that matches a certain
  // condition (the condition is determined by a function callback).
  // (and the "|| {}" specifies a default if the find is unsuccessful)
  const post = props.posts.find(post => post.id === postId) || {};

  // Render the single post with the given ID
  return (
    <div className="ViewSinglePost">
      <div className="ViewSinglePost-buttonToolbar">
        <div className="ViewSinglePost-buttonGroup">
          <Link to="/"><BoldButton icon="back">Back</BoldButton></Link>

          {/* Challenge 6 & 7 will go here ----- */}

        </div>

        <div className="ViewSinglePost-buttonGroup">
          {/* Bonus challenge share buttons go here --------------- */}

        </div>
      </div>
      <Post postId={post.id} avatar={post.avatar} isBig={true}>
        {post.title}
      </Post>

      {/* Challenge 7 goes here ... */}
    </div>
  );
}


// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = state => ({
  posts: state.posts,
});
export default connect(mapStateToProps)(ViewSinglePost);
