import React, { useState, useEffect } from "react";
import "./SingleBlogPost.css";

// Get the Article component
import Article from "../../Article/Article.js";

function SingleBlogPost(props) {
  const [post, setPost] = useState(null);

  function fetchSinglePost() {
    //console.log(props.match);
    // HINT: /api/2

    // Modify...
    fetch("/api/" + props.match.params.articleId)
      .then((response) => response.json())
      .then((data) => {
        console.log("got data back!", data);
        setPost(data.post);
        // Do something...
      });
  }

  function handleDelete() {
    console.log("deleting shit!");
    fetch(`/api/${props.match.params.articleId}/delete/`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log("deleted..." + props.match.params.articleId);
        props.history.push("/blog/");
        // Do something...
      });
  }

  useEffect(fetchSinglePost, []);

  return (
    <div className='SingleBlogPost'>
      <h1>Single Post</h1>
      {post ? (
        <Article title={post.title} image={post.image}>
          {post.content.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </Article>
      ) : null}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SingleBlogPost;
