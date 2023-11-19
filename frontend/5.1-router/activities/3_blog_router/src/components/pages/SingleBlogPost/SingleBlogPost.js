import React from 'react';
import './SingleBlogPost.css';

import { blogPosts } from '../Blog/blogposts.js';

// Get the Article component
import Article from '../../Article/Article.js';

function SingleBlogPost(props) {

  // this needs updating!
  console.log('rendering single blog post', props.match.params);
  return (
    <div className="SingleBlogPost">
      <p>Debug: params data coming in as: {props.match.params.articleId}</p>

      <Article title={"placeholder"} image={"test"}>
        <p>todo...</p>
      </Article>
    </div>
  );
}

export default SingleBlogPost;
