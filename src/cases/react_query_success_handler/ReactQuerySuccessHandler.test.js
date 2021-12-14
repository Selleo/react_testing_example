import ReactQuerySuccessHandler from "./ReactQuerySuccessHandler";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

const TestWrapper = ({ children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible ? children : "Unmounted"}
      <button onClick={() => setVisible((current) => !current)}>
        Toggle component
      </button>
    </>
  );
};

describe("ReactQuerySuccessHandler", () => {
  test("display message even when loading data from cache", async () => {
    jest.useFakeTimers();
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <TestWrapper>
          <ReactQuerySuccessHandler userId={3} />
        </TestWrapper>
      </QueryClientProvider>
    );

    expect(screen.getByText("Loading user 3 data")).toBeInTheDocument();

    jest.advanceTimersByTime(1500);

    expect(
      await screen.findByText("User: Tom 3 message initialized", {
        exact: false,
      })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "Toggle component" }));

    expect(screen.getByText("Unmounted")).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "Toggle component" }));

    expect(
      screen.getByText("User: Tom 3 message initialized", {
        exact: false,
      })
    ).toBeInTheDocument();
  });
});
