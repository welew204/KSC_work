import React from "react";
import "./Blog.css";
import { blogPosts } from "./blogposts.js";

// Get the Article component
import Article from "../../Article/Article.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Blog() {
  return (
    <div className='Blog'>
      <h1>Blog</h1>
      {blogPosts.map((post, idx) => (
        <Article title={post.title} image={post.image} key={post.id}>
          {post.content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <Link to={`/blog/${idx}`}>Read More!</Link>
        </Article>
      ))}
    </div>
  );
}

export default Blog;
