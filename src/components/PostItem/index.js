import React from "react";

import "./PostItem.css";

import Comment from "../Comment";

const PostItem = ({ data }) => (
  <div className="post-container">
    <div className="post-header">
      <img
        className="post-img"
        src={data.author.avatar}
        alt={data.author.name}
      />
      <div className="post-author">
        <p className="post-author-name">{data.author.name}</p>
        <p className="post-author-date">{data.date}</p>
      </div>
    </div>
    <div className="post-content-container">
      <p className="post-content-text">{data.content}</p>
    </div>
    <div className="post-divider" />
    <div>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  </div>
);

export default PostItem;
