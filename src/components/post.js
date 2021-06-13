import React, { useState } from "react";
import "../css/post.css";

//icons
import { ReactComponent as HeartEmpty } from "../assets/icons/heart_empty.svg";

const Post = () => {
  const [reply, setReply] = useState("");

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-header-avatar"></div>
        <div>Name</div>
      </div>
      <div className="post-image">
        <img
          alt="img"
          src="https://dynamicmedia.livenationinternational.com/Media/y/i/m/1b0c8ae8-e59d-4e1c-8829-4c8956abc8f5.jpg?auto=webp&width=1507.2"
        />
      </div>
      <div className="post-description">
        <div>Post description form author</div>
        <div className="reactons">Like</div>
        <div className="comments">
          <div className="post-reply">
            <input type="text" value={reply} placeholder="reply..." onChange={(e) => setReply(e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
