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

- Mock `useParams` hook from `@reach/router`. Check [mock_external_package](../mock_external_package_with_parameter/README.md) case.
- Define pseudo routing in the tests (this case)

```js
const renderWithParams = ({ userId, postId } = {}) => {
  const source = createMemorySource(`/users/${userId}/posts/${postId}`);
  const history = createHistory(source);
  
  render(
    <LocationProvider history={history}>
      <Router>
        <ExampleReachParamsMock path="/users/:userId/posts/:postId" />
      </Router>
    </LocationProvider>
  );
};
```

[DOCUMENTATION](https://reach.tech/router/api/LocationProvider)
