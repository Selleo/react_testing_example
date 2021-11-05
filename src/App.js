import { Router, Link } from "@reach/router";
import { ExampleReachParamsMock } from "./cases/mock_external_package_with_parameter/ExampleReachParamsMock";

function App() {
  return (
    <div>
      <Router>
        <ExampleReachParamsMock path="/reachParams/:userId/posts/:postId" />
      </Router>
    </div>
  );
}

export default App;
