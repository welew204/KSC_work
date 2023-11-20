import React from "react";
import "./SingleBlogPost.css";

import { blogPosts } from "../Blog/blogposts.js";

// Get the Article component
import Article from "../../Article/Article.js";

function SingleBlogPost(props) {
  // this needs updating!
  //console.log("rendering single blog post", props.match.params);
  console.log(blogPosts);
  const targ_post = blogPosts[props.match.params.articleId];
  console.log(targ_post);

  return (
    <div className='SingleBlogPost'>
      <Article title={targ_post.title} image={targ_post.image}>
        {targ_post.content}
      </Article>
    </div>
  );
}

export default SingleBlogPost;
