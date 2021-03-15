import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";



function Post({username,caption,imageUrl}) {
    
  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avatar" alt="faruk" />
        <h3>{username}</h3>
      </div>

      <img className="post_img" src={imageUrl} alt="Post" />
      <h4 className="post_text">
        <strong>{username}</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
