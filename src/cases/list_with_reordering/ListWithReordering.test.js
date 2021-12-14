import ListWithReordering, { defaultItems } from "./ListWithReordering";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("ListWithReordering", () => {
  test("displays initial data", () => {
    render(<ListWithReordering />);

    const listItems = screen.getAllByRole("listitem");
    defaultItems.forEach(({ name }, index) => {
      expect(listItems[index]).toHaveTextContent(name);
    });
  });

  test("alternative1: does not display up arrow for first element", () => {
    render(<ListWithReordering />);

    const buttons = within(screen.getAllByRole("listitem")[0]).getAllByRole(
      "button",
      { hidden: true }
    );

    expect(buttons[0]).not.toBeVisible();
    expect(buttons[1]).toBeVisible();
  });

  test("alternative2: displays only down arrow for first element", () => {
    render(<ListWithReordering />);

    expect(
      within(screen.getAllByRole("listitem")[0]).getByRole("button")
    ).toHaveTextContent("chevron-compact-down.svg");
  });

  test("displays only up arrow for last element", () => {
    render(<ListWithReordering />);

    expect(
      within(screen.getAllByRole("listitem")[7]).getByRole("button")
    ).toHaveTextContent("chevron-compact-up.svg");
  });

  test("moves the item down when clicking down arrow", () => {
    render(<ListWithReordering />);

    expect(screen.getAllByRole("listitem")[3]).toHaveTextContent(
      "Item4: Mauris lacinia, diam quis vestibulum."
    );

    userEvent.click(
      within(screen.getAllByRole("listitem")[3]).getByRole("button", {
        name: "chevron-compact-down.svg",
      })
    );

    expect(screen.getAllByRole("listitem")[3]).toHaveTextContent(
      "Item5: Cras eu mauris a nulla."
    );
    expect(screen.getAllByRole("listitem")[4]).toHaveTextContent(
      "Item4: Mauris lacinia, diam quis vestibulum."
    );
  });

  test("moves the item up when clicking up arrow", () => {
    render(<ListWithReordering />);

    expect(screen.getAllByRole("listitem")[6]).toHaveTextContent(
      "Item7: Sed semper egestas felis, quis."
    );

    userEvent.click(
      within(screen.getAllByRole("listitem")[6]).getByRole("button", {
        name: "chevron-compact-up.svg",
      })
    );

    expect(screen.getAllByRole("listitem")[5]).toHaveTextContent(
      "Item7: Sed semper egestas felis, quis."
    );
    expect(screen.getAllByRole("listitem")[6]).toHaveTextContent(
      "Item6: Praesent dignissim, felis id efficitur."
    );
  });
});
