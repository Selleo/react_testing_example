import { useParams } from "@reach/router";

export const ChildComponent = () => {
  const { userId, postId } = useParams();

  return (
    <section>
      <h1>Display data from useParams</h1>
      <p>userId: {userId}</p>
      <p>postId: {postId}</p>
    </section>
  );
};
