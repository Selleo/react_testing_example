import { useParams } from "@reach/router";
import { useEffect, useState } from "react";
import { getPostById } from "./api";

export const ChildComponent = ({ user }) => {
  const { userId, postId } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    getPostById(postId).then((resp) => setPost(resp));
  }, [postId]);

  return (
    <>
      <div>
        <h1>User data for: {userId}</h1>
        {user ? (
          <p>
            Name: {user.name}, Address: {user.address}
          </p>
        ) : (
          "User not loaded"
        )}
      </div>
      <div>
        <h1>Post data</h1>
        {post ? (
          <p>
            Title: {post.title}, Content: {post.content}
          </p>
        ) : (
          "Post not loaded"
        )}
      </div>
    </>
  );
};
