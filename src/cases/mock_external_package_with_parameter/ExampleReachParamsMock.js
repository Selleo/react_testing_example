import { ChildComponent } from "./ChildComponent";
import { getPostById, getUserById } from "./api";
import { useEffect, useState } from "react";

export const ExampleReachParamsMock = ({ userId, postId }) => {
  const [user, setUser] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    getPostById(postId).then((resp) => setPost(resp));
  }, [postId]);

  useEffect(() => {
    getUserById(userId).then((resp) => setUser(resp));
  }, [userId]);

  return (
    <div>
      Data loaded from URL params passed by props
      <div>
        <h1>User data</h1>
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
      <div>
        <ChildComponent />
      </div>
    </div>
  );
};
