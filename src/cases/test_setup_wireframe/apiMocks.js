import {
  getAuthMethodsMock,
  getCountriesResponse,
  getLanguagesResponse,
  getCompanyBranding,
} from "./mocks";

export const mockApiAppSetup = ({ mock, overrides }) => {
  const {
    authMethods = [200, getAuthMethodsMock()],
    countries = [200, getCountriesResponse()],
    languages = [200, getLanguagesResponse()],
    branding = [200, getCompanyBranding()],
  } = overrides;
  mock.onGet("/api/authentication_methods").reply(authMethods);

  mock.onGet(`/api/countries`).reply(countries);
  mock.onGet(`/api/languages`).reply(languages);
  mock.onGet(`/api/branding`).reply(branding);
};

export const mockApiFeeds = ({ mock, overrides }) => {
  // mocking behavior
};
export const mockApiCurrentUser = ({ mock, overrides }) => {
  // mocking behavior
};
