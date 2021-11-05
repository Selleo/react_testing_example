import { ExampleReachParamsMock } from "./mock_external_package_with_parameter/ExampleReachParamsMock";

const examples = [
  {
    Component: ExampleReachParamsMock,
    path: "/reachParams/:userId/posts/:postId",
    to: "/reachParams/123/posts/456",
    linkText: "ExampleReachParamsMock",
  },
];

export default examples
