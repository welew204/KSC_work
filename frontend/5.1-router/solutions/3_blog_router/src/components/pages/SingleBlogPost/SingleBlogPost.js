
import React from 'react';
import './SingleBlogPost.css';

import { blogPosts } from '../Blog/blogposts.js';

// Get the Article component
import Article from '../../Article/Article.js';

function SingleBlogPost(props) {

  const post = blogPosts[props.match.params.articleId];
  return (
    <div className="SingleBlogPost">
      <h1>About: {post.title}</h1>
      <Article title={post.title} image={post.image}>
        {
          post.content.map((text, index) => (
            <p key={index}>{text}</p>
          ))
        }
      </Article>

      <hr />
      <p>Gallery:</p>
      <img src={post.image} alt="allergen" />
    </div>
  );
}

export default SingleBlogPost;
