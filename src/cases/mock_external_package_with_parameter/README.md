## Example of mocking external packages with dynamical values

In this example we need to mock `useParams` function from `@reach/router`

Component `ExampleReachParamsMock` receives URL params via component params because reach/router passes them automatically for components with routing eg. `<ExampleReachParamsMock path="user/:userId/posts/:postId" />`. This is easy to mock in tests. It's just a matter of passing them.

```js
const renderWithParams = ({ userId, postId } = {}) => {
  render(<ExampleReachParamsMock default userId={userId} postId={postId} />);
};
```

However `ChildComponent` is deeper in the three and gets url params via `const { userId, postId } = useParams();`

In order to pass the same params to both components we need to either:

- Define pseudo routing in the tests. Check [mock_routing_path](../mock_routing_path/README.md) case.
- Mock `useParams` hook from `@reach/router` (this case)

### Using variables in jest.mock

jest.mock does not allow variables unless they are named `mock_`

```js
let mockUserId = 123;
jest.mock("@reach/router", () => {
  return {
    ...jest.requireActual("@reach/router"),
    useParams: () => ({ userId: mockUserId, postId: 456 }),
  };
});
```

later on in the code we do
```js
const renderWithParams = ({ userId, postId } = {}) => {
  mockUserId = userId;
  render(<ExampleReachParamsMock userId={userId} postId={postId} />);
};
```

so the `mockUserId` value is updated accordingly to every specific test value
