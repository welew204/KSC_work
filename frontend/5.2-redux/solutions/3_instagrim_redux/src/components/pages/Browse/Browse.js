import React from 'react';
import Post from '../../Post/Post.js';
import { connect } from 'react-redux';

import './Browse.css';

function Browse(props) {
  return (
    <div className="Browse">
      {
        props.posts.map(post => (
          <Post postId={post.id} avatar={post.avatar} key={post.id}>
            {post.title}
          </Post>
        ))
      }
    </div>
  );
}

// "mapStateToProps" is boilerplate for react-redux that exposes a Redux state
// slice in our react component as a prop
const mapStateToProps = state => ({
  posts: state.posts,
});
export default connect(mapStateToProps)(Browse);
