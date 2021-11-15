import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import ChildComponent3 from "./ChildComponent3";

const TestComplexHook = () => {
  return (
    <div>
      <h1>Below we have multiple components using complex hook</h1>
      <ChildComponent1 />
      <ChildComponent2 />
      <ChildComponent3 />
    </div>
  );
};

export default TestComplexHook;
