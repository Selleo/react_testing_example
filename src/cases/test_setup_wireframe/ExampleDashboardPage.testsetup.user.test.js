import { ExampleDashboardPage } from "./ExampleDashboardPage";
import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AppSetup } from "./AppSetup";
import { mockApiAppSetup, mockApiCurrentUser, mockApiFeeds } from "./apiMocks";

const mock = new MockAdapter(axios);

const renderComponent = ({
  appOverrides,
  feedsOverrides,
  currentUserOverrides,
} = {}) => {
  // example mock setup wrappers for this page to function
  mockApiAppSetup({ mock, overrides: appOverrides });
  mockApiFeeds({ mock, overrides: feedsOverrides });
  mockApiCurrentUser({ mock, overrides: currentUserOverrides });

  return render(
    <AppSetup>
      <ExampleDashboardPage />
    </AppSetup>
  );
};

describe("ExampleDashboardPage", () => {
  describe("when accessed by user", () => {
    test("displays user' feed", async () => {});

    test("displays feed of user's friends", async () => {});

    test("displays error message when feed loading fails", async () => {});

    describe("entry operations", () => {
      test("allows removal of own entries", async () => {});

      test("does not allow removal of other users entries", async () => {});

      describe("new entry creation form", () => {
        test("allows creation of the new entry when all data are provided correctly", async () => {});

        test("displays error message when missing data in the form", async () => {});
      });
    });
  });
});
