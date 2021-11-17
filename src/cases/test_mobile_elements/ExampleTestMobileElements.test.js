import ExampleTestMobileElements from "./ExampleTestMobileElements";
import { render, screen } from "@testing-library/react";

let mockWindowWidth = 1080;
jest.mock("react-use", () => {
  return {
    ...jest.requireActual("react-use"),
    useMedia: () => mockWindowWidth <= 425,
  };
});

const resizeWindow = (isMobile) => {
  mockWindowWidth = isMobile ? 425 : 1080;
};

describe("ExampleTestMobileElements", () => {
  it("displays desktop text in desktop media", () => {
    resizeWindow(false);
    render(<ExampleTestMobileElements />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Desktop view" })
    ).toBeInTheDocument();

    // getByText will fail because element is split between tags
    // expect(screen.getByText("Desktop view")).toBeInTheDocument();
  });

  it("displays mobile text in mobile media", () => {
    resizeWindow(true);
    render(<ExampleTestMobileElements />);
    expect(
      screen.getByRole("heading", { level: 3, name: "Mobile view" })
    ).toBeInTheDocument();
  });
});
