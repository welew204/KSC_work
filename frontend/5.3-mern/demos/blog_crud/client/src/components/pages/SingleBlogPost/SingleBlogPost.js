import React, { useState, useEffect } from 'react';
import './SingleBlogPost.css';
import { Link } from 'react-router-dom'

// Get the Article component
import Article from '../../Article/Article.js';

function SingleBlogPost() {
  
  const [post, setPost] = useState(null);


  useEffect(() => {
    console.log('Need to load', this.props.match.params.objectId);

    // Modify this...
    fetch('/api/' + this.props.match.params.objectId)
      .then(response => response.json())
      .then(data => {
        console.log('got data back!', data);
        setPost(
          post = data.post,
        );
      });

  }); 

  function doDelete() {
    fetch('/api/' + this.props.match.params.objectId + '/delete/', { method:'DELETE' })
      .then(response => response.json())
      .then(data => {
        console.log('Got data back!', data);
        // Let's redirect
        this.props.history.push('/blog/');
      });
  }


    const post = post;
    if (!post) {
      return (
        <div className="SingleBlogPost">
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div className="SingleBlogPost">
        <h1>Single Post</h1>
        <Link to={'/blog/'}>Back to blog</Link>
        {
          <Article title={post.title} image={post.image}>
            <p>{post.content}</p>
          </Article>
        }

        <br />
        <br />
        <br />
        <br />
        <hr />
        <h3>Administrator actions:</h3>

        <button onClick={doDelete}>Delete</button>
      </div>
    );
  }

export default SingleBlogPost;
