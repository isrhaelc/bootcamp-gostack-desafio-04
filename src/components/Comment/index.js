import React from "react";

import "./Comment.css";

const Comment = ({ data }) => (
  <div key={data.id} className="comment">
    <img className="avatar" src={data.author.avatar} />
    <p>
      <span>{data.author.name}</span>
      {data.content}
    </p>
  </div>
);

export default Comment;
