import React, { useState, useEffect } from 'react';
import './Blog.css';

import { Link } from 'react-router-dom'

// Get the Article component
import Article from '../../Article/Article.js';

function Blog() {

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch('/api/all')
      .then(response => response.json())
      .then(data => {
        console.log('Got data back!', data);
        this.setState({
          blogPosts: data.posts,
        });
      });
  });

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {
        blogPosts.map((post, index) => (
          <Article title={post.title} image={post.image} key={post._id}>
            <Link to={'/post/' + post._id}>Read this article...</Link>
          </Article>
        ))
      }
    </div>
  );
}

export default Blog;
