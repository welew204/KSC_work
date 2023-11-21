import React, { useState, useEffect } from "react";
import "./Blog.css";

import { Link } from "react-router-dom";

// Get the Article component
import Article from "../../Article/Article.js";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  function doFetchAll() {
    console.log("doing the fetch thing");
    fetch("/api/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("got data back!", data);
        // Hint:
        setBlogPosts(data.posts);
      });
  }

  // HINT:
  useEffect(doFetchAll, []);

  return (
    <div className='Blog'>
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <Article title={post.title} image={post.image} key={post.id}>
          {post.content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <Link to={"/articles/" + post.id}>Read more...</Link>
        </Article>
      ))}
    </div>
  );
}

export default Blog;
