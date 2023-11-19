import React from 'react';
import './Blog.css';
import { blogPosts } from './blogposts.js';

import { Link } from 'react-router-dom'

// Get the Article component
import Article from '../../Article/Article.js';

function Blog() {

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {
        blogPosts.map((post, index) => (
          <Article title={post.title} image={post.image} key={index}>
            {
              post.content.map((text, index) => (
                <p key={index}>{text}</p>
              ))
            }
            <Link to={'/post/' + post.id}>Read more...</Link>
          </Article>
        ))
      }
    </div>
  );
}

export default Blog;
