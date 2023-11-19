import React, { useState, useEffect } from 'react';
import './SingleBlogPost.css';

// Get the Article component
import Article from '../../Article/Article.js';

function SingleBlogPost(props) {
  const [post, setPost] = useState(null);

  function fetchSinglePost() {
    console.log('need to load', props.match.params.articleId);
    // HINT: /api/2

    // Modify...
    fetch('/api/')
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);

        // Do something...
      });

  }

  //useEffect(fetchSinglePost, []);

  return (
    <div className="SingleBlogPost">
      <h1>Single Post</h1>
      {
        post ? (
          <Article title={post.title} image={post.image}>
            {
              post.content.map((text, index) => (
                <p key={index}>{text}</p>
              ))
            }
          </Article>
        ) : null
      }

    </div>
  );
}

export default SingleBlogPost;
