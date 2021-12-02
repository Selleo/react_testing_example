import { render, screen } from "@testing-library/react";
import { Router, Switch, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import RemountAfterRedirect from "./RemountAfterRedirect";

const renderTestComponent = () => {
  const history = createMemoryHistory(["/remountAfterRedirect/123"]);
  history.push("/remountAfterRedirect/123");

  return {
    ...render(
      <Router history={history}>
        <Switch>
          <Route path="/remountAfterRedirect/:id">
            <RemountAfterRedirect />
          </Route>
        </Switch>
      </Router>
    ),
    history,
  };
};

describe("RemountAfterRedirect", () => {
  it("sets adds the slug in url when entering without providing slug", () => {
    const { debug, history } = renderTestComponent();
    console.log(history.location.pathname);
    debug();
  });
});
