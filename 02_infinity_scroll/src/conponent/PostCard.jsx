import React from "react";

const PostCard = ({ id, title }) => {
  return (
    <div className="border p-4 rounded-sm">
      <h2>{title}</h2>
      <button className="border bg-blue-400 p-3">Post ID: {id}</button>
    </div>
  );
};

export default PostCard;
