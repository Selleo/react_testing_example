import { ChildComponent } from "./ChildComponent";
import { useEffect, useState } from "react";
import { getUserById } from "./api";

const ExampleReachParamsMock = ({ userId, postId }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserById(userId).then((resp) => setUser(resp));
  }, [userId]);

  return (
    <div>
      Data loaded from URL params passed by props
      <h3>userId: {userId}</h3>
      <h3>postId: {postId}</h3>
      <ChildComponent user={user} />
    </div>
  );
};

export default ExampleReachParamsMock;
