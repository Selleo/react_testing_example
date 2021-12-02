import { render, screen } from "@testing-library/react";
import RemountAfterRedirect from "./RemountAfterRedirect";
import { Router, navigate } from "@reach/router";

const renderMockComponent = () => {
  navigate("/remountAfterRedirect/123");

  return render(
    <Router>
      <RemountAfterRedirect path="/remountAfterRedirect/:id" />
    </Router>
  );
};

describe("RemountAfterRedirect", () => {
  it("sets adds the slug in url when entering without providing slug", async () => {
    renderMockComponent();

    expect(screen.getByText("param: 123")).toBeInTheDocument();

    expect(await screen.findByText("param: 123-with-slug")).toBeInTheDocument();
  });
});
