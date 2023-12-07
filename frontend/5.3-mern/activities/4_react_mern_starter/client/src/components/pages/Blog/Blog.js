import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  function fetchPosts() {
    console.log('TODO: Fetching data from API');

  }

  function deleteArticle(documentId) {
    console.log('TODO: Sending DELETE for', documentId);

  }

  function voteArticle(article) {
    console.log('TODO: Need to use PUT to upvote', article);

  }

  useEffect(fetchPosts, []);

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {
        blogPosts.map((post, index) => (
          <div className="Blog-article" key={post._id}>

            <h1>{post.title}</h1>
            <p>{post.text}</p>

            <div className="Blog-articleActions">
              <div onClick={() => deleteArticle(post._id)}>
                <span alt="delete this">🗑</span>
              </div>
              <div onClick={() => voteArticle(post)}>
                <span alt="upvote this">⬆ {post.voteCount}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Blog;
