import { ExampleDashboardPage } from "./ExampleDashboardPage";
import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AppSetup } from "./AppSetup";
import { mockApiAppSetup, mockApiCurrentUser, mockApiFeeds } from "./apiMocks";

const mock = new MockAdapter(axios);

const adminMockOverride = {
  currentUser: [200, { id: 1, name: "Admin user", role: "Admin" }],
};

const renderComponent = ({
  appOverrides,
  feedsOverrides,
  currentUserOverrides = adminMockOverride,
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
  describe("when accessed by admin", () => {
    test("displays admin's feed", async () => {});

    test("displays admin's regular feed", async () => {});

    test("displays feed of admin's friends", async () => {});

    test("displays error message when feed loading fails", async () => {});

    describe("entry operations", () => {
      test("allows edit of entries", async () => {});

      test("allows duplication of entries", async () => {});

      test("allows removal of entries", async () => {});

      describe("new entry creation form", () => {
        test("allows creation of the new entry when all data are provided correctly", async () => {});

        test("displays error message when missing data in the form", async () => {});
      });
    });
  });
});
