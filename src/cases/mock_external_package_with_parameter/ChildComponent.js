import { useParams } from "@reach/router";

export const ChildComponent = () => {
  const { someId, postId } = useParams();

  return (
    <section>
      <h1>Display data from useParams</h1>
      <p>someId: {someId}</p>
      <p>postId: {postId}</p>
    </section>
  );
};
