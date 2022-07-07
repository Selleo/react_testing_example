import { render, screen } from "@testing-library/react";
import ExampleRouterHistoryMock from "./ExampleRouterHistoryMock";
import { createHistory, createMemorySource, LocationProvider, Router } from "@reach/router";

const renderWithParams = ({ userId, postId } = {}) => {
  const source = createMemorySource(`/users/${userId}/posts/${postId}`);
  const history = createHistory(source);

  render(
    <LocationProvider history={history}>
      <Router>
        <ExampleRouterHistoryMock path="/users/:userId/posts/:postId" />
      </Router>
    </LocationProvider>
  );
};

describe("ExampleRouterHistoryMock", () => {
  it("displays user not loaded", () => {
    renderWithParams();

    expect(screen.getByText("User not loaded")).toBeInTheDocument();
  });

  it("displays post not loaded", () => {
    renderWithParams();

    expect(screen.getByText("Post not loaded")).toBeInTheDocument();
  });

  it("displays data for user 777 and post 888", () => {
    renderWithParams({ userId: 777, postId: 888 });

    screen.getByRole("heading", { level: 3, name: "userId: 777" });
    screen.getByRole("heading", { level: 3, name: "postId: 888" });
    screen.getByRole("heading", { level: 1, name: "User data for: 777" });
    screen.getByRole("heading", { level: 1, name: "Post data for: 888" });
  });

  it("displays data for user 123 and post 456", () => {
    renderWithParams({ userId: 123, postId: 456 });

    screen.getByRole("heading", { level: 3, name: "userId: 123" });
    screen.getByRole("heading", { level: 3, name: "postId: 456" });
    screen.getByRole("heading", { level: 1, name: "User data for: 123" });
    screen.getByRole("heading", { level: 1, name: "Post data for: 456" });
  });
  it("displays data for user 837 and post 911", () => {
    renderWithParams({ userId: 837, postId: 911 });

    screen.getByRole("heading", { level: 3, name: "userId: 837" });
    screen.getByRole("heading", { level: 3, name: "postId: 911" });
    screen.getByRole("heading", { level: 1, name: "User data for: 837" });
    screen.getByRole("heading", { level: 1, name: "Post data for: 911" });
  });
  it("displays data for user 112 and post 998", () => {
    renderWithParams({ userId: 112, postId: 998 });

    screen.getByRole("heading", { level: 3, name: "userId: 112" });
    screen.getByRole("heading", { level: 3, name: "postId: 998" });
    screen.getByRole("heading", { level: 1, name: "User data for: 112" });
    screen.getByRole("heading", { level: 1, name: "Post data for: 998" });
  });
});
