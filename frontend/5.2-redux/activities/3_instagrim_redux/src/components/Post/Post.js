import React from "react";
import { Link } from "react-router-dom";
import BoldButton from "../BoldButton/BoldButton";

import "./Post.css";

function Post(props) {
  // We create an image and put it in a variable called avatar
  //console.log(props);
  const avatar = (
    <img className='Post-avatar' src={props.avatar} alt='Post avatar' />
  );

  // If the "isBig" prop is specified, it will get a different class, so we
  // will style the post differently
  if (props.isBig) {
    return (
      <div className={"Post Post--bigPostView"}>
        <BoldButton onClick={() => props.onDelete(props.postId)}>x</BoldButton>
        {props.children}
        {avatar}
      </div>
    );
  } else {
    return (
      <Link to={"/view/" + props.postId} className={"Post Post--smallPostView"}>
        {props.children}
        {avatar}
      </Link>
    );
  }
}

export default Post;
