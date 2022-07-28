import React from "react";
import posts from "../posts";
import { useParams } from "react-router-dom";

function PostPage() {
  let params = useParams();
  const id = parseInt(params.id);
  const post = posts.find((p) => p.id === id);
  return (
    <div>
      <h1>{post.title}</h1>
      <hr></hr>
      <span>Posting to be implemented</span>
    </div>
  );
}

export default PostPage;
