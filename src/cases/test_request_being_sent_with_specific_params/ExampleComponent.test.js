import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { ExampleComponent } from "./ExampleComponent";
import {
  filteredResourceFixture,
  mockResource,
  resourceFixture,
} from "./mockResource";
import userEvent from "@testing-library/user-event";

const mock = new MockAdapter(axios);

const renderComponent = ({ resourceOverrides } = {}) => {
  mockResource({ mock, overrides: resourceOverrides });

  return render(<ExampleComponent />);
};

describe("ExampleComponent", () => {
  describe("filtering button", () => {
    test("sends request with filtering params (#1 approach - test if request has been sent)", async () => {
      renderComponent();
      await waitForElementToBeRemoved(() => screen.getByText("Loading"));

      resourceFixture.forEach(({ name }) => {
        expect(screen.getByRole("listitem", { name })).toBeInTheDocument();
      });
      userEvent.click(screen.getByRole("button", { name: "Send with params" }));

      // simpler to test as we do not need to create and maintain mock for request with param
      // it is also useful in cases when the request response does not result in UI changes
      await waitFor(() => {
        const resource = mock.history.get
          .filter(({ url, params }) => url === "/api/resource")
          .at(-1);
        expect(resource.params?.filter?.name).toEqual("Te");
      });
    });

    test("gets filtered data (#2 approach - test UI after request with params resolves)", async () => {
      renderComponent();
      await waitForElementToBeRemoved(() => screen.getByText("Loading"));

      resourceFixture.forEach(({ name }) => {
        expect(screen.getByRole("listitem", { name })).toBeInTheDocument();
      });
      expect(screen.getAllByRole("listitem")).toHaveLength(8);

      userEvent.click(screen.getByRole("button", { name: "Send with params" }));

      await waitFor(() => {
        expect(screen.getAllByRole("listitem")).toHaveLength(4);
      });
      filteredResourceFixture.forEach(({ name }) => {
        expect(screen.getByRole("listitem", { name })).toBeInTheDocument();
      });
    });
  });
});
