import ExampleRouter from "./ExampleRouter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ExampleRouter", () => {
  test("displays first page", async () => {
    render(<ExampleRouter />);

    userEvent.click(screen.getByRole("link", { name: "First" }));

    expect(await screen.findByText("First Page")).toBeInTheDocument();
  });

  test("displays second page", async () => {
    render(<ExampleRouter />);

    userEvent.click(screen.getByRole("link", { name: "Second" }));

    expect(await screen.findByText("Second page")).toBeInTheDocument();
  });

  test("displays nested first page", async () => {
    render(<ExampleRouter />);

    userEvent.click(screen.getByRole("link", { name: "Nested" }));

    expect(
      await screen.findByRole("heading", { name: "Nested home" })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: "First nest" }));

    expect(
      await screen.findByRole("heading", { name: "Nested first" })
    ).toBeInTheDocument();
  });

  test("displays nested second page", async () => {
    render(<ExampleRouter />);

    userEvent.click(screen.getByRole("link", { name: "Nested" }));

    expect(
      await screen.findByRole("heading", { name: "Nested home" })
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole("link", { name: "Second nest" }));

    expect(
      await screen.findByRole("heading", { name: "Nested Second" })
    ).toBeInTheDocument();
  });
});
