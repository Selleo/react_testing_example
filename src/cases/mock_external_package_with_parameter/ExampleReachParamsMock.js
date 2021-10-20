import { ChildComponent } from "./ChildComponent";

export const ExampleReachParamsMock = ({ someId, postId }) => {
  return (
    <div>
      Some content and params from props
      <p>someId from props: {someId}</p>
      <p>postId from props: {postId}</p>
      <div>
        <ChildComponent />
      </div>
    </div>
  );
};
