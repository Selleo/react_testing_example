import { ExampleDashboardPage } from "./ExampleDashboardPage";
import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { AppSetup } from "./AppSetup";
import { mockApiAppSetup, mockApiCurrentUser, mockApiFeeds } from "./apiMocks";

const mock = new MockAdapter(axios);

const notLoggedMockOverride = {
  currentUser: [404, {}],
};

const renderComponent = ({
  appOverrides,
  feedsOverrides,
  currentUserOverrides = notLoggedMockOverride,
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
  describe("when accessed by guest", () => {
    test("displays welcome info and login panel", async () => {});
  });
});
